$( document ).ready(function() {
	// Declaring two variables, one for the height of the main div, and one for the width.
	var houseHeight = $("#house").height();
	var houseWidth = $("#house").width();
	var forTheLoop = 0;
	$('.divPixels').remove();
	// A funtion that is ran when the submit button is pressed
	$("form").submit(function(e) {
		e.preventDefault();
		// sets a variable to the input given inside the form box above the submit button
		var userGridSize = $("#userInput").val();
		if ( userGridSize > 25 ) {
			alert("Hey! If your input is above 25 or below 1, it won't work!");
		}
		else if ( userGridSize < 1 ) {
			alert("Hey! If your input is above 25 or below 1, it won't work!");
		}
		else{
			// Sets a variable equal to the size that the divs should be to evenly take up the "house"
			var divWidthAndHeight = houseHeight / userGridSize;
			// a while loop that should run the amount of times inputed by the user squared
			while ( forTheLoop < userGridSize * userGridSize ) {
				// adds an empty div each time it loops
				$('#house').append('<div class="divPixels"></div>');
				// to make sure the while loops doesnt loop indefinetly and goes the correct number of times.
				forTheLoop ++;
			}
		}
	});
});