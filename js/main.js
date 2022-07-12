"use strict";

// console.log("main.js");
// nusitaikymai
const btn1El = document.getElementById("btn-click");

// onclick

let count = 0;

function showClick() {
  count++;
  console.log(`Clicked ${count} times`);
}

// addEventListener

btn1El.addEventListener("click", showClick);
// btn1El.addEventListener("mouseenter", showClick);
