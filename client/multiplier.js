const mult = function(numbers) {
	let answer = NaN;
	numbers = numbers.filter(input => typeof input === 'number');
		if (numbers.length > 1) {
			numbers.forEach((number, index) => {
				if (index === 0) {
					answer = number;
				} 	else {
						answer *= number;
					}
			});
		}
	return answer;
};

module.exports = mult;