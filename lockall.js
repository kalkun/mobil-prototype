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

function activatelockhome()
{
	$(".lockallhome").unbind();
	$(".lockallhome").mousedown(function()
	{
		$.each(doorsHome, function(i)
		{
			doorsHome[i].locked = false;
		});
		displayHome();
	});
}

function activatelockwork()
{
	$(".lockallwork").unbind();
	$(".lockallwork").mousedown(function()
	{
		$.each(doorsWork, function(i)
		{
			doorsWork[i].locked = false;
		});
		displayWork();
	});
}

function activatelockfree()
{
	$(".lockallfree").unbind();
	$(".lockallfree").mousedown(function()
	{
		$.each(doorsFree, function(i)
		{
			doorsFree[i].locked = false;
		});
		displayFree();
	});
}