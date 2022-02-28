/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

console.log("\n---EXERCISE 1---")

function sumTriple (a, b) {
    if (a == b) {
      return 3 * (a + b);
      } 
     else
     {
      return (a + b);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

console.log("\n---EXERCISE 2---")

function checkNumbers (a, b) {
    if (a===50 || b===50 || a+b===50) {
      return (true);
      } 
     else 
     {
      return (false);
     }
   }
  console.log(checkNumbers(50, 20));
  


/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

console.log("\n---EXERCISE 3---")

let  myString = "Hello"
function removeLastCharacter () {
   lastCharRemoved = 
   myString.slice(0, myString.length - 1);
   return (lastCharRemoved)
}


console.log(removeLastCharacter())
/*

4)
 Create a function to find the largest of three given integers.
*/

console.log("\n---EXERCISE 4---")

function largestInt (a,b,c) {
return (Math.max(a,b,c))
}

console.log(largestInt(14,7,21))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

console.log("\n---EXERCISE 5---")

function checkGivenNumbers (a,b) {
    if ((a>=40 && a<=60 && b>=40 && b<=60) || (a>=70 && a<=100 && b>=70 && b<=100))
    {return (true)}
    else {return (false)}
}

console.log (checkGivenNumbers(46,56))

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

console.log("\n---EXERCISE 6---")
function stringCopies (string, number) 
{
  if (number < 0) {return false;}
    
  else
  {return string.repeat(number);}
}
console.log(stringCopies("Hello ", 3));
console.log(stringCopies("Hello ", 2));
console.log(stringCopies("Hello ", -3));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

console.log("\n---EXERCISE 7---")

function cityName (string) {
  if (string.length >= 3 && ((string.substring(0, 3) === 'Los')
  || (string.substring(0, 3) === 'New'))) {
 return (string)
  }  
  else {
      return ("")
  }
}

console.log (cityName("New Hampshire"))
console.log (cityName("Los Cabos"))
console.log (cityName("Madrid"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

console.log("\n---EXERCISE 8---")

function sumArray(myArray) {
return ( myArray[0]+myArray[1]+myArray[2] )

}


console.log(sumArray([1,2,3]))
console.log(sumArray([5,19,-12]))
console.log(sumArray([-3,132,-92]))

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

console.log("\n---EXERCISE 9---")

function checkArray(Array) {
    if (Array.includes(1) || Array.includes(3)) {
        return (true)
    }
    else { return(false)}
    }
    
    
    console.log(checkArray([1,2]))
    console.log(checkArray([5,63]))
    

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
console.log("\n---EXERCISE 10---")

function checkArrayDoesntContain(Array2) {
    if (!Array2.includes(1) && !Array2.includes(3)) {
        return (true)
    }
    else { return(false)}
    }
    
    
    console.log(checkArrayDoesntContain([1,2]))
    console.log(checkArrayDoesntContain([5,63]))


/*11)

Create a function to find the longest string from a given array of strings.
*/
console.log("\n---EXERCISE 11---")

let arr = [ 'abcdef', 'abcdefg', 'fghijklmn', 'gdf', 'ioeudfuiosdiufhrig' ];

console.log (arr.sort(function (a, b) { return b.length - a.length })[0]);



 /*12)
 
 Create a function to find the types of a given angle.
 
 Types of angles:
     Acute angle: An angle between 0 and 90 degrees.
     Right angle: An 90 degree angle.
     Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle
 */

    console.log("\n---EXERCISE 12---")

function typeOfAngle (angle) {
    if(angle>0 &&  angle<90) {
        return "Acute angle";
      }
      if(angle === 90) {
        return "Right angle";
      }
      if(angle>90 && angle< 180) {
        return "Obtuse angle";
      }
     if(angle === 180)
     {return "Straight angle";
    }
}

console.log(typeOfAngle(47))
console.log(typeOfAngle(90))
console.log(typeOfAngle(125))
console.log(typeOfAngle(180))

/*13)

Create a function to find the index of the greatest element of a given array of integers
*/
console.log("\n---EXERCISE 13---")


let arrayOfNumbers = [56, 3, 19, 24, 10];

let maxValue = Math.max(...arrayOfNumbers);

let index = arrayOfNumbers.indexOf(maxValue);
console.log(index); 

/*14)

Create a function to get the largest even number from an array of integers. */

console.log("\n---EXERCISE 14---")

function largestEvenNumber (arrayEven) {
    for (let i = 0; i < arrayEven.length; i++) {
        if (arrayEven[i] % 2 === 0){
          return arrayEven[i];
        }
        else {return ""}
      }
}
 
console.log(largestEvenNumber([20,10,16]))


/*16)

Create a function to check from two given integers, whether one is positive and another one is negative.*/

console.log("\n---EXERCISE 16---")

function checkIntegers (a,b) {

    if (a>=0 && b<=0) {
        return (true)
    }

    else if (a<=0 && b>=0) {
        return (false)
    }
}


console.log(checkIntegers(3,-3))
console.log(checkIntegers(-3,3))


/*17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
console.log("\n---EXERCISE 17---")

function upperAndLower (str) {
    if(str.length <3) {
        return (str.toUpperCase())
    }
    firstThreeCharacters = (str.substring(0, 3)).toLowerCase();
    lastCharacters = str.substring(3, str.length);  
    return firstThreeCharacters + lastCharacters;
}

console.log(upperAndLower("Javascript"))
console.log(upperAndLower("JAVAScript"))
console.log(upperAndLower("javaSCripT"))
/*18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

/*19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

*/


/*20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
