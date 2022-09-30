// const { Katana } = require("@chronomly/katana");

const { Katana } = require("../../");
const blade = new Katana("./database", { encrypt: false, saveToDisk: false });
const nameArray = ["John", "Jane", "Jack", "Jill", "Jenny", "Jen", "Bob", "Jackie", "Doc", "Marty", "Amelia", "Daniel"];

blade.purgeState();
for (let index = 0; index < nameArray.length; index++) {
	let x = Math.floor(Math.random() * 100000);
	blade.write(`Hello! ${nameArray[index % nameArray.length]}`, x);
	let y = blade.get(x);
	console.log([x, y]);
}

for (const key in blade.library) {
	blade.delete(key);
}
console.log(blade.exportState());