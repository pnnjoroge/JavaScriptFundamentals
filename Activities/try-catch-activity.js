/*
*  Force each of the follow error types to occur
*  and catch them. Log a message describing each
*  of the error types.
*
*  Error types:
*   -SyntaxError (already done)
*   -ReferenceError
*   -TypeError
*   -RangeError
*
*  Additionally, throw your own error with a
*  custom error message containing your name.
*  Catch your error and log a message.
*/

console.log('PROGRAM START');

try {
  JSON.parse(`{name: "John", age: 18}`);

} catch(error) {
  console.log(`Caught a syntax error: `);
  console.log(error);
}
// YOUR CODE STARTS HERE
try {
  console.log(height);
} catch(error){
  console.log(`Caught a reference error: `);
  console.log(error);
}
try {
  var ladies = 20;
  var tables = 4;
  var ladiesPerTable = ladies / tables;  
  ladiesPerTable();
} catch(error){
  console.log(`Caught a type error: `);
  console.log(error);
}
try {
 (-5).toFixed(1000);
} catch(error){
  console.log(`Caught a range error: `);
  console.log(error);
}

function checkName(myName){
  if (myName !== "Paulette"){
  throw new Error("Paulette error");
  }
}
try {
  checkName("Palette");
} catch(error){
  console.log(`Caught name error: `);
  console.log(error);
}

// YOUR CODE ENDS HERE

console.log('PROGRAM END');
