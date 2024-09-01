
// Assignment operators

// 1.assign a value to the variable
 var a=30;
console.log(a);

//  2.Addition assignment
var b=40;
b+=2
console.log(b);

//  3.Subtraction assignment
var b=50;
b-=2
console.log(b);

//  4.Multiplication assignment
var b=50;
b*=2
console.log(b);

//  5.Division assignment
var b=49;
b/= 2;
console.log(b);

//  6.Modulus assignment
var b=25;
b%=5;
console.log(b);

//  6.Exponential assignment
var b=5;
b**=3;
console.log(b);



// Comparision operators in Javascript
// 1.equality 
var b=60;
var c=70;
console.log(b==c)

var b=60;
var c=60;
console.log(b==c)

// 2.Strict Equality operator-Checks if two values are equal and of the same type, without type coercion
var b=60;
var c="60";
console.log(b===c)

// 3.InEquality Operator-
var b="60";
var c=60;
console.log(b!=c)

// 4. Strict InEquality Operator-
var b="karthik";
var c=60;
console.log(b!==c);

// 5. Greter than
var b=60;
var c=60;
console.log(b>c);

// 6. less than
var b=60;
var c=60;
console.log(b<c);

// 7. Greter than or equal to
var b=60;
var c=70;
console.log(b>=c);

// 8. less than or equal to
var b=60;
var c=60;
console.log(b<=c);


// Unary operators in javascript
// 1.unary plus
var a="50";
var b=+a;
console.log(b);

// 2.unary minus 
var a="70"
var b=-a;
console.log(b);

// 3.Increment
var a=5;
console.log(++a)

var a=10;
console.log(a++)
console.log(a)

// 4.decrement
var a=6;
console.log(--a)

var a=15;
console.log(a--)
console.log(a)

// 5.logical NOT operator
let num = 5; 
let bitwiseNot = ~num; 
console.log(bitwiseNot);

// 6.Type of 
var a="karthik jinkala";
console.log(typeof a)

//7.void 
// The void operator evaluates an expression and returns undefined. It is often used to discard the result of an expression.

let result = void (3 + 5); // Evaluates 3 + 4 but returns undefined
console.log(result); // undefined


// Questions
// 1. Write a JavaScript script that uses the ternary operator to determine if a number is even or add
// var a=+prompt("enter the number");
// var result1=evenorodd


// 2.Expand the script to include a ternary operation that checks if a user is an adult (18+) or a minor. 
var age=+prompt("ENTER YOUR AGE");
var result2=age>18? "you are eligible to vote":
"your are not eligible to vote";
console.log(result2);

//3.Grade Classification: Declare a variable score and set it to a value between 0 and 100. Use nested ternary operators to classify the score into grades: A (>= 90), B (>=75), C (>=60), D (>= 45), and F (below 45). Log the grade. 
var score=+prompt("Enter the scores");
var result3=score>90? "grade A": score>75? "grade B": score>60? "grade C": score>45? "grade D":"F";
console.log(result3)


// 4.) Temperature Check: Declare a variable temperature and use nested ternary operators to categorize it as "Hot" (above 30), "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). Log the result. 
var temp=+prompt("Enter the Temperature");
var res_temp=temp>30? "hot": temp>20? "warm": temp>10? "cool" :"cold";
console.log(res_temp);

// 5.Age Group: Declare a variable age and use the ternary operator to classify the age into "Child" (0-12), "Teen" (13-19), "Adult" (20-64), and "Senior" (65 and   above). Log the result. 
var agegroup=+prompt("Enter the Ages");
var res_ages=agegroup<12?"Child":
agegroup>12 && agegroup<19? "Teen":
 agegroup>19 && agegroup<65? "Adult":
  agegroup>=65? "Senior":"oldman";

console.log(res_ages)
