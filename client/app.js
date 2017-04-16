const mult = require('./multiplier.js');

class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-numbers')
			.addEventListener('submit', this.onSubmit.bind(this));
	}

	onSubmit(event) {

		event.preventDefault();

		let numbers = [];
		var inputNum = 'input-num1';

		for (let i = 1; document.getElementById(inputNum) !== null; i++) {
			let num = document.getElementById(inputNum).value;
			num = parseInt(num, 10);
			numbers.push(num);
			inputNum = 'input-num' + (i + 1);
		}

		var product = mult(numbers);

		this.renderProduct(product);
	}

	renderProduct(product) {
		document.querySelector('.product').textContent = product;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();