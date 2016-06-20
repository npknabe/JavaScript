//Cookie Library
var COOKIE = 
{
	setCookie: function(name, value, expire)
	{
		'use strict';

		var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);

		str += ';expires=' + expire.toGMTString();
		document.cookie = str;
	},

	getCookie: function(name)
	{
		'use strict';

		var len = name.length;

		//split the cookie value on the ;
		var cookies = document.cookie.split(';');

		//loop through cookies
		for (var i = 0, count = cookies.length; i < count; i++)
		{
			var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];

			//decode the value
			value = decodeURIComponent(value);

			//return value if right cookie
			if (value.slice(0,len) == name)
			{
				return value.split('=')[1];
			}

			//find and return value
			var v = cookies[i].split('=');
		}
		return false;
	},

	deleteCookie: function(name)
	{
		'use strict';

		document.cookie = encodeURIComponent(name) + '=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
	}
};