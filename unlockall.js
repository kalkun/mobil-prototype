$(".unlockall").mousedown(function()
{
	$.each(doorsHome, function(i)
	{
		doorsHome[i].locked = false;
	});
	$.each(doorsWork, function(i)
	{
		doorsWork[i].locked = false;
	});
	$.each(doorsFree, function(i)
	{
		doorsFree[i].locked = false;
	});
	$(".messageboxmessage").html("Samtlige døre er nu ulåst");
	$(".messagebox").removeClass("hide");
});

function activateunluckhome()
{
	$(".unlockallhome").unbind();
	$(".unlockallhome").mousedown(function()
	{
		$.each(doorsHome, function(i)
		{
			doorsHome[i].locked = true;
		});
		displayHome();
	});
}

function activateunlockwork()
{
	$(".unlockallwork").unbind();
	$(".unlockallwork").mousedown(function()
	{
		$.each(doorsWork, function(i)
		{
			doorsWork[i].locked = true;
		});
		displayWork();
	});
}

function activateunlockfree()
{
	$(".unlockallfree").unbind();
	$(".unlockallfree").mousedown(function()
	{
		$.each(doorsFree, function(i)
		{
			doorsFree[i].locked = true;
		});
		displayFree();
	});
}