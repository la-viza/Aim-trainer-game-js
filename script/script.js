// let time = 0,
// unlimited = false,
// playing = 0,
// hits = 0,
// missed = 0,
// accuracy = "0%",
// interval;

// function createRandomCircle () {
// if ("playing") {
//     return;
// }

// const circle = document.createElement("div");
// const size = getRandom(30, 100);
// const colors =["yellow", "red", "blue", "green"];

// const  { width, height} = board.getBoundingClientRect();
// const x = getRandomNumber(0, width - size);
// const y = getRandomNumber(0, height - size);

// circle.classList.add("circle");
//     circle.style.width = ``

// }

// function getRandomNumber(Min, Max) {
//     return Math.random(Math.floor() * (Max - Min) + Min);
// }

const target = document.querySelector(".circle");

function timeSet() {
  target.style.top = Math.random() * 750 + "px";
  target.style.left = Math.random() * 750 + "px";
}

setInterval(timeSet, 1000);

target.addEventListener("click", shoot);

let score = 0;
playerScore = document.querySelector(".score");

let finalScore = document.querySelector("#final-result");



function shoot(event) {
score++;
document.querySelector(".score").innerHTML =  score;
document.querySelector("#final-result").innerHTML =  score;

console.log(score);  
}

function countDown() {



    console.log("It works")
}



setTimeout(countDown, (1000 * 30));
console.log("1 2 3");










