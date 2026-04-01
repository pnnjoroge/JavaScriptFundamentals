// PART 1
// Use truthy/falsy and short circuit concepts to console log 'Open for business'
// if the store is open. You should use || or &&. NO if/else.
// Toggle open to test your solution:
var open = true;

// YOUR CODE STARTS HERE
open && console.log("Open for business");
!open && console.log("Closed for business");
// YOUR CODE ENDS HERE


// PART 2
// Use truthy/falsy and short circuit concepts to console log
// 'You must be and adult' if the person is under 18.
// You should use || or &&. NO if/else.
// Adjust person to test your solution:
var person = {
  name: `Frank`,
  age: 15,
  username: `frank123`
   
}

// YOUR CODE STARTS HERE
person.age <= 18 && console.log("You must be an adult");
person.age >= 18 && console.log("Welcome!");


// YOUR CODE ENDS HERE


// PART 3
// Use truthy/falsy and short circuit concepts to set a
// default value of 'unknown' to a variable named dogBreed
// if the dog's breed is not set. NO if/else.
// Adjust puppy to test your solution:
var puppy = {
    breed: 'poodle',
    vaccinated: true,
    adopted: false,
    adoptionFee: 200
  }
  
  // YOUR CODE STARTS HERE
  puppy.breed = { } && console.log("Unknown");
// YOUR CODE ENDS HERE
