$(".remove").mousedown(function()
{
	switch($(this).attr("type"))
	{
		case "keys":
		removeFromKeys($(this).attr("key"));
		displayKeys();
		displayUnlocked();
		displayLocked();
		return;
		case "home":
		removeFromHome($(this).attr("name"));
		console.log("home");
		displayHome();
		displayUnlocked();
		displayLocked();
		return;
		case "work":
		removeFromWork($(this).attr("name"));
		displayWork();
		displayUnlocked();
		displayLocked();
		return;
		case "free":
		removeFromFree($(this).attr("name"));
		displayFree();
		displayUnlocked();
		displayLocked();
		return;
	}
});

function removeFromKeys(delKey)
{
	var removeThis = null;
	$.each(keys, function(i)
	{
		if (keys[i].key == delKey)
		{
			if (keys[i].person == "Mig")
			{
				$(".messageboxmessage").html("Du kan ikke slette din egen nøgle");
				$(".messagebox").removeClass("hide");
			}
			else
			{
				removeThis = i;
			}
		}
	});
	if (removeThis != null)
	{
		keys.splice(removeThis, 1);
	}
}

function removeFromHome(names)
{
	var removeThis = null;
	$.each(doorsHome, function(i)
	{
		if (doorsHome[i].name == names)
		{
			removeThis = i;
		}
	});
	if (removeThis != null)
	{
		doorsHome.splice(removeThis, 1);
	}	
}

function removeFromWork(names)
{
	var removeThis = null;
	$.each(doorsWork, function(i)
	{
		if (doorsWork[i].name == names)
		{
			removeThis = i;
		}
	});
	if (removeThis != null)
	{
		doorsWork.splice(removeThis, 1);
	}
}

function removeFromFree(names)
{
	var removeThis = null;
	$.each(doorsFree, function(i)
	{
		if (doorsFree[i].name == names)
		{
			removeThis = i;
		}
	});
	if (removeThis != null)
	{
		doorsFree.splice(removeThis, 1);
	}
}

function addRemoveBind()
{
	$(".remove").unbind();
	$(".remove").mousedown(function()
	{
		switch($(this).attr("type"))
		{
			case "keys":
			removeFromKeys($(this).attr("key"));
			displayKeys();
			displayUnlocked();
			displayLocked();
			return;
			case "home":
			removeFromHome($(this).attr("name"));
			console.log("home");
			displayHome();
			displayUnlocked();
			displayLocked();
			return;
			case "work":
			removeFromWork($(this).attr("name"));
			displayWork();
			displayUnlocked();
			displayLocked();
			return;
			case "free":
			removeFromFree($(this).attr("name"));
			displayFree();
			displayUnlocked();
			displayLocked();
			return;
		}
	});
}