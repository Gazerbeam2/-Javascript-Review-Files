let user = {


}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name
_____________________________________________


let salaries ={
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for(let key in salaries){
    sum += salaries[key];s
}

alert(sum);

_____________________________________________



function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}

let sum1 = (a, b) => a + b;

let double = n => n * 2; //One parameter Arrow function

let sayHi = () => alert("Hello!") //no parameter arrow function

________________________________________________________________________

function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }

  let arr = [5, 3, 8, 1];

  let filtered = filterRange(arr, 1, 4);

  alert( filtered ); // 3,1 (matching values)

  alert( arr ); // 5,3,8,1 (not modified)

  ___________________________________________________

  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];

      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }

  }

  let arr = [5, 3, 8, 1];

  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

  alert( arr ); // [3, 1]

  _____________________________________________

  let arr = [5, 2, 1, -10, 8];

  arr.sort((a, b) => b - a);

alert( arr );

_____________________________________________

function copySorted(arr) {
    return arr.slice().sort();
  }

  let arr = ["HTML", "JavaScript", "CSS"];

  let sorted = copySorted(arr);

  alert( sorted );
  alert( arr );

_____________________________________________________

/*Write a function named eitherStringIncluded(sentence, word1, word2) that accepts a sentence and two words as arguments. The eitherStringIncluded function should return true if either word1 or word2 is found in the sentence, and false if neither is found.*/

function eitherStringIncluded(sentence,word1, word2){
    return (sentence.includes(word1) || (sentence.includes(word2)))
}

_______________________________________________________________________________

/*Write a function isSubstring that takes in two strings, searchString and subString. The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise.*/

function isSubstring(searchString, subString){
  let mainString = searchString.toLowerCase();
  let secondaryString = subString.toLowerCase();
  if(mainString.indexOf(secondaryString) !== -1){
    return true

  }else{
    return false
  }
}

/*function isSubstring(searchString, subString) {
let superString = searchString.toLowerCase();

if (superString.indexOf(subString) !== -1){
    return true
}else{
return false;

}
}
*/

_______________________________________________________________________________________________________________

/* Write a function that prints out the multiples of 5 that are less than max */

function printFives(max){
  let i = 0;

  if(i < max) {
      i+=5;}
  }
function printFives(max){
    for (let i = 0; i<max;i+= 5){
      console.log(i);
        }
    }

__________________________________________________________________-

//Write a function that takes  in three numbers and prints out numbers between min and max at step intervals.


    function logBetweenStepper(min, max, step){

      for(let i = min;i <= max; i+=step){
          console.log(i);
      }
  }

___________________
____________________________
// Define a function that takes a number and prints every number from 0 to max that is divisible by eithher 3 or 5 but not both

function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
_____________________________________________________

//1. Carousel

//Write a program that launches a carousel for 10 turns, showing the turn number each time.

for(let i = 1; i <= 10; i++){
console.log(i);

}

/*When it's done, improve it so that the number of turns is given by the user. */

let turns = prompt("How many turns should we do?", 0)

for(let i = 1; i <= turns; i++){
  console.log(i);
}

/* 2. Parity
Check the following program that shows even numbers (divisible by 2) between 1 and 10. */

for(let i = 1; i <= 10; i++){
  if(i % 2 === 0){
    console.log(`${i} is even`);
  }
}

//Improve the program so that it also shows odd numbers.

for(let i = 1; i <= 10; i++){
  if(i % 2 === 0){
    console.log(`${i} is even`);
  }else {
    console.log (`${i} is odd`);
  }
}

/*Improve it again to replace the initial number 1 by a number give by the user */

let init = prompt("provide starting integer, please", 1)

for(let i = init; i <= (+init) + 9; i++){      ////Unary Plus Operator
  if(i % 2 === 0){
    console.log(`${i} is even`);
  } else console.log(`${i} is odd`);
}

_________________________________________________________________________________________

/*3. Input Validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100. */
let userGuess = 101;

while(userGuess >= 100){
  userGuess = prompt('Enter an integer .' ,200)
}

/*When you are done with the above, improve the program so that the teriminating number is between 50 and 100. */

while(userGuess > 100 || userGuess < 50){
  userGuess = prompt("Enter an integer.",0)
}

/* 4. Multiplication Table
Write a program that asks the user for a number, then shows the multiplication table for this number. */

let number = prompt("What times table do you want?", 0)

for(let i = 1; i <= 10; i++){
  let times = number * i
  console.log(`${number} * ${i} = ${times}`)
}

/* Whe you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).*/

let userInput = 0;

while(userInput < 2 || userInput > 9 ){
  userInput = prompt('Enter an integer', 0)
}

for(let i = 1; i <= 10; i++){
  let times = userInput * i
  console.log(`${userInput} * ${i} = ${times}`)
}

/*5. Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game. */

let userWord = ''

while(!(userWord === "no" || userWord === "yes")){
  userWord = prompt("Enter a word?");

}

/*6. FizzBuzz

Write a program that shows all numbers betwee 1 and 100 with the following exceptions: It shows "Fizz" instead if the number is divisible by 3. It shows "Buzz" instead if the number is  divisible by 5 and not by 3. */

for(let i = 1; i <= 100; i++){
  if(i % 3 === 0){
    console.log(`${i} is fizz`)
} else if(i % 5 === 0){
  console.log(`${i} is buzz`);
}
  else{
    console.log(`${i}`);
  }
}

/* When it's done, improve it so that the program shows "FizzBuzz" instead of numbers divisible both by 3 and by 5. */

for(let i = 1; i <=100; i++){
  if((i % 3 ===0) && (i % 5 === 0)){
    console.log(`${i} is fizzbuzz`);
  }else if (i % 3 === 0){
    console.log(`${i} is fizz`){
    }else if( i % 5 === 0){
      console.log(`${i} is buzz`);
    }else{
      console.log(`${i}`)
    }
  }
}

/*EXTRA STUFF*/

/*Shortening conditional statements -
