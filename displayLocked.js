function displayLocked()
{
	$("#locked").empty();
	var header = document.createElement("div");
	$(header).css("text-align", "center");
	$(header).html("Locked");
	$("#locked").append(header);

	var left = document.createElement("div");
	$(left).addClass("lefttop");
	$(left).html("Dør");
	$("#locked").append(left);
	var right = document.createElement("div");
	$(right).addClass("righttop");
	$(right).html("Tænd/slukket")
	$("#locked").append(right);

	var show = false;
	$.each(doorsWork, function(i)
	{
		if (doorsWork[i].locked)
		{
			if (!show)
			{
				var header = document.createElement("div");
				$(header).css("text-align", "center");
				$(header).css("clear", "both");
				$(header).html("Arbejde");
				$("#locked").append(header);
			}
			show = true;
			var left = document.createElement("div");
			$(left).addClass("left");
			$(left).css("clear", "both");
			$(left).html(doorsWork[i].name);
			$("#locked").append(left);
			var right = document.createElement("div");
			$(right).attr("name", doorsWork[i].name);
			$(right).addClass("onoff");
			$(right).css("position", "relative");
			$(right).css("left", "-55px");
			$(right).addClass("right");
			$(right).addClass("hand");
			$(right).addClass("workSwitch");
			$(right).attr("type", "work");
			if (doorsWork[i].locked)
			{
				$(right).html("On");
				$(right).css("background-color", "green");
				$(right).css("text-align", "left");
			}
			else
			{
				$(right).html("Off");
				$(right).css("background-color", "red");
				$(right).css("text-align", "center");
			}
			$("#locked").append(right);
			var button = document.createElement("button");
			$(button).html("Slet");
			$(button).css("float", "right");
			$(button).css("position", "relative");
			$(button).css("left", "68px");
			$(button).css("top", "6px");
			$(button).addClass("remove");
			$(button).attr("type", "work");
			$(button).attr("name", doorsWork[i].name);
			$("#locked").append(button);
		}
	});
var show = false;
$.each(doorsHome, function(i)
{
	if (doorsHome[i].locked)
	{
		if (!show)
		{
			var header = document.createElement("div");
			$(header).css("text-align", "center");
			$(header).css("clear", "both");
			$(header).html("Hjemmet");
			$("#locked").append(header);
		}
		show = true;

		var left = document.createElement("div");
		$(left).addClass("left");
		$(left).css("clear", "both");
		$(left).html(doorsHome[i].name);
		$("#locked").append(left);
		var right = document.createElement("div");
		$(right).attr("name", doorsHome[i].name);
		$(right).css("position", "relative");
		$(right).css("left", "-55px");
		$(right).addClass("onoff");
		$(right).addClass("right");
		$(right).addClass("hand");
		$(right).addClass("homeSwitch");
		$(right).attr("type", "home");
		if (doorsHome[i].locked)
		{
			$(right).html("On");
			$(right).css("background-color", "green");
			$(right).css("text-align", "left");
		}
		else
		{
			$(right).html("Off");
			$(right).css("background-color", "red");
			$(right).css("text-align", "center");
		}
		$("#locked").append(right);
		var button = document.createElement("button");
		$(button).html("Slet");
		$(button).css("float", "right");
		$(button).css("position", "relative");
		$(button).css("left", "68px");
		$(button).css("top", "6px");
		$(button).addClass("remove");
		$(button).attr("type", "home");
		$(button).attr("name", doorsHome[i].name);
		$("#locked").append(button);
	}
});
var show = false;
$.each(doorsFree, function(i)
{
	if (doorsFree[i].locked)
	{
		if (!show)
		{
			var header = document.createElement("div");
			$(header).css("text-align", "center");
			$(header).css("clear", "both");
			$(header).html("Fritid");
			$("#locked").append(header);
		}
		show = true;

		var left = document.createElement("div");
		$(left).addClass("left");
		$(left).css("clear", "both");
		$(left).html(doorsFree[i].name);
		$("#locked").append(left);
		var right = document.createElement("div");
		$(right).attr("name", doorsFree[i].name);
		$(right).addClass("onoff");
		$(right).addClass("right");
		$(right).css("position", "relative");
		$(right).css("left", "-55px");
		$(right).addClass("hand");
		$(right).addClass("freeSwitch");
		$(right).attr("type", "free");
		if (doorsFree[i].locked)
		{
			$(right).html("On");
			$(right).css("background-color", "green");
			$(right).css("text-align", "left");
		}
		else
		{
			$(right).html("Off");
			$(right).css("background-color", "red");
			$(right).css("text-align", "center");
		}
		$("#locked").append(right);
		var button = document.createElement("button");
		$(button).html("Slet");
		$(button).css("float", "right");
		$(button).css("position", "relative");
		$(button).css("left", "68px");
		$(button).css("top", "6px");
		$(button).addClass("remove");
		$(button).attr("type", "free");
		$(button).attr("name", doorsFree[i].name);

		$("#locked").append(button);
	}
});
turnonoff();
addRemoveBind();
}