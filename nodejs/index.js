const {
	PriorityQueue,
	MinPriorityQueue,
	MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

// Max/Min Priority Queue
const arr = [10, 22, 4, 5, 21, 8, 9, 59];

const numbersMinQueue = new MinPriorityQueue();
const numbersMaxQueue = new MaxPriorityQueue();

for (let i = 0; i < arr.length; i++) {
	numbersMaxQueue.enqueue(i, arr[i]);
	numbersMinQueue.enqueue(i, arr[i]);
}

// console.log(numbersMaxQueue.toArray());
// console.log(numbersMinQueue.toArray());

// const max = numbersMaxQueue.dequeue();
// console.log("Max: ", max); // Output: Max:  { priority: 59, element: 7 }
// console.log(max.priority); // Output: 59
// console.log(max.element); // Output: 7

const front = numbersMaxQueue.front();
console.log(front); // Output: { priority: 59, element: 7 }

const back = numbersMaxQueue.back();
console.log(back); // Output: { priority: 4, element: 2 }
