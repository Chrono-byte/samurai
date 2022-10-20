// const { Katana } = require("@chronomly/katana");

const { Katana } = require("../../");
const blade = new Katana("./database", { encrypt: true, saveToDisk: true });
const nameArray = ["John", "Jane", "Jack", "Jill", "Jenny", "Jen", "Bob", "Jackie", "Doc", "Marty", "Amelia", "Daniel", "Terry", "Brandon", "Leo"];

blade.purgeState();

for (let index = 0; index < nameArray.length; ++index) {
	let x = Math.floor(Math.random() * 100000);
	blade.write(`Hello! ${nameArray[Math.floor(x / 10000)]}`, x);
	console.log([x, blade.get(x), blade.has(x)]);
	blade.overwrite(`Hello! ${nameArray[index % nameArray.length]}`, x);
}

for (const key in blade.library) {
	blade.delete(key);
}

console.log(blade.exportState());
