function displayHome()
{
	$("#home").empty();
	var header = document.createElement("div");
	$(header).css("text-align", "center");
	$(header).html("Arbejde");
	$("#home").append(header);

	var left = document.createElement("div");
	$(left).addClass("lefttop");
	$(left).html("Dør");
	$("#home").append(left);
	var right = document.createElement("div");
	$(right).addClass("righttop");
	$(right).html("Tænd/slukket")
	$("#home").append(right);

	$.each(doorsHome, function(i)
	{
		var left = document.createElement("div");
		$(left).addClass("left");
		$(left).css("clear", "both");
		$(left).html(doorsHome[i].name);
		$("#home").append(left);
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
		$("#home").append(right);
		var button = document.createElement("button");
		$(button).html("Slet");
		$(button).css("float", "right");
		$(button).css("position", "relative");
		$(button).css("left", "68px");
		$(button).css("top", "6px");
		$(button).addClass("remove");
		$(button).attr("type", "home");
		$(button).attr("name", doorsHome[i].name);
		$("#home").append(button);
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
$(input).attr("id", "homename");
$(input).css("width", "150");
$(div3).append(input);
var div3 = document.createElement("div");
var button = document.createElement("button");
$(button).css("width", "150");
$(button).html("Tilføj");
$(button).addClass("addHome");
$(div3).append(button);
$(div2).append(div3);
$("#home").append(div2);
turnonoff();
activateAddHome();
addRemoveBind();
}

function activateAddHome()
{
	$(".addHome").unbind();
	$(".addHome").mousedown(function()
	{
		addToHome($("#homename").val());
	});
}

function addToHome(names)
{
	var exists = false;
	$.each(doorsHome, function(i)
	{
		if (doorsHome[i].name == names)
		{
			exists = true;
		}
	});
	if (!exists)
	{
		var newHome = {name: names,
			locked: false};
			doorsHome.push(newHome);
			displayHome();

		}
		else
		{
			$(".messageboxmessage").html(names + " Findes allerede<br>Vælg venligst et andet navn");
			$(".messagebox").removeClass("hide");
		}
	}