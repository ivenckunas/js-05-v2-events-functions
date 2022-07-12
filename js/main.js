"use strict";

// console.log("main.js");
// nusitaikymai
const btn1El = document.getElementById("btn-click");
const flexEl = document.getElementById("flex");
if (!flexEl) throw "nera flexEl";
const btnDark = document.getElementById("btn-dark");
if (!btnDark) throw "nera btnDark";
const h1El = document.querySelector("h1");
if (!h1El) throw "nera h1El";
// onclick

let count = 0;

function showClick() {
  count++;
  console.log(`Clicked ${count} times`);
}

// addEventListener

btn1El.addEventListener("click", showClick);
// btn1El.addEventListener("mouseenter", showClick);

// flex elementui eventas

flexEl.addEventListener("click", flexClick);
// document.body.addEventListener("click", flexClick);

function flexClick(event) {
  const elAntKurioPaspaudziau = event.target;
  console.log(elAntKurioPaspaudziau);
  if (elAntKurioPaspaudziau.className === "card") {
    console.log("card");
    elAntKurioPaspaudziau.style.backgroundColor = "tomato";
    elAntKurioPaspaudziau.textContent += "sp";
  }
  //   console.log("flexClick");
}

// anonimine funkcija, be pav. nes jos kitose vietose nereikes iskviesti
btnDark.addEventListener("click", function () {
  h1El.style.backgroundColor = "coral";
});

// function hoisting, veikia tik kai yra function declaration
// function hoisting - funkcijos pernesamos i failo virsu

// function h1TitleChange(e) {
//   h1El.style.backgroundColor = "coral";
// }
