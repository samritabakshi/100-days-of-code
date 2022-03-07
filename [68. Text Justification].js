var fullJustify = function(words, maxWidth) {
	let lines = [];
	let i = 0;
	let row = 0;
	let length = 0;
	
	while (i < words.length){
	
		if (!lines[row]) {
			lines[row] = [];
		}
	
		if (length + words[i].length + lines[row].length <= maxWidth) {
			length += words[i].length;
			lines[row].push(words[i]);
		} else {
            length = words[i].length;
			row++;
			lines[row] = [words[i]];
		}
	
		i++;
	}
	
	let result = [];
	lines.forEach((line,index)=>{
		
		let length = line.reduce((acc, el) => acc + el.length, 0);
		let i = 0;
		while (length < maxWidth) {
		
			if (index < lines.length-1) {
				line[i] += ' ';
				i++;
				if (i >= line.length-1) {
					i = 0;
				}
			} else {
				line[i] += ' ';
				if (i < line.length-1) {
					i++;
				}
			}
			
			length++;
		
		}
		
		result.push(line.join(''));
		
	});
	
	return result;
};