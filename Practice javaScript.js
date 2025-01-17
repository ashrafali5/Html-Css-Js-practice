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
// document.write(Fconverter(28));

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
// const filterEvenNumbers = (arr) => {
//   return arr.filter((number) => {
//     return number % 2 === 0;
//   });
// };
// document.write(filterEvenNumbers([45, 55, 33, 563, 12, 43, 67, 78, 90, 34, 56]));

// Question 15: Find the Maximum Number in an Array
// const findMax = (arr) => {
//   let largestNum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNum) {
//       largestNum = arr[i];
//     }
//   }
//   return largestNum;
// };
// document.write(findMax([45, 23, 63, 67, 23, 543, 42, 2321, 321]));

// Question 15: Second Answer
// const findMax = (arr) => {
//   return Math.max(...arr);
// };
// document.write(
//   findMax([34324647856, 3342345325, 256875434, 734523454533, 564523454])
// );

// Question 16: Reverse a String Alternative Mathod
// const reversedString = (str) => {
//   if (str.length <= 1) {
//     return str;
//   }
//   return reversedString(str.slice(1)) + str[0];
// };
// document.write(reversedString("Hi i am Ashraf Ali"));

// // Question 17: Remove Duplicate Values from an Array
// const removeDuplicate = (arr) => {
//   return [...new Set(arr)]; // or Array.from(new Set(arr));
// };
// document.write(removeDuplicate([5, 2, 5, 6, 6, 7, 2, 5, 6, 0, 5, 8, 9]));

// Question 18: Flatten an Array
// const flattenArray = (arr) => {
//   return arr.flat();
// };
// document.write(flattenArray([84, 54, [53, 65], [99, 93, 32]]));

// Question 19: Count the Frequency of Elements in an Array
// const countFrequency = (arr) => {
//   let frequency = {};
//   for (let item of arr) {
//     if (frequency[item]) {
//       frequency[item]++;
//     } else {
//       frequency[item] = 1;
//     }
//   }
//   return frequency;
// };
// console.log(
//   countFrequency([
//     "apple",
//     "mango",
//     "orange",
//     "apple",
//     "banana",
//     "mango",
//     "banana",
//     "papaya",
//   ])
// );

// Question 20: Find the Second Largest Number in an Array
// const secondLargestNumber = (arr) => {
//   let largestNum = -Infinity;
//   let secondLargestNum = -Infinity;
//   for (let num of arr) {
//     if (num > largestNum) {
//       secondLargestNum = largestNum;
//       largestNum = num;
//     } else if (num > secondLargestNum && num !== largestNum) {
//       secondLargestNum = num;
//     }
//   }
//   return secondLargestNum;
// };
// document.write(secondLargestNumber([23, 43, 34, 234, 231, 145]));

// Exercise 21: Calculate the Factorial of a Number
// const factorial = (num) => {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// };
// document.write(factorial(5));

// Exercise 25: Sum of Array Elements
// function sumArray(arr) {
//   let a = arr[i];
//   if (arr[i]) {
//     return a + arr[i];
//   }
// }
// document.write(sumArray([234, 234, 234, 213, 53]));

// practice : - word counting
// function lengthOfStr(string) {
//   let count = 0;
//   let str = string.split(" ");
//   for (let length of str) {
//     count++;
//   }
//   return count;
// }
// document.write(lengthOfStr("hellow world"));

// Exercise 25: Sum of Array Elements
// const sumArray = (arr) => {
//   let counting = 0;
//   for (i = 0; i < arr.length; i++) {
//     counting += arr[i];
//   }
//   return counting;
// };
// document.write(sumArray([1, 3, 5, 7, 9]));

// // Exercise 26: Convert a String to Uppercase
// const toUpperCase = (str) => {
//   return str.toUpperCase();
// };
// document.write(toUpperCase("hello world"));

// Exercise 27: Find the Index of an Element in an Array
// const findIndex = (arr, value) => {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   } // loop through the array
//   return -1;
// };
// document.write(findIndex([1, 2, 3, 4, 5], 5)); // Output: 4

// Exercise 28: Calculate the Average of an Array
// function average(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// document.write(average([1, 2, 3, 4]));

// Exercise 29: Find the Minimum and Maximum of an Array
// function minMax(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return { min: min, max: max };
// }
// console.log(minMax([34, 53, 52, 32, 64, 23]));

