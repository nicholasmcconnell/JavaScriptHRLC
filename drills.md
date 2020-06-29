<!-- DONE!
SATURDAY PRE-CLASS DRILL

Write a function that takes in an array of numbers and outputs the average of all the numbers.

Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2 -->




It's time for the pre-class drill of the day! Interviewing is a skill that is in some ways separate from practical coding, and you need to work hard to hone this skill set during this course. The class is designed to make you great developers, and these pre-class questions are designed to make you awesome interviewers.

I STRONGLY encourage everyone to attempt these preclass drills every day and you should start by pseudo-coding. Many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land you your dream job one day.

<!-- Write a function that takes in an array of integers and the array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5] -->




It's time for the pre-class drill of the day! Interviewing is a skill that is in some ways separate from practical coding, and you need to work hard to hone this skill set during this course. The class is designed to make you great developers, and these pre-class questions are designed to make you awesome interviewers.

I STRONGLY encourage everyone to attempt these preclass drills every day and you should start by pseudo-coding. Many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land you your dream job one day.

Write a function that takes an array of integers as an input and outputs the first duplicate.

Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5

Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1

Input: [ 2, 4, 5 ]
Output: undefined




var testArr2 = [1, 2, 6, 4, 8, 9, 6];

    function findDupes(arr){
        for (var i=0; i<arr.length; i++){
            var currentIndex = i;
            var firstIndex = arr.indexOf(arr[i]);
            if (currentIndex !== firstIndex){
                return arr[i];
            }
        }
    }

var test2Result = findDupes(testArr2);
console.log(test2Result);




Write a function that takes in an input and returns true if it's an integer and false otherwise.

Ex:
Input: "7"
Output: false

Input: 7
Output: true

Input: 4.3
Output: false




Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

Ex:
Input: '1'
Output: -1

Input: '4'
Output: -4

Input: 'cow'
Error



DON!!!
Write a function that takes in a number and returns the corresponding day of the week.

Ex:
Input: 1
Output: 'Monday'

Input: 5
Output: 'Friday'

Input: 8
Output: undefined



DONE!
@here hey everyone! Starting today, I will be introducing pre-class drills for you all to tackle before class starts. The idea of this is that you all prepare for the types of questions you will see on interviews. Give these drills your best shot! Don’t worry if you have to look up some answers (for now), again this is just practice. The pre-class drill for today is as follows:
Explain each part of the code below:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <script type="text/javascript" src="app.js></script>
</body>
</html>





Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

Ex:
Input: 2
Output: 3 (because 1 + 2 = 3)

Input: 4
Output: 10  (because 1 + 2 + 3 + 4 = 10)

Input: 10
Output: 55





function compare(numberOne, numberTwo) {
  if (numberOne > numberTwo){
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}

compare(1,2);
compare(6, -4);
compare(3.4, 2);





Write a function that takes in two numbers and outputs the max (the greater of the two numbers).

Ex: 
Input: 1, 2
Output: 2

Input: 6, -4
Output: 6

Input: 3.4, 2
Output: 3.4




Explain the box model, its 4 components, and related CSS properties.





Write a function that takes in an array of numbers and outputs the average of all the numbers.
Ex:
Input: [ 1 , 4 , 7 ]
Output: 4
Input: [ 10, 5 ]
Output: 7.5
Input: [ 1.5, 3, 2.5, 1 ]
Output: 2




It's time for the pre-class drill of the day! Interviewing is a skill that is in some ways separate from practical coding, and you need to work hard to hone this skill set during this course. The class is designed to make you great developers, and these pre-class questions are designed to make you awesome interviewers.
I STRONGLY encourage everyone to attempt these preclass drills every day and you should start by pseudo-coding. Many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land you your dream job one day.
Write a function that takes an array of integers as an input and outputs the first duplicate.
Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5
Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1
Input: [ 2, 4, 5 ]
Output: undefined


THURSDAY PRE-CLASS DRILL -

Write a function that takes in a number and reverses the order of the digits.
Ex:
Input: 1234
Output:4321
Input: 1201
Output:1021
Input: 4
Output: 4
