#! /usr/bin/env node

import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
  { message: "Enter your First Number", type: "number", name: "FirstNumber" },
  { message: "Enter your Second Number", type: "number", name: "SecondNumber" },

  {
    message: "select one of the operater to perform operation",
    type: "list",
    name: "operater",
    choices: ["addition", "subtraction", "multiplacation", "division"],
  },
]);

// coditional statment
if (answer.operater === "addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operater === "subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operater === "multiplacation") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operater === "division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("please select a valid operater");
}
