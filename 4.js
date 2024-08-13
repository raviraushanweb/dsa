function isPalindrome(s, start, end) {
	while (start <= end) {
		if (s.charAt(start++) != s.charAt(end--)) return false;
	}

	return true;
}

function f(ind, s, ans, path) {
	if (ind === s.length) {
		ans.push([...path]);
		return;
	}

	for (let i = ind; i < s.length; i++) {
		if (isPalindrome(s, ind, i)) {
			let str = s.substring(ind, i + 1);
			path.push(str);
			f(i + 1, s, ans, path);
			path.pop();
		}
	}
}

function all(s) {
	let ans = [];
	let path = [];
	f(0, s, ans, path);
	return ans;
}

const s = "aabb";
console.log(all(s));
