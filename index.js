

function myfunction()
{var randomNumer1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + randomNumer1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumer1 > randomNumber2){
  document.querySelector("h1").innerHTML=" 🚩Player 1 Wins!";
}


else if (randomNumer1 === randomNumber2) {
  document.querySelector("h1").innerHTML=" 🚩Drawwwww";
}

else {
  document.querySelector("h1").innerHTML=" 🚩Player 2 Wins";

}

}
myfunction();
