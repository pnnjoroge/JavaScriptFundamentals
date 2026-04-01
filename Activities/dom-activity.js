/*
*  The document object provides methods and properties
*  that allow us to access and manipulate html elements.
*  Given the HTML file provided, perform the updates
*  listed below via javascript.
*
*  The HTML file contains:
*   -h1 header element
*   -p paragraph element
*   -ul unordered list
*     -li (3x) list items
*
*  You can choose how you would like to select the
*  elements, for example by class, id, etc. and what
*  text to fill each element with.
*
*  Your manipulation should be fully done from js,
*  meaning you should not modify the html file directly.
*
*  Requirements:
*   -Each element on the page has text (h1, p, all li)
*   -2 or more elements should have css styles applied
*   -A fourth li should be added to the ul with text
*
*  Please upload the HTML file, which should be unmodified,
*  with your submission.
*/


// YOUR CODE STARTS HERE

const headerTitle = document.getElementById("header");
const newTitle = document.createElement('h1');
newTitle.textContent = 'Welcome to WEB 115!';
headerTitle.appendChild(newTitle);
newTitle.style.backgroundColor = "green";


const newParagraph = document.querySelector("p");
if (newParagraph) {
    newParagraph.textContent = 'In this class, you will learn different JavaScript topics such as: ';
}
newParagraph.style.color= "red";

const lists = document.getElementsByClassName("first-item");
lists[0].textContent = 'DOM Manipulation';

const newLists = document.querySelectorAll("li");
if ( newLists.length > 1 ) {
    newLists[1].textContent = "Events" 
    newLists[2].textContent = "JQuery"
}


const addedList = document.querySelector('li');
const anotherList = document.createElement("li");
anotherList.textContent = "AJax & JSON";
addedList.appendChild(anotherList);

// YOUR CODE ENDS HERE
