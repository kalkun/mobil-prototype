$(".save").mousedown(function()
{
	$(".messageboxmessage").html($(this).attr("oplysning"));
	$(".messagebox").removeClass("hide");
});