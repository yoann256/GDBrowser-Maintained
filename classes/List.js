const XOR = require(__dirname + "/../classes/XOR");
const music = require(__dirname + "/../misc/music.json");

let orbs = [0, 0, 50, 75, 125, 175, 225, 275, 350, 425, 500]
let difficulty = { 0: 'Unrated', 10: 'Easy', 20: 'Normal', 30: 'Hard', 40: 'Harder', 50: 'Insane' }
let demonTypes = { 3: "Easy", 4: "Medium", 5: "Insane", 6: "Extreme" }

class List {
    constructor(listInfo, server, author = []) {
        this.name = listInfo[2] || "-";
        this.id = listInfo[1] || 0;
        this.description = Buffer.from((listInfo[3] || ""), "base64").toString() || "(No description provided)";
        this.author = author[50] || "-";
        this.playerID = listInfo[49] || 0;
        this.accountID = author[49] || 0;
        this.difficulty = difficulty[listInfo[7]] || "Unrated";
        this.downloads = +listInfo[10] || 0;
        this.likes = +listInfo[14] || 0;
        this.disliked = listInfo[14] < 0;
        this.reward = +listInfo[55] || 0; // Assuming reward is a number
        this.rated = +listInfo[19] > 0; // Assuming 19 means rated status
        if (listInfo[28]) this.uploaded = listInfo[28] + (server.timestampSuffix || "");
        if (listInfo[29]) this.updated = listInfo[29] + (server.timestampSuffix || "");
        this.version = +listInfo[5] || 0;
        this.difficultyFace = listInfo[7]; // This seems to be the raw difficulty value

        // The following properties are not typically part of a level list object from getGJLevelLists
        // They seem to be more related to individual levels.
        // If they are meant to be here, please clarify how they relate to the list.
        // For example, a list doesn't have a 'password' or 'orbs' itself, but its contained levels do.
        // Assuming we are strictly adhering to the list object properties:
        // Removed: this.password, this.editorTime, this.totalEditorTime, this.orbs, this.diamonds
        // and the related logic.

        if (this.difficultyFace.startsWith('demon')) {
            this.difficulty = "Demon";
            this.difficultyFace = this.difficultyFace.replace(/demon-.+?($|-)(.+)?/, "demon$1$2");
        }
    }

    getlists() {
        return this;
    }
}

module.exports = List;