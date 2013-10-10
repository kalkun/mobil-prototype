function displayKeys()
{
	$("#keys").empty();
	var header = document.createElement("div");
	$(header).css("text-align", "center");
	$(header).html("Nøgler");
	$("#keys").append(header);

	var left = document.createElement("div");
	$(left).addClass("lefttop");
	$(left).html("Person");
	$("#keys").append(left);
	var right = document.createElement("div");
	$(right).addClass("righttop");
	$(right).html("Nøgle")
	$("#keys").append(right);

	$.each(keys, function(i)
	{
		var left = document.createElement("div");
		$(left).addClass("left");
		$(left).css("clear", "both");
		$(left).html(keys[i].person);
		$("#keys").append(left);
		var right = document.createElement("div");
		$(right).attr("key", keys[i].person);
		$(right).addClass("right");
		$(right).html(keys[i].key);
		$(right).css("width", "108px");
		var button = document.createElement("button");
		$(button).html("Slet");
		$(button).attr("remove", keys[i].key);
		$(button).addClass("remove");
		$(button).attr("type", "keys");
		$(button).attr("key", keys[i].key);
		$(right).append(button);
		$("#keys").append(right);
	});
	
	var div2 = document.createElement("div");
	$(div2).addClass("last");
	var font = document.createElement("font");
	$(font).html("Kopier nøgle");
	$(div2).append(font);
	var div3 = document.createElement("div");
	$(div2).append(div3);
	var input = document.createElement("input");
	$(input).attr("type", "text");
	$(input).attr("placeholder", "Navn på modtager");
	$(input).attr("id", "keyname");
	$(input).css("width", "150");
	$(div3).append(input);
	var input = document.createElement("input");
	$(input).attr("type", "text");
	$(input).attr("placeholder", "NøgleID på modtager");
	$(input).attr("id", "keykey");
	$(input).css("width", "150");
	$(div3).append(input);
	var div3 = document.createElement("div");
	var button = document.createElement("button");
	$(button).css("width", "150");
	$(button).html("Tilføj");
	$(button).addClass("addKey");
	$(div3).append(button);
	$(div2).append(div3);
	$("#keys").append(div2);
	turnonoff();
	activateAddKey();
	addRemoveBind();
}

function activateAddKey()
{
	$(".addKey").unbind();
	$(".addKey").mousedown(function()
	{
		addToKey($("#keyname").val(), $("#keykey").val());
	});
	
	$(".removeKey").unbind();
	$(".removeKey").mousedown(function()
	{

	});
}

function addToKey(names, keyAdd)
{
	var exists = false;
	$.each(keys, function(i)
	{
		if (keys[i].key == keyAdd)
		{
			exists = true;
		}
	});

	if (!exists)
	{
		var newKey = {person: names,
			key: keyAdd};
			keys.push(newKey);
			displayKeys();

		}
		else
		{
			$(".messageboxmessage").html("Nøglen: '" + keyAdd + "'' Findes allerede");
			$(".messagebox").removeClass("hide");
		}
	}

