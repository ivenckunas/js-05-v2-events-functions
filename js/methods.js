"use strict";

// function declaration(hoisted)
function addNums(n1, n2) {
  return n1 + n2;
}

// jei bandysim iskviesti auksciau nei aprasyta gausim error
// addNumsExpression(5, 5);
// function expression (not-hoisted)
const addNumsExpression = function (n1, n2) {
  return n1 + n2;
};

addNumsExpression(5, 5);

// anonimine arrow funkcija
// () => {}
// => === return
const addNumsArrow = (n1, n2) => n1 + n2;

const rez = addNumsArrow(5, 5);
console.log("rez ===", rez);

const calc = {
  name: "James",
  addNums: function (n1, n2) {
    return n1 + n2;
  },
};

calc.addNums(5, 5);
