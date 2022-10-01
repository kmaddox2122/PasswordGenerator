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

console.log(generateBtn);

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var initialPrompt = window.prompt("Please choose a length for your password between 8 and 128 characters.");
  console.log(initialPrompt);
  if( !initialPrompt){
        return;
  } 
  else {
    console.log(typeof initialPrompt);
    var attemptedNumber = parseInt(initialPrompt);
    console.log(attemptedNumber);
    console.log(typeof attemptedNumber);
    if(attemptedNumber !== NaN && attemptedNumber > 7 && attemptedNumber < 129) {
      console.log("we got a good number!")
      var lowerCase = window.prompt("Do you want any lowercase characters? (y or n)");
      if( !lowerCase){
          return;
      } 
      else {
        if (lowerCase === "y" || lowerCase === "n") {
          // var upperCase = window.prompt ("Do you want any uppercase characters? (y or n)");
          // if (!upperCase){
          //   return;
          // } 
          // else {

        }
      }  
    } 
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

