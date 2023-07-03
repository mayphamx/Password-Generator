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

//password character if statement 
function generatePassword() {
  var passlength = window.prompt("How many characters would you like in your password?");

  if (passlength < 8 || passlength > 128) {
    window.alert("Invalid. Password must contain 8-128 characters.");
    return;
  }

  // define variables for character options
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ":", ";", "<", ">", ",", ".", "?"];
  var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // boolean for adding character types
  var addLower = window.confirm("Add lowercase alphabetical characters?");
  var addUpper = window.confirm("Add uppercase alphabetical characters?");
  var addNumeric = window.confirm("Add numeric characters?");
  var addSpecial = window.confirm("Add special characters?");

  // variable for determining password
  var passwordChar = [];

// boolean to concat to new array
  if(addLower){
    passwordChar = passwordChar.concat(lowercase);
  }
  if(addUpper){
    passwordChar = passwordChar.concat(uppercase);
  }
  if(addSpecial){
    passwordChar = passwordChar.concat(special);
  }
  if(addNumeric){
    passwordChar = passwordChar.concat(numeric);
  }

  // for loop to randomize characters 
  var password = "";
  for(var i = 0; i < passlength; i++){
    var random = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[random];
  }

  return password;
}
// call original function
generatePassword();