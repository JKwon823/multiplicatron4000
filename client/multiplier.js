const mult = function(numbers) {
	var answer = NaN;
		if(numbers.length > 1) {
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