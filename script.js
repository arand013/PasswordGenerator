// Get references to the #generate element and inserted Special Characters
const specialCharacters = "+=-_!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')

// Write password variable to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}


// Assignment Code 
function generatePassword() {


  // Variables with prompts here
  alert("To create new randmom password, select what you want in your New Password.");
  var passwordLength = prompt("Please, type the numbers of characters you'd like your password to be in the space below? (5 to 20 character limit)");
  if (passwordLength === "" || passwordLength === null || passwordLength < 5 || passwordLength > 20) {
    window.alert("Must provide a # between 5 to 20. Please try again.");
    // use return to call it again and stop the rest of this function from running
    return generatePassword();
  }


  var upper = confirm("Do you want Uppercase Letters, Press OK or cancel for NO?");
  var lower = confirm("Do you want Lowercase Letters, Press OK or cancel for NO?");
  var numeric = confirm("Do you want Numbers, Press OK or cancel for NO?");
  var special = confirm("Do you want Special Letters, Press OK or cancel for NO?");

  // Console log info for valaidation
  console.log(passwordLength);
  console.log(upper);
  console.log(lower);
  console.log(numeric);
  console.log(special);


  // Varaiables for all options
  var capital = "";
  var Lowercase = "";
  var numbers = "";
  var specialChar = "";

  //Array with Math functions
  var stringFunction = {
    getcapital: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getLowercase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getnumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getspecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  };

  // If statements, are ensuring prompts are true/false

  // New Variables
  var thePassword = [];
  var finalPass = [];

  // this loop with if statements, push(s) the options to generate a random # together. 
  for (let i = 0; i < parseInt(passwordLength); i++) {
    if (upper === true) {
      capital = stringFunction.getcapital();
      thePassword.push(capital);
    }
    if (lower === true) {
      Lowercase = stringFunction.getLowercase();
      thePassword.push(Lowercase);
    }
    if (numeric === true) {
      numbers = stringFunction.getnumbers();
      thePassword.push(numbers);
    }
    if (special === true) {
      specialChar = stringFunction.getspecialCharacters();
      thePassword.push(specialChar);
    }
  }

  // this loop push(s) that random # to only display the specifed length
  for (let i = 0; i < parseInt(passwordLength); i++) {
    finalPass.push(thePassword[(Math.floor(Math.random() * thePassword.length))])

  }
  // finalPass deletes extra (,'s) with the random #

  return finalPass.join("")

  

}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', (event) => {
  var passwordText = document.querySelector("#password").textContent;

  passwordText.select();
  passwordText.setSelectionRange(0, 20); /* For mobile devices */

  navigator.clipboard.writeText(passwordText);
})
