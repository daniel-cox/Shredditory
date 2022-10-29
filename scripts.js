/*
 a.   Programmatically subtract the value of the first element in the array from the value in the last element of the array
  (do not use numbers to reference the last element, find it programmatically,
  ages[7] – ages[0] is not allowed).
  Print the result to the console.
*/
console.log("\nQuestion 1a:\n");

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //declares a variable equal to an array of ages (numbers)
console.log("this is my ages array:", ages);
let firstElement = ages[0]; //declares a variable called firstElement and assigns it the value of the first element in the array
let lastElement = ages[ages.length - 1]; //declares a variable called lastElement and assigns it the value of the last element in the array
let difference = lastElement - firstElement; //declares a variable called difference and subtracts lastElement minus the firstElement
console.log("last element in the ages array:", difference); //printing last element minus the first element
