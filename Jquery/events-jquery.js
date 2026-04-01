/*
*  Create a shopping list or todo app that allows
*  a user to add and remove items from a list.
*  Items should have user provided text.
*
*  Ex: Each 'item' can be an input box that allows
*  the user to type text or you can have one text
*  box that a user can type text and click 'add'
*  to add to the list.
*
*  Requirements:
*   -Can add items/tasks to the lists 
*   -Can remove items/tasks from the list
*   -At least 5 styles applied (color, padding, etc)
*    these can be applied in the header (<style>)
*    or via DOM manipulation or via an external css file.
*    If you use a css file, please upload it
*
*  Please upload your HTML and JS files with your
*  submission along with your css file if you used one.
*/


// YOUR CODE STARTS HERE
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value ="";     
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "Li"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "span"){
        e.target.parentElement.remove();
    }
}, false);
 

// YOUR CODE ENDS HERE
