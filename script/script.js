let board = document.querySelector("#board");


let time = 0,
unlimited = false,
playing = 0,
hits = 0,
missed = 0,
accuracy = "0%",
interval;



function createRandomCircle () {
if ("playing") {
    return;
}

const circle = document.createElement("div");
const size = getRandom(30, 100);
const colors =["yellow", "red", "blue", "green"];
}

function getRandomNumber(Min, Max) {
    return Math.random(Math.floor() * (Max - Min) + Min); 
}