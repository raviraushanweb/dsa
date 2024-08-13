class LRUCache {
	constructor(capacity) {
		this.cache = new Map();
		this.capacity = capacity;
	}

	get(key) {
		if (!this.cache.has(key)) return -1;

		const v = this.cache.get(key);
		this.cache.delete(key);
		this.cache.set(key, v);
		return this.cache.get(key);
	}

	put(key, value) {
		if (this.cache.has(key)) {
			this.cache.delete(key);
		}
		this.cache.set(key, value);
		if (this.cache.size > this.capacity) {
			this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
		}
	}
}

function test() {
	const map = new Map();

	map.set("foo", "baz");
	map.set("xb", "raaz");
	map.set("zb", "veer");

	console.log("type of map: ", typeof map);
	let keys = map.keys();
	console.log("type of keys: ", typeof keys);
	console.log("keys: ", keys);

	console.log("map: ", map);
	console.log("value: ", keys.next().value);
}

test();
