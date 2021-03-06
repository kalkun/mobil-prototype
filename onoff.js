function turnonoff()
{
	$(".onoff").unbind();
	$(".onoff").mousedown(function()
	{
		if ($(this).html() == "Åben")
		{
			$(this).html("Låst");
			$(this).css("background-color", "red");
			$(this).css("text-align", "center");
			switch($(this).attr("type"))
			{
				case "work":
				onOffWork($(this).attr("name"), false);
				return;
				case "home":
				onOffHome($(this).attr("name"), false);
				return;
				case "free":
				onOffFree($(this).attr("name"), false);
				return;
				case "lockedSwitch":
				onOffFree($(this).attr("name"), false);
				return;
			}
		}
		else
		{
			$(this).html("Åben");
			$(this).css("background-color", "green");
			$(this).css("text-align", "left");
			switch($(this).attr("type"))
			{
				case "work":
				onOffWork($(this).attr("name"), true);
				return;
				case "home":
				onOffHome($(this).attr("name"), true);
				return;
				case "free":
				onOffFree($(this).attr("name"), true);
				return;
				case "lockedSwitch":
				onOffFree($(this).attr("name"), true);
				return;
			}
		}
	});
};

(function start()
{
	turnonoff();
})();

$(".onsettingsoff").mousedown(function()
{
	if ($(this).html() == "Til")
	{
		$(this).html("Fra");
		$(this).css("background-color", "red");
		$(this).css("text-align", "center");
	}
	else
	{
		$(this).html("Til");
		$(this).css("background-color", "green");
		$(this).css("text-align", "left");
	}
});

function onOffWork(names, value)
{
	$.each(doorsWork, function(i)
	{
		if (doorsWork[i].name == names)
		{
			doorsWork[i].locked = value;
			displayWork();
		}
	});
}

function onOffHome(names, value)
{
	$.each(doorsHome, function(i)
	{
		if (doorsHome[i].name == names)
		{
			doorsHome[i].locked = value;
			displayHome();
		}
	});
}

function onOffFree(names, value)
{
	$.each(doorsFree, function(i)
	{
		if (doorsFree[i].name == names)
		{
			doorsFree[i].locked = value;
			displayFree();
		}
	});
}