// Exercise 30: Remove Duplicates from an Array
// function removeDuplicate(arry) {
//   return Array.from(new Set(arry));
// }
// document.write(removeDuplicate([233, 245, 23, 34, 34]));

// Exercise 31: Merge Two Arrays and Remove Duplicates
// function mrgAndRmvDupl(arr1, arr2) {
//   let firstArray = arr1;
//   let secondArray = arr2;
//   let mergedArray = firstArray.concat(secondArray);
//   let mrgAndRmvDupl = [...new Set(mergedArray)];
//   return mrgAndRmvDupl;
// }
// document.write(mrgAndRmvDupl([23, 23, 24, 25], [65, 34, 23, 27, 25]));
// console.log(mrgAndRmvDupl(["a", "b", "c", "d"], ["a", "c", "b", "e", "x"]));

// Exercise 32: Count the Number of Vowels in a String
// Alternative methode for this question

// const countVowels = (str) => {
//   let vowels = str.match(/[aeiouAEIOU]/g);
//   return vowels ? vowels.length : 0;
// };
// document.write(countVowels("Hellow"));

// Exercise 33: Reverse a String
// function reversedString(str) {
//   let reverseStr = str.split("").reverse().join("");
//   return reverseStr;
// }
// document.write(reversedString("the king of the year"));

// Exercise 34: Check if a String is a Palindrome
// function isPalindrome(str) {
//   let string = str.toLowerCase().replace(/\s+/g, "");
//   let reversedStr = string.split("").reverse().join("");
//   return string == reversedStr;
// }
// document.write(isPalindrome("AB BA"));

// Exercise 35: Find the Second Largest Number in an Array
// function secondLargestNumber(array) {
//   let largest1 = -Infinity;
//   let largest2 = -Infinity;
//   for (let num of array) {
//     if (num > largest1) {
//       largest2 = largest1;
//       largest1 = num;
//     } else if (num > largest2 && num != largest1) {
//       largest2;
//     }
//   }
//   return largest2;
// }
// document.write(secondLargestNumber([34, 53, 62, 62, 634, 62, 67, 23, 5, 3]));

// Alternative methode
// function secondLargestNumber(arr) {
//   let removedDuple = [...new Set(arr)];
//   let uniqueArray = removedDuple.sort((a, b) => b - a); // this can convert arry numbers in decending order
//   return uniqueArray;
// }
// document.write(secondLargestNumber([34, 64, 324, 654, 67, 23, 5, 347]));

// Exercise 36: Find the Intersection of Two Arrays
// function intersection(arry1, arry2) {
//   let intersection = [];
//   for (let element of arry1) {
//     if (arry2.includes(element)) {
//       if (!intersection.includes(element)) {
//         intersection.push(element);
//       }
//     }
//   }
//   return intersection;
// }

// document.write(intersection([23, 34, 245], [23, 34, 234]));
// document.write(intersection(["a", "b", "c"], ["e", "b", "c"]));

// Exercise 37: Find the Maximum Subarray Sum --Most-Imp-
// function maxSubArray(arry) {
//   let maxValueAt = -Infinity;
//   let currentElementAt = 0;
//   for (let i = 0; i < arry.length; i++) {
//     currentElementAt = currentElementAt + arry[i];
//     if (maxValueAt < currentElementAt) {
//       maxValueAt = currentElementAt;
//     }
//     if (currentElementAt < 0) {
//       currentElementAt = 0;
//     }
//   }
//   return maxValueAt;
// }
// console.log(maxSubArray([3, 4, 5, 1, -3, 3, -5, 3]));

// Exercise 38: Merge Two Sorted Arrays //sorted means Nums in order

// function mergeSortedArray(arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   let result = [];
//   //   compare and merge elements
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   //   add remaining elements from arr1
//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }
//   //   add remaining elements from arr2
//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }
//   return result;
// }
// console.log(mergeSortedArray([1, 3, 5,9,7], [2, 4, 6,7,8]));

// Exercise 39: Find the Intersection of Two Arrays
// function intersectionOfTwoArrays(arr1, arr2) {
//   let intersectionArr = [];
//   for (let element of arr1) {
//     if (arr2.includes(element)) {
//       if (!intersectionArr.includes(element)) {
//         intersectionArr.push(element);
//       }
//     }
//   }
//   return intersectionArr;
// }
// console.log(intersectionOfTwoArrays([3, 42, 4, 23, 21], [3, 42, 5, 23, 56]));
