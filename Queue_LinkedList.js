class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.front = null;
		this.rear = null;
		this.size = 0;
	}

	// Add and element to the end (rear) of the queue
	enqueue(val) {
		let newNode = new Node(val);
		if (!this.rear) {
			this.front = newNode;
			this.rear = newNode;
		} else {
			this.rear.next = newNode;
			this.rear = newNode;
		}
		this.size++;
		return this.size;
	}

	// Remove and return the element from the front (front) of the queue
	dequeue() {
		if (!this.front) {
			return "Queue is empty";
		}

		let temp = this.front;
		this.front = temp.next;
		if (this.front === null) this.rear = null;
		this.size--;
		return temp.val;
	}

	// Return the front element of the queue without removing it
	peek() {
		if (!this.front) {
			return "Queue is empty";
		}
		return this.front.val;
	}

	// Return the number of elements in the queue
	length() {
		return this.size;
	}

	// is the queue empty?
	isEmpty() {
		return this.size === 0;
	}
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.length()); // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.enqueue(4);
console.log(queue);
/*
Queue {
  front: Node { val: 2, next: Node { val: 3, next: [Node] } },
  rear: Node { val: 4, next: null },
  size: 3
}
*/

console.dir(queue, { depth: null });
/*
Queue {
  front: Node {
    val: 2,
    next: Node { val: 3, next: Node { val: 4, next: null } }
  },
  rear: Node { val: 4, next: null },
  size: 3
}
*/
