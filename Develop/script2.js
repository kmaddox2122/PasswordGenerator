// function returnANumberPassed (n){
//    if(!n)
//    console.log('we didnt pass a number')
//    return;
//    else return n;

// }

// let numberPassed = returnANumberPassed(2);
// console.log(numberPassed);




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
  if(password === undefined){
    writePassword();
  } 
  else if(password === 'cancel'){
    console.log('we are ending this function execution since they are wanting to cancel out of a prompt.')
    return;
  }
  else {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
 

}

//window.prompt returns an empty string if ok is clicked and no text is entered, and returns null if cancel is clicked, both of which are falsey

function generatePassword() {
  var initialPrompt = window.prompt("Please choose a length for your password between 8 and 128 characters.");
  console.log(initialPrompt);
  if(initialPrompt === ''){
    window.alert("You did not enter a number between 8 and 128.");
    return;
  } 
  else if(initialPrompt === null){
    console.log('they cancelled, let them cancel.')
    return 'cancel';
  }
    
        //loop back to initial prompt
   //add if stmt to prompt another window if user doesn't choose an applicable answer.
  else {
    console.log(typeof initialPrompt);
    var attemptedNumber = parseInt(initialPrompt);
    console.log(attemptedNumber);
    console.log(typeof attemptedNumber);
    if(attemptedNumber !== NaN && attemptedNumber > 7 && attemptedNumber < 129) {
      console.log('we got a number');
      console.log("we got a good number!")
      var lowerCase = window.prompt("Do you want any lowercase characters? (y or n)").toLowerCase();
      if (lowerCase === ''){  //????why does !var not work with new alert????
        window.alert("You did not enter any text in the box.");
        return;
      } 
      else if(lowercase === null){
        return 'cancel';
      }
      else {
        if (lowerCase === "y" || lowerCase === "n") {
          console.log ("I answered the question with y or n");
          var upperCase = window.prompt ("Do you want any uppercase characters? (y or n)").toLowerCase();
          if (!upperCase){
            return;
          } 
          else {  
            if(upperCase === "y" || upperCase === "n") {
              console.log ("I answered the question with y or n");
              var numericCharacters = window.prompt("Do you want any numeric characters? (y or n)").toLowerCase();
              //numericCharacters is either equal to a string or undefined at this point. 
              //the longhand way of the below logic. 
              if (!numericCharacters){
                return;
              }
              else {
                if(numericCharacters === "y" || numericCharacters === "n"){
                  console.log ("I answered the question with y or n");
                  var specialCharacters = window.prompt ("Do you want any special characters? (y or n)").toLowerCase();
                  if (!specialCharacters){
                    return;
                  }
                  //at this point at least one question should be yes- will come back to code.
                  
                  else {
                    let passwordCharacterPool = '';
                    let password = '';
                    if (lowerCase === "y") {
                      passwordCharacterPool = passwordCharacterPool + "abcdefghijklmnopqrstuvwxyz";
                    }
                    if (upperCase === "y") {
                      passwordCharacterPool = passwordCharacterPool + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    }
                    if (numericCharacters === "y") {
                      passwordCharacterPool = passwordCharacterPool + "0123456789";
                    }
                    if (specialCharacters === "y") {
                      passwordCharacterPool = passwordCharacterPool + '"' + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
                    }
                  }
                    for (let i = 0; i <= attemptedNumber; i++) {
                      var character = Math.floor(Math.random()
                      * passwordCharacterPool.length + 1);  //passwordCharacterPool undefined???
                      password = password + passwordCharacterPool.charAt(character);
                    }
                    
                    return password;
                }
              }
  
            }
          }
        }
        else {
          console.log('you did not enter a y or an n')
          return;
        }
      } 
    } 
    else {
      window.alert("You did not enter a number between 8 and 128.");
      return;
    } 
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// else {
//   let password = '';
//   let passwordCharacterPool = '';
//   if(lowerCase  === 'y'){
//     passwordCharacterPool = passwordCharacterPool + 'abcdefghijklmnopqrstuvwxyz'
//   }
//   if(upperCase === 'y'){
//     passwordCharacterPool = passwordCharacterPool + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   }
//   if(numericCharacters === 'y'){
//     passwordCharacterPool = passwordCharacterPool + '0123456789'
//   }
//   if(specialCharacters === 'y'){
//     passwordCharacterPool = passwordCharacterPool + ' !"#$%&' + "'" + '()*+,-./:;<=>?@[\]^_`{|}~'

//   }
//   for (let i = 1; i <= attemptedNumber; i++) {
//     var character = Math.floor(Math.random()
//                 * passwordCharacterPool.length + 1);
      
//     password = password + passwordCharacterPool.charAt(character)  //pause here in console to slow down code
//   }
//   return password;