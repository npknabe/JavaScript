window.onload = function()
{
	'use strict';

	//one ajax to do all the work
	var ajax = getXMLHttpRequestObject();

	ajax.onreadystatechange = function()
	{
		if (ajax.readyState == 4)
		{
			if ( (ajax.status >= 200 && ajax.status < 300) || (ajax.status == 304) )
			{
				//update page with new quote
				var data = JSON.parse(ajax.responseText);
				var output = document.getElementById('quote');
				if (output.textContent !== undefined)
				{
					output.textContent = data[0].l;
				} else {
					output.innerText = data[0].l;
				}
			}
		}
	};

	//ajax request to get first quote
	ajax.open('GET', 'quote.php', true);
	ajax.send(null);

	//within atimer perform request again every minute
	var stockTimer = setInterval(function()
	{
		ajax.open('GET', 'quote.php', true);
		ajax.send(null);
	}, 6000);
};