// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", function(){
    var characterLength = prompt("How Many Characters Would You Like Your Password To Be? (Length: 8-128 characters)")
    var specialCharacters = confirm("Click OK If You Would Like To Include Special Characters (!@#$&*...)")
    var numberCharacters = confirm("Click OK If You Would Like To Include Numbers")
    var lowerCharacters = confirm("Click OK If You Would Like Lowercase Characters")
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);