//anonymous nested function
(function()
{
	//global variable - an array
	var tasks = [];

	function addTask()		
	{
		'use strict';

		//reference html elements
		var task = document.getElementById('task');
		var output = document.getElementById('output');

		//variable for output
		var message = '';

		//if a task is entered, it will be added to the array
		if (task.value)
		{
			//add to the array
			tasks.push(task.value);

			//update the page
			message = '<h2>To-Do</h2><ol>';
			for (var i = 0, count = tasks.length; i < count; i++)
			{
				message += '<li>' + tasks[i] + '</li>';
			}
			message += '</ol>'; //completes message variable

			//update page
			output.innerHTML = message;
		}
		return false;
	}

	//event listener
	function init() 
	{
		'use strict';
		document.getElementById('theForm').onsubmit = addTask;
	}

	window.onload = init;
})();