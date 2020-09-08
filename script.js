// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("Hello World");
}

function generatePassword() {
  console.log("Generate password HERE");
  var length = Number(
    prompt(
      "How long would you like this password? (Please choose a value from 8-128)"
    )
  );

  console.log("User chose X Length: ", length);

  if (length < 8) {
    alert("Try again, please chose a valid length");
    return;
  }

  if (length > 128) {
    alert("Try again, please chose a valid length");
    return;
  }

  console.log("you passed step 1");

  var numerical = "0123456789";
  var LowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = LowerCase.upperCase;
  var special = "~!@#$%^&*()_+=";
  var chosenCharacters = "";

  var useNumerical = confirm("Would you like to us Numerical characters?");
  var useLowerCase = confirm("Would you like to use Lowercase characters?");
  var useUpperCase = confirm("Would you like to Uppercase characters?");
  var useSpecial = confirm("would you like to use special characters?");

  console.log({ useNumerical, useLowerCase, useUpperCase, useSpecial });

  if (useNumerical) {
    chosenCharacters+= numerical;
  }
  if (useLowerCase) {
    chosenCharacters+= LowerCase;
  }
  if (useUpperCase) {
    chosenCharacters+= upperCase;
  }
  if (useSpecial) {
    chosenCharacters+= special;
  }

//create for loop


  console.warn(chosenCharacters);





}

function randomize(options) {
  options = options.split('');
  var randIndex = Math.floor(Math.random() * options.length);
}

//add event listener to genrerate button
generateBtn.addEventListener("click", writePassword);
