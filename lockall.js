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