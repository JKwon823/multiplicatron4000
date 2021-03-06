const mult = require('./multiplier.js');

class TestSuite {
	
	runTest(testName) {
		const result = this[testName]();
		console.log(result, testName);
	}

	runTests(){
		//find tests
		//execute them
		Object.getOwnPropertyNames(Object.getPrototypeOf(this))
			.filter(prop => prop.indexOf('test') !== -1)
			.forEach(testName => this.runTest(testName));
	}

	assertEquals(a, b) {
		return a === b;
	}

	testMultPositiveNumbers(){
		return this.assertEquals(mult([3, 2]), 6);
	}

	testMultPositiveAndNegativeNumbers(){
		return this.assertEquals(mult([-3, 4]), -12);
	}

	testMultNegativeNumbers(){
		return this.assertEquals(mult([-3, -1]), 3);
	}

	testEmptyNumbers(){
		return this.assertEquals(isNaN(mult([])), true);
	}

	testInvalidNumbers(){
		return this.assertEquals(isNaN(mult(['a', 'b'])), true);
	}
}

const testSuite = new TestSuite();
testSuite.runTests();