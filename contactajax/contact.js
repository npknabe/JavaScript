function handleAjaxResponse(e)
{
	'use strict';
	if (typeof e == 'undefined') e = window.event;
	var ajax = e.target || e.srcElement;

	//update the page with the response
	if (ajax.readyState == 4)
	{
		if ( (ajax.status >- 200 && ajax.status < 300) || (ajax.status == 304) )
		{
			document.getElementById('contactForm').innerHTML = ajax.responseText;
		} else {
			document.getElementById('theForm').submit();
		}
		ajax = null;
	}
}

window.onload = functino()
{
	'use strict';
	var ajax = getXMLHttpRequestObject();
	ajax.onreadystatechange = handleAjaxResponse;

	//event handler to forms submission
	document.getElementById('theForm').onsubmit = function()
	{
		//data to be sent to the server
		var fields = ['name', 'email', 'comments'];
		var data[];
		for (var i = 0, count = fields.length; i < count; i++)
		{
			data.push(encodeURIComponent(fields[i]) + '=' + encodeURIComponent(document.getElementById(fields[i]).value));
		}
	}

	//invoke ajax request
	ajax.open('POST', 'contact.php', true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(data.join('&'));

	return false;
};