// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start code here
function generatePassword () {
  var passlength = window.prompt("How many characters would you like in your password?");

  if (passlength<8 || passlength>128) {
    window.alert("Invalid. Password must contain 8-128 characters.");
    return;
  }
}

var lowercase = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", ",", ".", "?"];
var special = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];


