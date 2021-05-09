// Assignment Code 
function generatePassword() {


  // Variables with prompts here
  var password = alert("Welcome, here is some criteria for your New Password!");
  var passwordLength = prompt("What length from 8 to 128 characters would you like your password to be");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);


  var upper = confirm("Uppercase Letters, yes or cancel?");
  var lower = confirm("Lowercase Letters, yes or cancel?");
  var numeric = confirm("Numbers, yes or cancel?");
  var special = confirm("Special Letters, yes or cancel?");



  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); abcdefghijklmnopqrstuvwxyz
  var Lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  var numbers = "0123456789".split("");
  var specialchar = "+=-_!@#$%^&*".split("");

  var passwordString = "";


  // While loop inserted here

  while (passwordString.length < passwordLength) {

    if (upper) { passwordString += capital[Math.floor(Math.random() * capital.length)] }
    if (lower) { passwordString += Lowercase[Math.floor(Math.random() * Lowercase.length)] }
    if (numeric) { passwordString += numbers[Math.floor(Math.random() * numbers.length)] }
    if (special) { passwordString += specialchar[Math.floor(Math.random() * specialchar.length)] }

  }

  return passwordString;
}


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
