class Stack {
	constructor(maxSize) {
		this.maxSize = maxSize;
		this.top = -1;
		this.stack = new Array(maxSize);
	}

	// Push operation
	push(item) {
		if (this.top >= this.maxSize - 1) {
			return "Stack is full";
		}
		this.top++;
		this.stack[this.top] = item;
	}

	// Pop operation
	pop() {
		if (this.top === -1) {
			return "Stack is empty";
		}
		let poppedElement = this.stack[this.top];
		this.top--;
		return poppedElement;
	}

	// Peek operation
	peek() {
		if (this.top === -1) {
			return "Stack is empty";
		}
		return this.stack[this.top];
	}

	// Check if stack is empty
	isEmpty() {
		return this.top === -1;
	}
}

// Using the Stack class
let stack = new Stack(3);
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // prints 30
console.log(stack.peek()); // prints 20
console.log(stack.push(40)); // prints undefined because stack is not full
console.log(stack.push(50)); // prints 'Stack is full' because stack is already full
console.log(stack); // Stack { maxSize: 3, top: 2, stack: [ 10, 20, 40 ] }
