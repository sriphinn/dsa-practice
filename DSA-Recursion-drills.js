/* 1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.*/

const countingSheep = (numSheeps) => {
    //Base Case
    if (numSheeps === 0) {
        console.log('All sheep jumped over the fence')
        return
    }

    //General Case
    console.log(numSheeps + ': Another sheep jumps over the fence')
    return countingSheep(numSheeps - 1)
}

countingSheep(10)




/* 2. Power Calculator
Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)*/

powerCalculator = (a, n) => {
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};




// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(str) {
    if (str === "") { // This is the base case that will end the recursion
      return "";
    } else { 
      return reverseString(str.substr(1)) + str[0]; // This is the recursive call
    }
  }
  /* 
  First Part of the recursive function:
  You will have several nested calls to reverseString(), each time passing in a substring of the previous string
  
  Each call: str === "?"             will return   reverseString(str.substr(1))    + str[0]
  1st call: reverseString("hello")   will return   reverseString("ello")           + "h"
  2nd call: reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call: reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call: reverseString("lo")      will return   reverseString("o")              + "l"
  5th call: reverseString("o")       will return   reverseString("")               + "o"
  
  Second part of the recursive function:
  The function hits the base case and the most highly nested call returns immediately (the 5th call returns first)
  
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  
  
  console.log(reverseString("hello"));


  /* 4. nth Triangular Number
Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45. */

function tri(n){
    if(n <= 1){
      return n
    } else {
      return n + tri(n-1)
    }
  }
  
  console.log(tri(6))


/* 5. String Splitter
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"] */



/* 6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13. */

