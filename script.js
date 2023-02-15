



// $(document).ready(function () {
// 	// JQUERY NAV TOGGLE
// 	$("#menu").bind("click", function (event) {
// 		$("#mainnav ul").slideToggle();
// 	});

// 	$(window).resize(function () {
// 		var w = $(window).width();
// 		if (w > 768) {
// 			$("#mainnav ul").removeAttr("style");
// 		}
// 	});
// });

// TOKYO GHOUL QUOTE FUNCTION

// ************************** naruto **************************

const button = document.querySelector("#naruto-button");
if (button) {
	button.addEventListener("click", function () {
		fetch("json/naruto.json")
			.then((response) => response.json())
			.then((response) => {
				let randomItem = response[Math.floor(Math.random() * response.length)];
				document.getElementById("quote").innerHTML = randomItem.quote;
			})
			.catch((err) => console.error(err));
	});
}

// ************************** titan **************************

const titanButton = document.querySelector("#titan-button");

if (titanButton) {
	titanButton.addEventListener("click", function () {
		fetch("json/titan.json")
			.then((response) => response.json())
			.then((response) => {
				let randomItem = response[Math.floor(Math.random() * response.length)];
				document.getElementById("quote").innerHTML = randomItem.quote;
			})
			.catch((err) => console.error(err));
	});
}

// ------------------TOKYO GHOUL QUOTE FUNCTION------------------------

const kaneki = document.querySelector("#kaneki-button");
if (kaneki) {
	kaneki.addEventListener("click", function () {
		fetch("json/ghoul.json")
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				let animeData = response[Math.floor(Math.random() * response.length)];
				document.getElementById("quote").innerHTML = animeData.quote;
				document.getElementById("character").innerHTML = animeData.character;
			});
	});
}

// ------------------DEATH NOTE QUOTE FUNCTION--------------------

const ryuk = document.querySelector("#deathnote-button");
if (ryuk) {
	ryuk.addEventListener("click", function () {
		fetch("json/ryuk.json")
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				let ryukData = response[Math.floor(Math.random() * response.length)];
				document.getElementById("quote").innerHTML = ryukData.quote;
				document.getElementById("character").innerHTML = ryukData.character;
			});
	});
}

// ANY API FUNCTION BELOW THIS NAV FUNCTION WONT WORK FOR SOME REASON SO KEEP THIS AT THE BOTTOM

$(document).ready(function () {
	// JQUERY NAV TOGGLE
	$("#menu").bind("click", function (event) {
		$("#mainnav ul").slideToggle();
	});

	$(window).resize(function () {
		var w = $(window).width();
		if (w > 768) {
			$("#mainnav ul").removeAttr("style");
		}
	});
});
