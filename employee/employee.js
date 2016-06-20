function process()
{
	'use strict'

	//get the html input elements
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var department = document.getElementById('department').value;

	//reference for output
	var output = document.getElementById('output');

	//new object for employee, also includes a method getName
	var employee = 
	{
		firstName: firstName,
		lastName: lastName,
		department: department,
		getName: function()
		{
			return this.lastname + ', ' +this.firstName;
		},
		hireDate: new Date()
	};
	
	//create the output
	var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
	message += 'Department: ' + employee.department + '<br>';
	message += 'Hire Date: ' + employee.hireDate.toDateString();

	//display the output
	output.innerHTML = message;

	//complete function
	return false;
}

//event listener
function init()
{
	'use strict';
	document.getElementById('theForm').onsubmit = process;
}

window.onload = init;