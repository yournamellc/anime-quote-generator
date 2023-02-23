// ----------------GLOBAL QUOTE & CHARACTER FUNCTIONS----------------------------------

let currentQuote;

let quoteGenerator = (response) => {
	let newQuote = response[Math.floor(Math.random() * response.length)];
	while (newQuote === currentQuote) {
		newQuote = response[Math.floor(Math.random() * response.length)];
		currentQuote = newQuote;
		console.log(newQuote);
		return newQuote;
	}
};

// ************************** naruto **************************

const button = document.querySelector("#naruto-button");
if (button) {
	button.addEventListener("click", function () {
		fetch("json/naruto.json")
			.then((response) => response.json())
			.then((response) => {
				let x = quoteGenerator(response);
				document.getElementById("quote").innerHTML =  x["quote"];
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
				let x = quoteGenerator(response);
				document.getElementById("quote").innerHTML =  x["quote"];
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
				let x = quoteGenerator(response);
				document.getElementById("quote").innerHTML = x["quote"];
				document.getElementById("character").innerHTML =  x["character"];
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
				let x = quoteGenerator(response);
				document.getElementById("quote").innerHTML = x["quote"];
				document.getElementById("character").innerHTML =  x["character"];
			});
	});
}

// ---------------------JUJUTSU KAISEN FUNCTION-----------------------------

const jujutsu = document.querySelector("#kaisen-button");
if (jujutsu) {
	jujutsu.addEventListener("click", function () {
		fetch("json/jujutsu.json")
			.then((response) => response.json())
			.then((response) => {
				let x = quoteGenerator(response);
				document.getElementById("quote").innerHTML = x["quote"];
				document.getElementById("character").innerHTML =  x["character"];
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
