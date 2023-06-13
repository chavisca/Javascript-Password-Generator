// Assignment code here
//declaration for charlength
let charlength = 8;
// Array creation
var specialcharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "|", "?", "/", "<", ">"];
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add prompts for password criteria - length, charset (valid if at least one is selected)
function Prompts() {
  //ParseInt used to detect for Not a Number
  charlength = parseInt(prompt("How many characters do you want for your password?  Min: 8, Max: 128")); 
  
  //Validation for numerical response
  if(isNaN(charlength) || charlength < 8 || charlength > 128) {
    alert("Character length must be a number between 8 - 128.  Please enter a number");
    return false;}
}