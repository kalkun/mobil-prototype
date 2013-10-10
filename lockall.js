$(".lockall").mousedown(function()
{
	$.each(doorsHome, function(i)
	{
		doorsHome[i].locked = true;
	});
	$.each(doorsWork, function(i)
	{
		doorsWork[i].locked = true;
	});
	$.each(doorsFree, function(i)
	{
		doorsFree[i].locked = true;
	});
	$(".messageboxmessage").html("Samtlige døre er nu låst");
	$(".messagebox").removeClass("hide");
});

$(".lockallhome").mousedown(function()
{
	$.each(doorsHome, function(i)
	{
		doorsHome[i].locked = true;
	});
	$(".messageboxmessage").html("Samtlige døre i dit hjem er nu låst");
	$(".messagebox").removeClass("hide");
	displayHome();
	displayUnlocked();
	displayLocked();
});

$(".lockallwork").mousedown(function()
{
	$.each(doorsWork, function(i)
	{
		doorsWork[i].locked = true;
	});
	$(".messageboxmessage").html("Samtlige døre på dit arbejde er nu låst");
	$(".messagebox").removeClass("hide");
	displayWork();
	displayUnlocked();
	displayLocked();
});

$(".lockallfree").mousedown(function()
{
	$.each(doorsFree, function(i)
	{
		doorsFree[i].locked = true;
	});
	$(".messageboxmessage").html("Samtlige døre under fritid er nu låst");
	$(".messagebox").removeClass("hide");
	displayFree();
	displayUnlocked();
	displayLocked();
});