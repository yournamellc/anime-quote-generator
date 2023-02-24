// ----------------GLOBAL QUOTE & CHARACTER FUNCTIONS----------------------------------

// let currentQuote = null;

// let quoteGenerator = (response) => {
// 	let newQuote = response[Math.floor(Math.random() * response.length)];
// 	while (newQuote === currentQuote) {
// 		newQuote = response[Math.floor(Math.random() * response.length)];
// 	}
// 	currentQuote = newQuote;
// 	return newQuote;
// };

var prevIndex = -1;
function quoteGenerator(response) {
    // Get the number of quotes in the JSON object    
	var numQuotes = response.length;
    // Generate a random index between 0 and numQuotes - 1, but not the same as prevIndex    
	var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * numQuotes);
    } while (randomIndex === prevIndex);
	console.log(prevIndex)
    prevIndex = randomIndex;
    // Retrieve the quote and character at the random index    
	var quote = response[randomIndex].quote;
    var character = response[randomIndex].character;
    // Return an object with the quote and character    
	return { quote: quote, character: character };
}

// ************************** naruto **************************

const button = document.querySelector("#naruto-button");
if (button) {
    button.addEventListener("click", async function () {
        try {
            const response = await fetch("json/ghoul.json");
            const data = await response.json();
            const { quote, character } = quoteGenerator(data);
            // document.getElementById("character").innerHTML = character;
            document.getElementById("quote").innerHTML = quote;
        } catch (error) {
            console.error(error);
        }
    });
}

// ************************** titan **************************

const titanButton = document.querySelector("#titan-button");

if (titanButton) {
    titanButton.addEventListener("click", async function () {
        try {
            const response = await fetch("json/ghoul.json");
            const data = await response.json();
            const { quote, character } = quoteGenerator(data);
            // document.getElementById("character").innerHTML = character;
            document.getElementById("quote").innerHTML = quote;
        } catch (error) {
            console.error(error);
        }
    });
}

// ------------------TOKYO GHOUL QUOTE FUNCTION------------------------

const kaneki = document.querySelector("#kaneki-button");

if (kaneki) {
    kaneki.addEventListener("click", async function () {
        try {
            const response = await fetch("json/ghoul.json");
            const data = await response.json();
            const { quote, character } = quoteGenerator(data);
            document.getElementById("character").innerHTML = character;
            document.getElementById("quote").innerHTML = quote;
        } catch (error) {
            console.error(error);
        }
    });
}

// ------------------DEATH NOTE QUOTE FUNCTION--------------------

const ryuk = document.querySelector("#deathnote-button");
if (ryuk) {
    ryuk.addEventListener("click", async function () {
        try {
            const response = await fetch("json/ghoul.json");
            const data = await response.json();
            const { quote, character } = quoteGenerator(data);
            document.getElementById("character").innerHTML = character;
            document.getElementById("quote").innerHTML = quote;
        } catch (error) {
            console.error(error);
        }
    });
}

// ---------------------JUJUTSU KAISEN FUNCTION-----------------------------

const jujutsu = document.querySelector("#kaisen-button");
if (jujutsu) {
    jujutsu.addEventListener("click", async function () {
        try {
            const response = await fetch("json/ghoul.json");
            const data = await response.json();
            const { quote, character } = quoteGenerator(data);
            document.getElementById("character").innerHTML = character;
            document.getElementById("quote").innerHTML = quote;
        } catch (error) {
            console.error(error);
        }
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
