// Don't change any original code!

// pseudocode
// click button to generate password and be prompted with password criteria
// When prompted with criteria, have options to select certain criteria
// Options are:
  // -length of password (8-128 CHAR)
  // -character types (lwr case, upr case, numeric, sp char.
// when prompts are answered,input should be validated - at least one char type selected
// when all prompts answered, pass is generated that matches criteria
// when pass is generated, it is displayed in an alert 


// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptMe(){
    var generateBtn = prompt("Please choose from the following password criteria:");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
