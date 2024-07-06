function comp(a, b) {
	const x = a.join("");
	const y = b.join("");
	return x.localeCompare(y);
}

function findSequences(startWord, targetWord, wordList) {
	const st = new Set(wordList);

	const q = [];
	q.push([startWord]);

	const usedOnLevel = [];
	usedOnLevel.push(startWord);
	let level = 0;

	const ans = [];
	while (q.length > 0) {
		const vec = q.shift();

		if (vec.length > level) {
			level++;
			for (const it of usedOnLevel) {
				st.delete(it);
			}
		}

		const word = vec[vec.length - 1];

		if (word === targetWord) {
			if (ans.length === 0) {
				ans.push(vec);
			} else if (ans[0].length === vec.length) {
				ans.push(vec);
			}
		}
		for (let i = 0; i < word.length; i++) {
			for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
				const replacedCharArray = word.split("");
				replacedCharArray[i] = String.fromCharCode(c);
				const replacedWord = replacedCharArray.join("");
				if (st.has(replacedWord)) {
					vec.push(replacedWord);
					q.push([...vec]);
					usedOnLevel.push(replacedWord);
					vec.pop();
				}
			}
		}
	}
	return ans;
}

const startWord = "der";
const targetWord = "dfs";
const wordList = ["des", "der", "dfr", "dgt", "dfs"];

const ans = findSequences(startWord, targetWord, wordList);

if (ans.length === 0) {
	console.log(-1);
} else {
	ans.sort(comp);
	for (const sequence of ans) {
		console.log(sequence.join(" "));
	}
}
