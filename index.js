var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);

var loc1 = "images/dice" + randomNumber1 + ".png";
var loc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", loc1);
document.querySelectorAll("img")[1].setAttribute("src", loc2);

var win = "None";

if(randomNumber1 > randomNumber2){
  win = "🚩 Player 1 Wins!";
}
else if (randomNumber1 == randomNumber2) {
  win = "🚩Match Draw!🚩";
}
else{
  win = "Player 2 Wins! 🚩";
}

document.querySelectorAll("h1")[0].innerHTML = win;
