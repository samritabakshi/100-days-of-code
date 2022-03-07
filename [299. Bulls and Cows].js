let countA = countB = 0;
	const dp = [];

	for (let index = 0; index < secret.length; index++) {
		const secretNum = secret[index];
		const guessNum = guess[index];

		if (secretNum === guessNum) countA += 1;
		else {
            console.log(secretNum)
            console.log(guessNum)
			dp[secretNum] = (dp[secretNum] ?? 0) + 1;
			dp[guessNum] = (dp[guessNum] ?? 0) - 1;
            console.log(dp[secretNum])
            console.log(dp[guessNum]) 
            console.log(dp)
			countB += dp[secretNum] <= 0 ? 1 : 0;
			countB += dp[guessNum] >= 0 ? 1 : 0;
		}
	}

	return `${countA}A${countB}B`;