class Queue {
	constructor(maxSize = 16) {
		this.queue = new Array(maxSize);
		this.start = -1; // front
		this.end = -1; // rear
		this.currSize = 0;
		this.maxSize = maxSize;
	}

	push(item) {
		if (this.currSize === this.maxSize) {
			return "Queue is full";
		}
		if (this.end === -1) {
			this.start = 0;
			this.end = 0;
		} else {
			this.end = (this.end + 1) % this.maxSize;
		}
		this.queue[this.end] = item;
		this.currSize++;
		return `Item added successfully ${item}`;
	}

	pop() {
		if (this.start === -1) {
			return "Queue is empty";
		}
		let popped = this.queue[this.start];
		if (this.currSize === 1) {
			this.start = -1;
			this.end = -1;
		} else {
			this.start = (this.start + 1) % this.maxSize;
		}
		this.currSize--;
		return popped;
	}

	top() {
		if (this.start === -1) {
			return "Queue is empty";
		}
		return this.queue[this.start];
	}

	size() {
		return this.currSize;
	}
}

let q = new Queue(6);
q.push(4);
q.push(14);
q.push(24);
q.push(34);
console.log("The peek of the queue before deleting any element " + q.top()); // 4
console.log("The size of the queue before deletion " + q.size()); // 4
console.log("The first element to be deleted " + q.pop()); // 4
console.log("The peek of the queue after deleting an element " + q.top()); // 14
console.log("The size of the queue after deleting an element " + q.size()); // 3
