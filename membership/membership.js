function calculate()
{
	'use strict';
	var cost;

	//reference for the first two form elements
	var type = document.getElementById('type');
	var years = document.getElementById('years');
	
	//convert year to number
	if (years && years.value)
	{
		years = parseInt(years.value, 10);
	}
	
	//validate all data
	if (type && type.value && years && (years > 0) )
	{
		//switch will determine what was selected and assign values
		switch (type.value)
		{
			case 'basic':
			cost = 10.00;
			break;

			case 'premium':
			cost = 15.00;
			break;

			case 'gold':
			cost = 20.00;
			break;

			case 'platinum':
			cost = 25.00;
			break;			
		}
		
		//factor in number of years chosen
		cost *= years;

		//discount
		if (years > 1)
		{
			cost *= .80;
		}
		
		//total membership cost
		cost -= (cost * .20);

		//display total in form
		document.getElementById('cost').value = '$' + cost.toFixed(2);
	} else {
		document.getElementById('cost').value = 'Please enter valid values.';
	}

	return false;
}

//event listener
function init()
{
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}
window.onload = init;
