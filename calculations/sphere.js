function calculate() {
	'use strict';
	var volume;

	//reference for radius value
	var radius = document.getElementById('radius');

	//radius must be positive (absolute)
	if (radius && (radius.value > 0)) 
	{
	//calc volume
	volume = (4/3) * Math.PI * Math.pow(radius.value, 3);
	
	//format to four decimals
	volume = volume.toFixed(4);

	} else {
		volume = 'Please enter a valid radius!';
	}

	//display the volume
	document.getElementById('volume').value = volume;

	return false;
}

//event listener
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}

window.onload = init;