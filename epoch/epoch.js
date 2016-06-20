//update duration function
function updateDuration()
{
	'use strict';

	//get current moment
	var now = new Date();

	//message output
	var message = 'It has been ' + now.getTime();
	message += ' seconds since the epoch. (mouse over to update)';

	//update page
	U.setText('output', message);
};

//event listener for mouseover on paragraph
window.onload = function()
{
	'use strict';
	U.addEvent(U.$('output'), 'mouseover', updateDuration);
	updateDuration();
};