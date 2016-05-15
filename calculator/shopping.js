function calculate() {
	'use strict';
	var total;

	var quantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;

	//subtotal
	total = quantity * price;
	
	//calculate tax
	tax /= 100;
	tax++;
	total *= tax;

	//add tax to total
	tax = tax/100;
	tax = tax + 1;
	total = total * tax;

	//discount
	total -= discount;

	//rounding number to two decimals
	total = total.toFixed(2);

	//show calculated total
	document.getElementById('total').value = total;

	return false;
}

function init() {
	'use strict';
	var theForm = document.getElementById('theForm');
	theForm.onsubmit = calculate;
}

window.onload = init;
