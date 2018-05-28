var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var	easyBtn = document.querySelector("#easyBtn");
var	hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	//mode buttons event listeners
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//turnary operator
			//use it for if statements
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else{
			// 	numSquares = 6;
			// }
			reset();
		});
	}
}


function setupSquares(){
	//setup square listners
	for (var i = 0; i < squares.length; i++) {
	//add click listener to squares
		squares[i].addEventListener("click", function(){
		//grab color of clicked square
			var clickedColor= this.style.backgroundColor;
			//compare color to pickedColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}
function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDislay to match picked color
	colorDisplay.textContent = pickedColor;
	//reset the reset button back to "new color"
	resetButton.textContent = "New Colors"
	//remove correct when you win the game
	messageDisplay.textContent = "";
	//change the colors of the squares of the page
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
				squares[i].style.background = colors[i];
				squares[i].style.display="block";
		} else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		//since only 3 colors have been generated 
// 		//if there a color if found, then reset each color, 
// 		//and if no color, then set the square to none
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 		}
// })

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++)
		squares[i].style.backgroundColor = color;
}

function pickColor(){
	//pick a random number btw 0 and 1 (non inclusive)in javascript
	// multply by number (will still remain non inclusive)
	//Math.floor removes decimals
	//to make it inclusive add 1
	var random = Math.floor(Math.random() * colors.length)
	//console.log(random);
	return colors[random];
}

function generateRandomColors(num){
	//make and array
	var arr = []
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get  random color and push into arr
		arr.push(randomColor());
	}
	//return that array at the very end
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256) //since we will be rounding down and we need 255 items and multiple is not included
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256) //since we will be rounding down and we need 255 items and multiple is not included
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256) //since we will be rounding down and we need 255 items and multiple is not included
	//"rgb(r, g, b)""
	return "rgb(" + r + ", " + g +", " + b + ")";
}