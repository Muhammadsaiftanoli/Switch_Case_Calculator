import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your first number."
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number."
    },
    {
        type: "list",
        name: "operator",
        message: "Enter your operator.",
        choices: ["+", "-", "*", "/", "%"]
    }
]);
const { numberOne, numberTwo, operator } = answer;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    case "%":
        result = numberOne % numberTwo;
        break;
    default:
        console.log("invalid operator.");
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
