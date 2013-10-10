$(".link").mousedown(function()
{
	$.each($(".screen"), function()
	{
		$(this).addClass("hide");
	});
	$(".messagebox").addClass("hide");
	$("#" + $(this).attr("page")).removeClass("hide");
	switch($(this).attr("func"))
	{
		case "displayWork":
		displayWork();
		return;
		case "displayKeys":
		displayKeys();
		return;
		case "displayHome":
		displayHome();
		return;
		case "displayFree":
		displayFree();
		return;
		case "displayLocked":
		displayLocked();
		return;
		case "displayUnlocked":
		displayUnlocked();
		return;
	}
});