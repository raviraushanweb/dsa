class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = this.right = null;
	}
}

function iterativePostOrderTraversal(root) {
	if (root === null) return;

	const stack1 = [root];
	const stack2 = [];

	while (stack1.length > 0) {
		const currentNode = stack1.pop();
		stack2.push(currentNode);

		if (currentNode.left !== null) {
			stack1.push(currentNode.left);
		}
		if (currentNode.right !== null) {
			stack1.push(currentNode.right);
		}
	}

    stack1;
    stack2;

	while (stack2.length > 0) {
		const currentNode = stack2.pop();
		console.log(currentNode.value);
	}
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

iterativePostOrderTraversal(root); //?
