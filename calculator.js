"use strict"

let result;
let num1;
let num2;

function plus() {
	num1 = +document.getElementById('num1').value;
	num2 = +document.getElementById('num2').value;
	result = num1 + num2;
	alert(result);
}

function minus() {
	num1 = +document.getElementById('num1').value;
	num2 = +document.getElementById('num2').value;
	result = num1 - num2;
	alert(result);
}

function multiplication() {
	num1 = +document.getElementById('num1').value;
	num2 = +document.getElementById('num2').value;
	result = num1*num2;
	alert(result);
}

function division() {
	num1 = +document.getElementById('num1').value;
	num2 = +document.getElementById('num2').value;
	result = num1/num2;
	alert(result);
}