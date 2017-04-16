const mult = function(numbers) {
	let answer = NaN;
		if(numbers.length > 0) {
			numbers.forEach((number, index) => {
				if (index === 0) {
					answer = number;
				} else {
					answer *= number;
				}
			});
		}
	return answer;
};

module.exports = mult;