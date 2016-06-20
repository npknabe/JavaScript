function createPopup(e)
{
	'use strict';

	//see which link is triggered
	if (typeof e == 'undefined') var e = window.event;
	var target = e.target || e.srcElement;

	//popup window
	var popup = window.open(target.href, 'Popup', 
		'height=100,width=100,top=100,left=100,location=no,resizeable=yes,scrollbars=yes');

	//if window is open give focus
	if ( (popup !== null) && !popup.closed)
	{
		popup.focus();
		return false;
	}
}

window.onload = function()
{
	'use strict';
	for (var i = 0, count = document.links.length; i < count; i++)
	{
		document.links[i].onclick = createPopup;
	}
};

