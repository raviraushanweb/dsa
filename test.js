class Queue {
  constructor() {
    this.items = [];
  }

  //enqueue
  enqueue(element) {
    this.items.push(element);
  }

  //dequeue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  //front
  front() {
    if (this.items.length === 0) {
      return "No elements";
    }
    return this.items[0];
  }

  //back
  back() {
    if (this.items.length === 0) {
      return "No elements";
    }
    return this.items[this.items.length - 1];
  }
}

var maxSlidingWindow = function (nums, k) {
  let res = [];
  let l = 0;
  let r = 0;
  let q = new Queue();

  while (r < nums.length) {
    while (q && nums[q.back()] < nums[r]) {
      q.dequeue();
    }
    q.enqueue(r);

    if (l > q[0]) {
    }
  }

  return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
maxSlidingWindow(nums, k); //?
