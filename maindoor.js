var maindoor = false
function lockmain()
{
	if (maindoor)
	{
		message = "Hoveddøren er nu ulåst";
	}
	else 
	{
		message = "Hoveddøren er nu låst";
	}
	$(".messageboxmessage").html(message);
	$(".messagebox").removeClass("hide");
}