function displayFree()
{
	$("#free").empty();
	var header = document.createElement("div");
	$(header).css("text-align", "center");
	$(header).html("Fritid");
	$("#free").append(header);

	var left = document.createElement("div");
	$(left).addClass("lefttop");
	$(left).html("Dør");
	$("#free").append(left);
	var right = document.createElement("div");
	$(right).addClass("righttop");
	$(right).html("Tænd/slukket")
	$("#free").append(right);

	$.each(doorsFree, function(i)
	{
		var left = document.createElement("div");
		$(left).addClass("left");
		$(left).css("clear", "both");
		$(left).html(doorsFree[i].name);
		$("#free").append(left);
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
			$(right).html("Åben");
			$(right).css("background-color", "green");
			$(right).css("text-align", "left");
		}
		else
		{
			$(right).html("Låst");
			$(right).css("background-color", "red");
			$(right).css("text-align", "center");
		}
		$("#free").append(right);
		var button = document.createElement("button");
		$(button).html("Slet");
		$(button).css("float", "right");
		$(button).css("position", "relative");
		$(button).css("left", "68px");
		$(button).css("top", "6px");
		$(button).addClass("remove");
		$(button).attr("type", "free");
		$(button).attr("name", doorsFree[i].name);

		$("#free").append(button);
	});
	
	var div2 = document.createElement("div");
	$(div2).addClass("last");
	var font = document.createElement("font");
	$(font).html("Tilføj dør");
	$(div2).append(font);
	var div3 = document.createElement("div");
	$(div2).append(div3);
	var input = document.createElement("input");
	$(input).attr("type", "text");
	$(input).attr("placeholder", "Navn på dør");
	$(input).attr("id", "freename");
	$(input).css("width", "150");
	$(div3).append(input);
	var div3 = document.createElement("div");
	var button = document.createElement("button");
	$(button).css("width", "150");
	$(button).html("Tilføj");
	$(button).addClass("addFree");
	$(div3).append(button);
	$(div2).append(div3);
	$("#free").append(div2);
	turnonoff();
	activateAddFree();
	addRemoveBind();
}

function activateAddFree()
{
	$(".addFree").unbind();
	$(".addFree").mousedown(function()
	{
		addToFree($("#freename").val());
	});
}

function addToFree(names)
{
	var exists = false;
	$.each(doorsFree, function(i)
	{
		if (doorsFree[i].name == names)
		{
			exists = true;
		}
	});
	if (!exists)
	{
		var newFree = {name: names,
			locked: false};
			doorsFree.push(newFree);
			displayFree();

		}
		else
		{
			$(".messageboxmessage").html(names + " Findes allerede<br>Vælg venligst et andet navn");
			$(".messagebox").removeClass("hide");
		}
	}