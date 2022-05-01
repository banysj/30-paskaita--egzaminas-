/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(firstNumber, secondNumber) {
	this.a = firstNumber;
	this.b = secondNumber;
	this.sum = function () {
		return this.a + this.b;
	};
	this.subtraction = function () {
		return this.a - this.b;
	};
	this.multiplication = function () {
		return this.a * this.b;
	};
	this.division = function () {
		return this.a / this.b;
	};
}

const myCalculator = new Calculator(10, 2);

console.log(myCalculator.sum());
console.log(myCalculator.subtraction());
console.log(myCalculator.multiplication());
console.log(myCalculator.division());
