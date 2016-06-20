function updateMenu()
{
	'use strict';

	var os = document.getElementById('os');
	var os2 = document.getElementById('os2');

	//empty variable
	var options = null;

	//empty second menu
	while (os2.firstChild)
	{
		os2.removechild(os2.firstChild);
	}

	//proper optoins for second menu based on the value of the first
	if (os.value == 'Windows')
	{
		options = ['7 Home Basic', '7 Home Premium', '7 Professional', '7 Ultimate', 'Vista', 'XP'];
	} else if (os.value == 'Mac OS X') {
		options = ['10.7 Lion', '10.6 Snow Leopard', '10.5 Leopard', '10.4 Tiger'];
	}

	//if there are options enable second menu
	if (options)
	{
		os2.disabled = false;

		for (var i = 0, count = options.length; i < count; i++)
		{
			var opt = document.createElement('option');
			opt.text = opt.value = options[i];
			os2.appendChild(opt);
		}

		opt.text = options[i];
		opt.value = options[i];
	} else {
		os2.disabled = true;
	}
}

window.onload = function()
{
	'use strict';

	//clear out first menu's options
	var os = document.getElementById('os');
	while (os.firstChild)
	{
		os.removeChild(os.firstChild);
	}

	//add new options
	var options = ['Choose', 'Windows', 'Mac OS X'];
	for (var i = 0, count = options.length; i < count; i++)
	{
		var opt = document.createElement('option');
		opt.text = opt.value = options[i];
		os.appendChild(opt);
	}

	//add change event handler
	os.onchange = updateMenu;

	//create second menu
	var os2 = document.createElement('select');
	os2.id = 'os2';
	os2.disabled = true;
	os.parentNode.appendChild(os2);
};