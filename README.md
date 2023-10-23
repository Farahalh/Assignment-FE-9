# Assignment-FE-9
Practice and Implementation of Client Functionality
Bish-Bosh
Bish-Bosh lists all numbers between 1 and 100, but with certain exceptions: If the number is evenly divisible by 3, 'Bish' is listed instead of the number. If the number is evenly divisible by 4, 'Bosh' is listed instead of the number. If the number is evenly divisible by both 3 and 4, 'Bish-Bosh' is written instead of the number.

Example:
1, 2, Bish, Bosh, 5, Bish, 7, Bosh, Bish, 10, 11, Bish-Bosh, 13, 14, Bish [...]

A First Implementation
This implementation doesn't place any requirements on the front-end; it simply requires that the JavaScript functions correctly and that the application performs as described above. To test whether a number is evenly divisible, you can check if the remainder is zero when dividing (hint: use the modulus operator %). In this implementation, it's acceptable to write JavaScript within <script> tags directly in the HTML file and output results to the console.

A Second Implementation: Bish-Bosh 2.0
Now you will rewrite Bish-Bosh with a visual interface and display it on an HTML page. You will also allow a user to input data, including:

The number that represents 'Bish' (previously 3)
The number that represents 'Bosh' (previously 4)
The length of the loop (previously 100) – no negative values are allowed.
This implementation should include:

Variables for:
Loop number (i.e., where the loop should end)
First division number (what should be replaced with 'Bish')
Second division number (what should be replaced with 'Bosh')
A web-based user interface that includes:
Input fields for the above variables
A header (Bish-Bosh 2.0)
A footer with your name and copyright
An explanation of 'Bish-Bosh' and the purpose of the page
Presentation of the numbers
Separate files:

index.html
style.css
bishbosh.js
To update the actual content on the page, you can find helpful resources here:
http://www.w3schools.com/js/js_intro.asp

As we've learned in other sections of the course, I want you to keep your scripts in a separate file and reference it from the HTML document. No script references or similar elements in the HTML document, such as onclick!

ToDo List
This exercise involves creating an application that generates a shopping list. Users should be able to enter different items to be purchased, which are then added to the list.

Create an HTML page where users can enter an item to add to the list in an input field.
Create a button that adds the item to the list.
When an item is added, users should be able to mark it as purchased by clicking on the item. The text becomes strikethrough, and the element changes its background color.
Users should be able to undo the addition of an item. The text returns to normal, and the element regains its original color.
There should also be an option to completely remove an item from the list.
Feel free to use Bootstrap and your CSS knowledge to style the application. Experiment!
HTML, CSS, and JavaScript files should be in separate documents.

Additional Functionality (completely optional)

Save the shopping list persistently
When creating a new list, allow users to choose the appearance or similar settings
Mark/Unmark all items
Manage multiple shopping lists
Move items between lists
Of course, you can extend the application with additional functionality.
Extra
Additional (Optional)
More exercises:
https://www.w3resource.com/javascript-exercises/
https://javascript30.com/
https://open.kattis.com/
https://practity.com/582-2/
https://edabit.com/challenges/javascript#!
https://exercism.io/tracks/javascript/exercises
Choose according to your skill level, but make sure to challenge yourself!
For those who are already familiar with JavaScript, consider exploring frontend frameworks like React, Angular, or Vue. However, I recommend this only for those who feel confident in mastering the basics of JavaScript.

Good luck!
