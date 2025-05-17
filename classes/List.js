const XOR = require(__dirname + "/../classes/XOR");
const music = require(__dirname + "/../misc/music.json");

let orbs = [0, 0, 50, 75, 125, 175, 225, 275, 350, 425, 500]
// let length = ['Tiny', 'Short', 'Medium', 'Long', 'XL']
let difficulty = { 0: 'Unrated', 10: 'Easy', 20: 'Normal', 30: 'Hard', 40: 'Harder', 50: 'Insane' }
let demonTypes = { 3: "Easy", 4: "Medium", 5: "Insane", 6: "Extreme" }

class List {
    constructor(listInfo, server, download, author = []) {
        this.name = listInfo[2] || "-";
        this.id = listInfo[1] || 0;
        this.description = Buffer.from((listInfo[3] || ""), "base64").toString() || "(No description provided)";
        this.author = author[1] || "-"
        this.playerID = listInfo[6] || 0
        this.accountID = author[2] || 0
        this.difficulty = difficulty[listInfo[9]] || "Unrated"
        this.downloads = +listInfo[10] || 0
        this.likes = +listInfo[14] || 0
        this.disliked = listInfo[14] < 0
        this.length = length[listInfo[15]] || "XL"
        this.stars = +listInfo[18] || 0
        this.orbs = orbs[listInfo[18]] || 0
        this.diamonds = !listInfo[18] || (listInfo[18]) < 2 ? 0 : parseInt(listInfo[18]) + 2
        this.featured = listInfo[19] > 0
        this.epic = listInfo[42] > 0
        this.gameVersion = listInfo[13] > 17 ? (listInfo[13] / 10).toFixed(1) : listInfo[13] == 11 ? "1.8" : listInfo[13] == 10 ? "1.7" : "Pre-1.7"
        if (listInfo[28]) this.uploaded = listInfo[28] + (server.timestampSuffix || "")
        if (listInfo[29]) this.updated = listInfo[29] + (server.timestampSuffix || "")
        if (listInfo[46]) this.editorTime = +listInfo[46] || 0
        if (listInfo[47]) this.totalEditorTime = +listInfo[47] || 0
        if (listInfo[27]) this.password = listInfo[27];
        this.version = +listInfo[5] || 0;
        this.copiedID = listInfo[30] || "0"
        this.twoPlayer = listInfo[31] > 0
        this.officialSong = +listInfo[35] ? 0 : parseInt(listInfo[12]) + 1
        this.customSong = +listInfo[35] || 0
        this.coins = +listInfo[37] || 0
        this.verifiedCoins = listInfo[38] > 0
        this.starsRequested = +listInfo[39] || 0
        this.ldm = listInfo[40] > 0
        if (+listInfo[41] > 100000) this.weekly = true
        if (+listInfo[41]) { this.dailyNumber = (+listInfo[41] > 100000 ? +listInfo[41] - 100000 : +listInfo[41]); this.nextDaily = null; this.nextDailyTimestamp = null }
        this.objects = +listInfo[45] || 0
        this.large = listInfo[45] > 40000;
        this.cp = Number((this.stars > 0) + this.featured + this.epic)

        if (listInfo[17] > 0) this.difficulty = (demonTypes[listInfo[43]] || "Hard") + " Demon"
        if (listInfo[25] > 0) this.difficulty = 'Auto'
        this.difficultyFace = `${listInfo[17] != 1 ? this.difficulty.toLowerCase() : `demon-${this.difficulty.toLowerCase().split(' ')[0]}`}${this.epic ? '-epic' : `${this.featured ? '-featured' : ''}`}`

        if (this.password && this.password != 0) {
            let xor = new XOR();
            let pass = xor.decrypt(this.password, 26364);
            if (pass.length > 1) this.password = pass.slice(1);
            else this.password = pass;
        }

        if (server.onePointNine) {
            this.orbs = 0
            this.diamonds = 0
            if (this.difficultyFace.startsWith('demon')) {
                this.difficulty = "Demon"
                this.difficultyFace = this.difficultyFace.replace(/demon-.+?($|-)(.+)?/, "demon$1$2")
            }
        }

        if (this.editorTime == 1 && this.totalEditorTime == 2) { this.editorTime = 0; this.totalEditorTime = 0 } // remove GDPS default values
    }

    getSongInfo(songInfo) {
        if (this.customSong) {
            this.songName = songInfo[2] || "Unknown"
            this.songAuthor = songInfo[4] || "Unknown"
            this.songSize = (songInfo[5] || "0") + "MB"
            this.songID = songInfo[1] || this.customSong
            if (songInfo[10]) this.songLink = decodeURIComponent(songInfo[10])
        }
        else {
            let foundSong = music[this.officialSong] || {"null": true}
            this.songName =  foundSong[0] || "Unknown"
            this.songAuthor = foundSong[1] || "Unknown"
            this.songSize = "0MB"
            this.songID = "Level " + this.officialSong
        }
        
        return this
    }
}

module.exports = List;