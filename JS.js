$( document ).ready(function() {
	// Declaring two variables, one for the height of the main div, and one for the width.
	var houseHeight = $("#house").height();
	var houseWidth = $("#house").width();
	var forTheSecondLoop = 0; 	
	var userColor= "black";
	// A funtion that is ran when the submit button is pressed
	$("form").submit(function(e) {
		e.preventDefault();
		// Two quick statements that remove all table pixels and table rows when the code is ran.
		$('.tablePixels').remove();	
		$('.tableRows').remove();	
		// a variable for later when im using a for loop
		var forTheLoop = 0;
		// sets a variable to the input given inside the form box above the submit button
		var userGridSize = $("#userInput").val();
		// Sets a variable equal to the size that the divs should be to evenly take up the "house"
		var dataWidthAndHeight = houseHeight / userGridSize;
		// An if and else if statements invalidating inputs sthat arent allowed
		if ( userGridSize > 200 ) {
			alert("Hey! If your input is above 100 or below 1, it won't work!");
		}
		else if ( userGridSize < 1 ) {
			alert("Hey! If your input is above 100 or below 1, it won't work!");
		}
		// If the number is valid it will cruis on through here and make some divs and set there styles
		else{                
			// a while loop that should run the amount of times inputed by the user squared
			while ( forTheLoop < userGridSize ) {
				// adds an empty row to the house each time it loops
				$('tbody').append('<tr class="tableRows" id="tableRow' + forTheLoop + '"></tr>');
				// Ads table data cells equal to the number of rows, sorta like user input squared i guess.
				while ( forTheSecondLoop < userGridSize ){
					// Some code that creates a dynamic ID each time it loops and appends it to the table row that was made above.
					$('#tableRow' + forTheLoop).append('<td class="tablePixels"></td>');
					// More variables made for looping
					forTheSecondLoop ++;
				}
				// More looping vars and junk
				forTheSecondLoop = 0;
				forTheLoop ++;
			}
			// Sets the style heights and widths for the tablePixels class
			$('.tablePixels').height( dataWidthAndHeight + "px");
			$('.tablePixels').width( dataWidthAndHeight + "px");
			$('#white').click(function(){
				var userColor = "white";
			});
			// a simple function that runs whenever you mouse over a "pixle" on the house.
			$('.tablePixels').mouseover(function() {
				$(this).css("background-color", userColor);
			});
		}
	});
});