// Assignment code here
//declaration for charlength
var charlength = 8;

//declaration for character choices
var choiceArr = [];

// Array creation
var specialcharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "|", "?", "/", "<", ">"];
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
//Validation for prompts
  var validPrompts = askPrompts();
  var passwordText = document.querySelector("#password");

  if (validPrompts) {
      var newpassword = generatePassword();
      passwordText.value = newpassword;
  } else {
      passwordText.value ="";

  }
}

  //Generates password based on prompts
function generatePassword() {
  var password = "";
  for(var i = 0; i < charlength; i++) { //iterative loop to include a new random character based on character length prompt
    var randomchar = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomchar];
  } 
  return password;
}


//Add prompts for password criteria - length, charset (valid if at least one is selected)
function askPrompts() {
  choiceArr = [];
  //ParseInt used to detect for Not a Number
  charlength = parseInt(prompt("How many characters do you want for your password?  Min: 8, Max: 128")); 
  
  //Validation for numerical response
  if(isNaN(charlength) || charlength < 8 || charlength > 128) {
    alert("Character length must be a number between 8 - 128.  Please enter a number");
    return false;
  }
  //If statements for each character set prompt using concat method to merge arrays

    if (confirm("Do you want the password to contain UPPERCASE letters?")) {
      choiceArr = choiceArr.concat(uppercaseArr);
    }

    if (confirm("Do you want the password to contain lowercase letters?"))  {
      choiceArr = choiceArr.concat(lowercaseArr);
    }

    if(confirm("Do you want the password to contain numbers?")) {
      choiceArr = choiceArr.concat(numberArr);
    }

    if(confirm("Do you want the password to contain special characters (!@#$%...) ?")) {
      choiceArr = choiceArr.concat(specialcharArr);
    }
    return true;
}

