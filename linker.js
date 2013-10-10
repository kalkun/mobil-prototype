var history = ["index"];
$(".link").mousedown(function()
{
	$.each($(".screen"), function()
	{
		$(this).addClass("hide");
	});

	$(".messagebox").addClass("hide");
	$("#" + $(this).attr("page")).removeClass("hide");
	history.push($(this).attr("page"));
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
		case "maindoor": 
		case "displayKeyChain":
		displayKeyChain();
		case "maindoor": 
		//lockmain();
		return;
	}
});