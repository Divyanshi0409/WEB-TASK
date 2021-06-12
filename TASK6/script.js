// 1) WAP in js to check given year is leap year.
let year = prompt("TASK 1\nEnter any year to check if it is leap year or not.");
if (year % 400 == 0) {
  alert(`${year} is a leap year`);
} else if (year % 100 == 0) {
  alert(`${year} is not a leap year`);
} else if (year % 4 == 0) {
  alert(`${year} is a leap year`);
} else {
  alert(`${year} is not a leap year`);
}

// 2) WAP in js for performing arithmetic operation on 2 number according to input operator.
let num1 = Number(prompt("TASK 2\nEnter first number"));
let num2 = Number(prompt("Enter second number"));
let operator = prompt("Enter your desired operator: +,-,*,/");
switch (operator) {
  case "+":
    alert(`${num1}+${num2} = ${num1 + num2}`);
    break;
  case "-":
    alert(`${num1}-${num2} = ${num1 - num2}`);
    break;
  case "*":
    alert(`${num1}*${num2} = ${num1 * num2}`);
    break;
  case "/":
    alert(`${num1}/${num2} = ${num1 / num2}`);
    break;
}

// 3) WAP in js to Pass a Function as Parameter.
function greet() {
  return "Hello";
}

// passing function greet() as a parameter
alert(`TASK 3\nPassing function as argument`);
function printName(user, func) {
  const message = func();
  alert(`${message} ${user}`);
}
printName("John", greet);
printName("Jack", greet);
printName("Sara", greet);

// 4) WAP in js to Merge Two Arrays and Remove Duplicate Items.
let array1 = [1, 2, 3, 4, 5];
alert(`First array is ${array1}`);

let array2 = [3, 5, 1, 6, 7];
alert(`Second array is ${array2}`);

let array3 = array1.concat(array2);
alert(`Concatenated array is ${array3}`);

let set1 = new Set(array3);
let remove_duplicate = [...set1];
alert(`After removing duplicate items, array is ${remove_duplicate}`);
