class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.size = 0;
	}

	// add element to the top of the stack
	push(val) {
		let newNode = new Node(val);
		if (this.top === null) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}
		this.size++;
		return this.size;
	}

	// remove and return the top element from the stack
	pop() {
		if (this.top === null) {
			return "Stack is empty";
		}
		let poppedNode = this.top;
		this.top = poppedNode.next;
		this.size--;
		return poppedNode.val;
	}

	// return the top element of the stack without removing it
	peek() {
		if (this.top === null) {
			return "Stack is empty";
		}
		return this.top.val;
	}

	// check if the stack is empty
	isEmpty() {
		return this.top === null;
	}

	// return the number of elements in the stack
	length() {
		return this.size;
	}
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // prints 3
console.log(stack.peek()); // prints 2
console.log(stack.isEmpty()); // prints false
console.log(stack.length()); // prints 2
console.log(stack);
/* Stack {
  top: Node { val: 2, next: Node { val: 1, next: null } },
  size: 2
}
*/
