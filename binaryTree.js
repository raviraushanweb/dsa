class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

// const dfs = (root) => {
// 	const res = [];
// 	function helper(root) {
// 		if (!root) return [];
// 		return [...helper(root.left), root.val, ...helper(root.right)];
// 	}
// 	const x = helper(root);
// 	return x;
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

function createBinaryTree(arr, i) {
	// [1, 2, 5, 3, 4, null, 6] Level Order Traversal
	let root = null;
	if (i < arr.length && arr[i]) {
		root = new TreeNode(arr[i]);
		root.left = createBinaryTree(arr, 2 * i + 1) || null;
		root.right = createBinaryTree(arr, 2 * i + 2) || null;
		return root;
	}
	return root;
}

const parent = new Map();

const dfs = (node, par) => {
	if (node) {
		parent.set(node, par);
		dfs(node.left, node);
		dfs(node.right, node);
	}
};

// const distanceK = (root, target, K) => {
// 	dfs(root, null);

// 	const queue = [];
// 	queue.push(null);
// 	queue.push(target);

// 	const seen = new Set();
// 	seen.add(target);
// 	seen.add(null);

// 	let dist = 0;
// 	while (queue.length > 0) {
// 		const node = queue.shift();
// 		if (node === null) {
// 			if (dist === K) {
// 				return queue.map((n) => n.val);
// 			}
// 			queue.push(null);
// 			dist++;
// 		} else {
// 			if (!seen.has(node.left)) {
// 				seen.add(node.left);
// 				queue.push(node.left);
// 			}
// 			if (!seen.has(node.right)) {
// 				seen.add(node.right);
// 				queue.push(node.right);
// 			}
// 			const par = parent.get(node);
// 			if (!seen.has(par)) {
// 				seen.add(par);
// 				queue.push(par);
// 			}
// 		}
// 	}

// 	return [];
// };



// const bft = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
// 	target = 5,
// 	k = 2;
// let root = createBinaryTree(bft, 0); //?
// distanceK(root, target, k); //?



var generateTrees = function (n) {
	if (n == 0) return [];
	function helper(start, end) {
		const ans = [];
		if (start > end) {
			ans.push(null);
			return ans;
		}
		if (start == end) {
			ans.push(new TreeNode(start));
			return ans;
		}

		for (let i = start; i <= end; i++) {
			const leftSubTree = helper(start, i - 1);
			const rightSubTree = helper(i + 1, end);
			for (let l of leftSubTree) {
				for (let r of rightSubTree) {
					const node = new TreeNode(i);
					node.left = l;
					node.right = r;
					ans.push(node);
				}
			}
		}
		return ans;
	}
	return helper(1, n);
};

generateTrees(3);