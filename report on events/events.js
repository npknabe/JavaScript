
function reportEvent(e)
{
	'use strict';

	//reference to the event and events target
	if (typeof e == 'undefined') e = window.event;

	//event target
	var target = e.target || e.srcElement;

	//update the output for this new event
	var msg = target.nodeName + ': ' + e.type + '\n';

	//add output to textarea
	U.$('output').value += msg;
}

function setHandlers(e)
{

	'use strict';
	var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];

	//loop through the array
	for (var i = 0, count = events.length; i < count; i++)
	{
		var checkbox = U.$(events[i]);

		//event listener added/removed for each item in the array
		if (checkbox.checked)
		{
			U.addEvent(document, events[i], reportEvent);

		} else {
			U.removeEvent(document, events[i], reportEvent);
		}
	}
	U.$('output').value = '';
	return false;
}

//event listener within anonymous function
window.onload = function()
{
	'use strict';
	U.$('theForm').onsubmit = setHandlers;
};