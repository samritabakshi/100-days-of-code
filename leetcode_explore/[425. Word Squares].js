/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function (words) {
	let N = words[0].length; // the total number of rows;
	let result = [];

	// try every word as the beginning
	for (let word of words) {
		let sequence = [];
		dfs(words, word, 1, sequence, result);
	}
	return result;

	// pick the word at the nth row
	function dfs(words, word, n, sequence, result) {
		sequence.push(word);

		if (sequence.length === N) {
			result.push([...sequence]);
			return;
		}

		// Ger the next words by prefix
		let prefix = "";
		sequence.forEach((row) => (prefix = prefix + row.substring(n, n + 1)));
		for (let next of getWordsByPrefix(words, prefix)) {
			dfs(words, next, n + 1, sequence, result);
			sequence.pop();
		}
	}

	function getWordsByPrefix(words, prefix) {
		const regex = new RegExp("^" + prefix + ".*");
		return words.filter((word) => word.match(regex));
	}
};