const obj = {
	name: 'ravi',
	age: 10
}

obj.age; //?
obj.name; //?

const username = "testmewp";
const password = "l&pjZdd#1AU*jdtFjyaAK9LP";

const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");

console.log(token);
