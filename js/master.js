'use strict';

var randomQuote;
var randomAuthor;

window.onload = function() {
	_setListeners();
	_fetchQuote();
};

function _setListeners() {

	document.getElementById("quill").addEventListener('mouseup', function() {
		_fetchQuote();
	});

	document.getElementById("birdie").addEventListener("mouseup", function() {

		window.open(
				"https://twitter.com/intent/tweet?text=" +
					randomQuote +
					" - " +
					randomAuthor
		);	
	});
}

function _fetchQuote() {
	// random value generator
	var randomNumber = Math.floor(Math.random() * quotes.length);
	randomQuote = quotes[randomNumber].quote;
	randomAuthor = quotes[randomNumber].author;

	document.getElementById("quote").innerHTML = randomQuote;
	document.getElementById("author").innerHTML = randomAuthor;
}

var quotes = [
	{
		"author": "Anthony J. D'Angelo",
		"quote": "Wherever you go, no matter what the weather, always bring your own sunshine" 
	},
	{
		"author": "Henry Wadsworth Longfellow",
		"quote": "The best thing one can do when it's raining is to let it rain" 
	},
	{
		"author": "Gary Snyder",
		"quote": "Nature is not a place to visit. It is home" 
	},
	{
		"author": "John Muir",
		"quote": "The mountains are calling and I must go" 
	},
	{
		"author": "Aldo Leopold",
		"quote": "I am glad I will not be young in a future without wilderness" 
	},
	{
		"author": "Henry David Thoreau",
		"quote": "An early morning walk is a blessing for the whole day" 
	},
	{
		"author": "Lao Tzu",
		"quote": "Nature does not hurry, yet everything is accomplished" 
	},
	{
		"author": "Ralph Waldo Emerson",
		"quote": "Earth laughs in flowers" 
	},
	{
		"author": "Zen proverb",
		"quote": "No snowflake ever falls in the wrong place" 
	},
	{
		"author": "Aristotle",
		"quote": "In all things of nature there is something of the marvelous" 
	},
	{
		"author": "Ralph Waldo Emerson",
		"quote": "Nature never hurries. Atom by atom, little by little she achieves her work" 
	},
	{
		"author": "Albert Einstein",
		"quote": "Look deep into nature, and then you will understand everything better" 
	},
	{
		"author": "Moliere",
		"quote": "The trees that are slow to grow bear the best fruit" 
	},
	{
		"author": "Ralph Waldo Emerson",
		"quote": "Nature is a mutable cloud which is always and never the same" 
	},
	{
		"author": "Edouard Manet",
		"quote": "There are no lines in nature, only areas of colour, one against another" 
	},
	{
		"author": "Henry Adams",
		"quote": "Chaos was the law of nature; Order was the dream of man"
	},
];