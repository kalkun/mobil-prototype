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
			doorsHome[i].locked = false;
		});
		$(".messageboxmessage").html("Samtlige døre i dit hjem er nu ulåst");
		$(".messagebox").removeClass("hide");
		displayHome();
		displayUnlocked();
		displayLocked();
	});
}

function activateunlockwork()
{
	$(".unlockallwork").unbind();
	$(".unlockallwork").mousedown(function()
	{
		$.each(doorsWork, function(i)
		{
			doorsWork[i].locked = false;
		});
		$(".messageboxmessage").html("Samtlige døre på dit arbejde er nu ulåst");
		$(".messagebox").removeClass("hide");
		displayWork();
		displayUnlocked();
		displayLocked();
	});
}

function activateunlockfree()
{
	$(".unlockallfree").unbind();
	$(".unlockallfree").mousedown(function()
	{
		$.each(doorsFree, function(i)
		{
			doorsFree[i].locked = false;
		});
		$(".messageboxmessage").html("Samtlige døre under fritid er nu ulåst");
		$(".messagebox").removeClass("hide");
		displayFree();
		displayUnlocked();
		displayLocked();
	});
}