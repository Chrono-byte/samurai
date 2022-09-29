const { Katana } = require("@chronomly/katana");
const blade = new Katana("./database", { encrypt: true, saveToDisk: true });

blade.purgeState();
for (let index = 0; index < 1; index++) {
	blade.push("Hello!", `${Math.random() * 10}`);
}