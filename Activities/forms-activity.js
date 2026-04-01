/*
*  Create a form that handles submit and reset.
*  You have free reign to decide what the form
*  will be for, but the information provided should
*  be shown back to the user in a read only fashion.
*  It should allow the user to repeatedly fill out
*  the form and appending the read only data to the
*  page.
*
*  Requirements:
*   -A <form> element with contained controls
*   -At least 5 form fields
*   -At least 3 types of form fields:
*     ~text input
*     ~email input
*     ~textarea
*     ~checkbox
*     ~radio button
*     ~slider
*     ~etc
*   -At least 3 fields with validation:
*     ~min/max number value
*     ~character count min/max
*     ~required field
*     ~regex pattern
*     ~etc
*   -Form fields should have labels
*   -A submit button
*   -On submit, inputs should be displayed read only
*     and form should be reset.
*   -A reset button that resets form fields
*   -At least 10 styles (color, font size, etc)
*
*  Please upload your HTML and JS files with your
*  submission along with your css file if you used one.
*/


// YOUR CODE STARTS HERE
    const myForm = document.getElementById('myForm');
  
    document.addEventListener('DOMContentLoaded', () => {
        const myForm = document.getElementById('myForm');
      
        myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const Name = document.getElementById("name").value;
        const Email = document.getElementById("email").value;
        const Password = document.getElementById("password").value;
        const Birthday = document.getElementById("date").value;

        console.log(`Form Submitted!':
            "Name:    ${Name},
            Email:    ${Email},
            Password: ${Password},
            Birthday: ${Birthday}`);
        })
        alert("Form will be resetting now!");
    
})





// YOUR CODE ENDS HERE
