<!DOCTYPE html>
<html language="en">
<head>
	<meta charset="utf-8">
	<link href="iPhone.css" rel="stylesheet">
</head>
<body>
	<button onclick="navhistory()">Back</button>
	<div class="phone">
		<div id="index" class="screen">
			<br>
			<div class="left">
				Lås hoveddør:
			</div>
			<div class="right">
				<div class="onoff hand" style="background-color: green;">Åben</div>
			</div>
			<div class="hand link" page="subindex" style="margin-top:50px;">Menu</div>
			<div class="hand link" page="settings">Indstillinger</div>
			<div class="hand link" func="displayKeyChain" page="keychain">Nøglebundt</div>
			<div class="hand link" func="displayKeys" page="keys">Profil</div>
		</div>
		<div id="subindex" class="screen hide">
			<table>
				<tr>
					<td class="hand lockall">Lås alle</td>
					<td class="hand unlockall" page="unlockall">Åben alle</td>
					<td class="link hand" func="displayWork" page="work">Arbejde</td>
				</tr>
				<tr>
					<td class="link hand" func="displayKeys" page="keys">Profil</td>
					<td class="link hand" func="displayHome" page="home">Hjemmet</td>
					<td class="link hand" func="displayFree" page="free">Fritid</td>
				</tr>
				<tr>
					<td class="link hand" func="displayLocked" page="locked">Låste</td>
					<td class="link hand" func="displayUnlocked" page="unlocked">Ulåste</td>
					<td class="hand" style="font-size: 70px; font-family: bold;"><font color="green">+</font></td>
				</tr>
				<tr>
				</tr>
			</table>
		</div>
		<div id="settings" class="screen hide">
			<div class="left">
				Autolås døre
			</div>
			<div class="right">
				<div class="onsettingsoff hand" style="background-color: green;">Til</div>
			</div>
			<div class="left">
				Tidspunkt
			</div>
			<div class="right">
				<input type="time" style="top: -5px;">
			</div>
			<div class="left">
				Reserver batteri
			</div>
			<div class="right">
				<input type="number" placeholder="minutter" style="top: -10px;" min="2">
			</div>
			<div class="hand save" style="width: 232px; position: absolute; height: 20px; text-align: center; margin: auto; left: 0px; right: 0px; clear: both; top: 92%; border-radius: 6px" oplysning="Dine indstillinger blev gemt!">Gem</div>
		</div>
		<div id="work" class="screen hide">
			work
		</div>
		<div id="home" class="screen hide">
			Home
		</div>
		<div id="free" class="screen hide">
			Free
		</div>
		<div id="keys" class="screen hide">
			Keys
		</div>
		<div id="locked" class="screen hide">
			locked
		</div>
		<div id="unlocked" class="screen hide">
			unlock
		</div>
		<div id="profil" class="screen hide">
			din profil
		</div>
		<div id="keychain" class="screen hide">
			din profil
		</div>
		<div class="home-button link hand" page="index">
			<div class="inner-home">
			</div>
		</div>
	</div>
	<div class="messagebox hide">
		<div class="messageboxmessage">
			Alt gik fint
		</div>
	</div>
	<div class="loginscreen screen">
		<div class="loginmessage">
			<div>
				Login med sikkerhedsnøgle:<br>
				<input class="pass" type="password"></input>
				<br>
				<button id="confirm">login</button>
			</div>
		</div>
	</div>
</body>
<script>
var keys = [{
	person: "Mig",
	key: "95713512"}];
	var doorsHome = [{
		name: "hoveddør",
		locked: true},
		{
			name: "bagdør",
			locked: true
		}];
		var doorsWork = [
		{
			name: "hoveddør",
			locked: true
		}];
		var doorsFree = [
		{
			name: "Audi",
			locked: true
		},
		{
			name: "BMW",
			locked: false
		},
		{
			name: "Bike - BMX",
			locked: false
		}]
		</script>
		<script src="jquery.js"></script>
		<script> 
		$(document).ready(function(){$('.pass').focus()})
		$('.phone').children().on('swiperight', function() {
			$('.link:last').trigger('mousedown')
		})

		$('#confirm').on('click', function()
		{
			if($('.pass').val() != "")
			{
				$('#confirm').remove();
				$('.pass').remove();
				$('.loginmessage').remove()
				$('.loginscreen').remove()
			}
		})
		$('.pass').keydown(function(e){
			if(e.keyCode ==13) {$('#confirm').trigger('click')}})	 

		$(document).keydown(function(e)
		{
			if (e.keyCode == 37)
			{
				navhistory();
			}
		})
		// detect right swipe:
		var xStart;
		$(document).mousedown(function(e)
		{
			xStart = e.pageX;
		})
		$(document).mouseup(function(e)
		{
			if (xStart != undefined)
			{
				len = e.pageX - xStart 
				if(len > 35 && len < 100)
				{
					navhistory();
				}
			}
		})

		</script>

		<script src="linker.js"></script>
		<script src="onoff.js"></script>
		<script src="save.js"></script>
		<script src="messagebox.js"></script>
		<script src="lockall.js"></script>
		<script src="displayWork.js"></script>
		<script src="displayHome.js"></script>
		<script src="displayFree.js"></script>
		<script src="displayLocked.js"></script>
		<script src="displayUnlocked.js"></script>
		<script src="maindoor.js"></script>
		<script src="keys.js"></script>
		<script src="remove.js"></script>
		<script src="unlockall.js"></script>
		<script src="displaykeychain.js"></script>
		</html>