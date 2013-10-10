function displayWork()
{
	$("#work").empty();
	var header = document.createElement("div");
	$(header).css("text-align", "center");
	$(header).html("Arbejde");
	$("#work").append(header);

	var left = document.createElement("div");
	$(left).addClass("lefttop");
	$(left).html("Dør");
	$("#work").append(left);
	var right = document.createElement("div");
	$(right).addClass("righttop");
	$(right).html("Tænd/slukket")
	$("#work").append(right);

	$.each(doorsWork, function(i)
	{
		var left = document.createElement("div");
		$(left).addClass("left");
		$(left).css("clear", "both");
		$(left).html(doorsWork[i].name);
		$("#work").append(left);
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
		$("#work").append(right);
		var button = document.createElement("button");
		$(button).html("Slet");
		$(button).css("float", "right");
		$(button).css("position", "relative");
		$(button).css("left", "68px");
		$(button).css("top", "6px");
		$(button).addClass("remove");
		$(button).attr("type", "work");
		$(button).attr("name", doorsWork[i].name);
		$("#work").append(button);
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
$(input).attr("id", "workname");
$(input).css("width", "150");
$(div3).append(input);
var div3 = document.createElement("div");
var button = document.createElement("button");
$(button).css("width", "150");
$(button).html("Tilføj");
$(button).addClass("addWork");
$(div3).append(button);
$(div2).append(div3);
$("#work").append(div2);
turnonoff();
activateAddWork();
addRemoveBind();
}

function activateAddWork()
{
	$(".addWork").unbind();
	$(".addWork").mousedown(function()
	{
		addToWork($("#workname").val());
	});
}

function addToWork(names)
{
	var exists = false;
	$.each(doorsWork, function(i)
	{
		if (doorsWork[i].name == names)
		{
			exists = true;
		}
	});
	if (!exists)
	{
		var newWork = {name: names,
			locked: false};
			doorsWork.push(newWork);
			displayWork();

		}
		else
		{
			$(".messageboxmessage").html(names + " Findes allerede<br>Vælg venligst et andet navn");
			$(".messagebox").removeClass("hide");
		}
	}