
// Function to roll the dice
function rollTheDice() {
setTimeout(function () {
//// Dice Player 1////
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // return random no. 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // concate randomNumber1 inside dice file images to get dice img 1-6
 // chnage img attribute by used all img in the images folder
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
// we can say
// var randomDiceImage1 ="images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0]; //change the attribute of img element start from 1st img
image1.setAttribute("src", randomImageSource);
// we can say
// document.querySelectorAll("img")[0].setAttribute("src" + randomImage1 );


///// Dice Player 2//////
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// chnage img attribute by used all img in the images folder
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];//change the attribute of img element start from 1st img
image2.setAttribute("src", randomImageSource2);
//we can say :
//document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

////////// header - change the text ///////
/// if Player 1 wins //
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🎈Player 1 Wins!";
}
//If player 1 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " 🎈Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "🎈We are Equal!";
}
}, 500);
}
