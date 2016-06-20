function setTheme(theme)
{
	'use strict';

	//for stylesheet
	var css = null;

	//if the link element already exists, update it
	if (document.getElementById('cssTheme'))
	{
		css = document.getElementById('cssTheme');
		css.href = theme + '.css';
	} else {
		css = document.createElement('link');
		css.rel = 'stylesheet';
		css.href = theme + '.css';
		css.id = 'cssTheme';
		document.head.appendChild(css);
	}
}

function setThemeCookie(e)
{
	'use strict';

	if (typeof e == 'undefined') e = window.event;

	if (e.preventDefault)
	{
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	var target = e.target || e.srcElement;

	//set the cookie
	var expire = new Date();
	expire.setDate(expire.getDate() + 7);
	COOKIE.setCookie('theme', target.id, expire);

	//update the theme
	setTheme(target.id);

	return false;
}

//load event
window.onload = function()
{
	'use strict';

	//click handlers
	document.getElementById('aTheme').onclick = setThemeCookie;
	document.getElementById('bTheme').onclick = setThemeCookie;
	
	//get cookies value and set theme
	var theme = COOKIE.getCookie('theme');
	if (theme)
	{
		setThemeCookie(theme);
	}
};