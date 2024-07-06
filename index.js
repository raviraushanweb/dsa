class Node {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var bfs = function (root) {
    let ans = 0;
    function dfs(node) {
        if (node === null) return [0, 0];
        let [leftSum, leftCount] = dfs(node.left);
        let [rightSum, rightCount] = dfs(node.right);

        let sum = leftSum + rightSum + node.val;
        let count = leftCount + rightCount + 1;
        if (Math.floor(sum / count) === node.val) ans++;
        return [sum, count];
    }

    dfs(root);

    return ans;
};

// let helper = function (root, res) {
//     if (root) {
//         res.push(root.val);
//         helper(root.left, res);
//         helper(root.right, res);
//     }
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

const a = new Node(4);
const b = new Node(8);
const c = new Node(5);
const d = new Node(0);
const e = new Node(1);
const f = new Node(6);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const x = bfs(a);
