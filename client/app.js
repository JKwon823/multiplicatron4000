const mult = require('./multiplier.js');

let i = 2;
class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-numbers')
			.addEventListener('submit', this.onSubmit.bind(this));
		document.getElementById('new-factor')
			.addEventListener('click', this.addFactor.bind(this));
	}

	addFactor(event){
		
		i++;
		const inputNum = 'input-num' + i;
		const input = document.createElement('div');
		input.innerHTML = '<input id="'+ inputNum + '" type="text" autocomplete="off"/>';
		document.getElementById('form-numbers').insertBefore(input, document.getElementById('line'));
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