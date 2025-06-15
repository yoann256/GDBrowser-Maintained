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
        this.author = author[50] || "-"
        this.playerID = listInfo[49] || 0
        this.accountID = author[49] || 0
        this.difficulty = difficulty[listInfo[7]] || "Unrated"
        this.downloads = +listInfo[10] || 0
        this.likes = +listInfo[14] || 0
        this.disliked = listInfo[14] < 0
        this.reward = listInfo[55]
        this.rated = listInfo[19] > 0
        if (listInfo[28]) this.uploaded = listInfo[28] + (server.timestampSuffix || "")
        if (listInfo[29]) this.updated = listInfo[29] + (server.timestampSuffix || "")
        this.version = +listInfo[5] || 0;
        this.difficultyFace = listInfo[7]

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

    getLevels() {
        return this;
    }
}

module.exports = List;