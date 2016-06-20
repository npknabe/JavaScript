function addErrorMessages(id, msg)
{
	'use strict';

	//references from form elements
	var elem = document.getElementById(id);
	var newId = id + 'Error';
	var span = document.getElementById(newId);
	
	//this will check to see if username is already used
	if (span)
	{
		span.firstChild.value = msg;
	} else {
		span = document.createElement('span');
		span.id = newId;
		span.className = 'error'
		span.appendChild(document.createTextNode(msg));

		//add span to the DOM
		elem.parentNode.appendChild(span);
		elem.previousSibling.className = 'error';
	}
}

function removeErrorMessages(id)
{
	'use strict';

	//get reference to span and check for its existence
	varspan = document.getElementById(id + 'Error');
	if (span)
	{
		//remove class from label
		span.previousSibling.previousSibling.className = null;

		//remove the span
		span.parentNode.removeChild(span);
	}
}