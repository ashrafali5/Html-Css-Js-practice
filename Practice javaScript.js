// Question 3: Odd or Even
// function isEven(a) {
//   if (a % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// document.write(isEven(18))

// Question 4: Find the Length of a String
// function findLength(str) {
//   let counting = 0;

//   for (let length of str) {
//     counting++;
//   }
//   return counting;
// }
// document.write(findLength("the intelligent"));

// Question 5: Temperature Conversion
// function Fconverter(Cel) {
//   let fahrenheit = (Cel * 9) / 5 + 32;
//   return fahrenheit;
// }
// document.write(Fconverter(5));

// Question 6: Find the Largest Number in an Array
// function largestNumber(arr) {
//   let largestNum = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNum) {
//       largestNum = arr[i];
//     }
//   }
//   return largestNum;
// }
// document.write(largestNumber([89, 99, 3, 0, 390, 444]));

// Question 7: Reverse a String
// function reversedString(str) {
//   let reversedS = str.split("").reverse().join("");
//   return reversedS;
// }
// document.write(reversedString("Hellow"))

// Question 8: Check for Palindrome
// function isPalindrome(str) {
//   let cleanedStr = str.toLowerCase().replace(/\s+/g, "");
//   let reversedStr = cleanedStr.split("").reverse().join("");
//   let compare = cleanedStr === reversedStr;
//   return compare;
// }
// document.write(isPalindrome('ABBA'))

// Question 9: Count the Vowels in a String
// function countVowels(str) {
//   let count = 0;
//   let vowels = "aeiouAEIOU";
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// document.write(countVowels("The intelligent investor"));

// Question 10: Count Words in a String
// function countWords(str) {
//   let words = str.split(" ");
//   let count = 0;
//   for (char of words) {
//     count++;
//   }
//   return count;
// }
// document.write(countWords("the intelligent investor"));

// Question 10: Count Words in a String (second method)
// function countWords(str) {
//   return str.split(" ").length;
// }
// document.write(countWords("the king of the year"));

// Question 11: Find the Smallest Number in an Array
// function smallestNumber(arr) {
//   let smallestNum = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] < smallestNum) {
//       smallestNum = arr[i];
//     }
//   }
//   return smallestNum;
// }
// document.write(smallestNumber([89, 33, 90, 56, 5]));

// Question 12: Convert a String to Title Case
// function titaleCase(str) {
//   return str
//     .split(" ")
//     .map(function (word) {
//       return word[0].toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join(" ");
// }
// document.write(titaleCase("hellow i am ashraf of the"));

// Question 13: Multiply a Number by a Factor
// function multiplyByFactor(factor) {
//   return function (number) {
//       return number * factor;
// };
// }
// const multiplyBy2 = multiplyByFactor(2);
// document.write(multiplyBy2(5));

// Some Clouser Based Questions
// Question 1: Basic
// function outerFunction() {
//   let text = "the intelligent investor of the year";
//   function innerFunction() {
//     document.write(text);
//   }
//   return innerFunction;
// }
// const clouser = outerFunction();
// clouser();

// Question 2: Closure with Variables
// function createCounter() {
//   let counter = 0;
//   return {
//     increment: function () {
//       counter++;
//       document.write(" " + counter);
//     },
//     decrement: function () {
//       counter--;
//       document.write(" " + counter);
//     },
//   };
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.decrement();
// counter.decrement();

// Question 14: Filter an Array of Numbers
