const request = require('request')
const music = require('../misc/music.json')
const List = require('../classes/List.js')
let demonList = {}

module.exports = async (app, req, res) => {
    if (req.offline) return res.status(500).send(req.query.hasOwnProperty("err") ? "err" : "-1")

    let amount = 10;
    let count = req.isGDPS ? 10 : +req.query.count
    if (count && count > 0) {
      if (count > 500) amount = 500
      else amount = count;
    }
    
    let filters = {
        str: req.params.text,
        diff: req.query.diff,
        demonFilter: req.query.demonFilter,
        page: req.query.page || 0,
        gauntlet: req.query.gauntlet || 0,
        len: req.query.length,
        song: req.query.songID,
        followed: req.query.creators,
        featured: req.query.hasOwnProperty("featured") ? 1 : 0,
        originalOnly: req.query.hasOwnProperty("original") ? 1 : 0,
        twoPlayer: req.query.hasOwnProperty("twoPlayer") ? 1 : 0,
        coins: req.query.hasOwnProperty("coins") ? 1 : 0,
        epic: req.query.hasOwnProperty("epic") ? 1 : 0,
        star: req.query.hasOwnProperty("starred") ? 1 : 0,
        noStar: req.query.hasOwnProperty("noStar") ? 1 : 0,
        customSong: req.query.hasOwnProperty("customSong") ? 1 : 0,
        type: req.query.type || 0,
        count: amount
    }

    if (req.query.type) {
        let filterCheck = req.query.type.toLowerCase()
        switch(filterCheck) {
            case 'mostdownloaded': filters.type = 1; break;
            case 'mostliked': filters.type = 2; break;
            case 'trending': filters.type = 3; break;
            case 'recent': filters.type = 4; break;
            case 'featured': filters.type = 6; break;
            case 'magic': filters.type = 7; break;
            case 'awarded': filters.type = 11; break;
            case 'starred': filters.type = 11; break;
            case 'halloffame': filters.type = 16; break;
            case 'hof': filters.type = 16; break;
            case 'gdw': filters.type = 17; break;
            case 'gdworld': filters.type = 17; break;
        }
    }

    if (req.query.hasOwnProperty("user")) {
        let accountCheck = app.userCache(req.id, filters.str)
        filters.type = 5
        if (accountCheck) filters.str = accountCheck[1]
        else if (!filters.str.match(/^[0-9]*$/)) return app.run.profile(app, req, res, null, req.params.text)
    } 

    if (req.query.hasOwnProperty("creators")) filters.type = 12

    let listSize = 10
    let demonMode = req.query.demonlist ? true : false; 
    if (demonMode || req.query.gauntlet || req.query.type == "saved" || ["mappack", "list", "saved"].some(x => req.query.hasOwnProperty(x))) {
        filters.type = 10
        filters.str = demonMode ? demonList[req.id].list : filters.str.split(",")
        listSize = filters.str.length
        filters.str = filters.str.slice(filters.page*amount, filters.page*amount + amount)
        if (!filters.str.length) return res.sendError(400)
        filters.str = filters.str.map(x => String(Number(x) + (+req.query.l || 0))).join()
        filters.page = 0
    }

    if (req.isGDPS && filters.diff && !filters.len) filters.len = "-"
    if (filters.str == "*") delete filters.str

    req.gdRequest('getGJLevelLists', req.gdParams(filters), function(err, resp, body) {
        if (err) return res.sendError()

        let splitBody = body.split('#')
        let listArray = app.parseResponse(splitBody[0])
        let authorArray = splitBody[1] ? splitBody[1].split('|') : []
        let authorList = app.parseResponse(authorArray)
        let parsedlists = []

        listArray.forEach((x, y) => {
            let list = new List(x, req.server).getlists()
            if (!list.id) return
            list.author = authorList[x[6]] ? authorList[x[6]][0] : "-";
            list.accountID = authorList[x[6]] ? authorList[x[6]][1] : "0";

            if (demonMode) {
                if (!y) list.demonList = req.server.demonList
                list.demonPosition = demonList[req.id].list.indexOf(list.id) + 1
            }

            if (req.isGDPS) list.gdps = (req.onePointNine ? "1.9/" : "") + req.server.id
            if (list.author != "-" && app.config.cacheAccountIDs) app.userCache(req.id, list.accountID, list.playerID, list.author)

            if (filters.page == 0 && y == 0 && splitBody[3]) {
                let pages = splitBody[3].split(":");

                if (filters.gauntlet) { 
                    list.results = listArray.length 
                    list.pages = 1
                } else if (filters.type == 10) { 
                    list.results = listSize
                    list.pages = +Math.ceil(listSize / (amount || 10))
                } else { 
                    list.results = +pages[0];
                    list.pages = +pages[0] == 9999 ? 1000 : +Math.ceil(pages[0] / amount);
                }
            }

            parsedlists[y] = list
        })

        if (filters.type == 10) parsedlists = parsedlists.slice((+filters.page) * amount, (+filters.page + 1) * amount)
        return res.send(parsedlists)
    })
}