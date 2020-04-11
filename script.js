// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomFunction = {
  special: getSpecial,
  number: getNumbers,
  upper: getUpper,
  lower: getLower  
};

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var characterLength = prompt("How Many Characters Would You Like Your Password To Be? (Length: 8-128 characters)");
  var charaterInput = parseInt(characterLength)
  if (charaterInput < 8 || characterLength > 128) {
    alert("Please Select a Valid Character Amount")
  }
  else {
    var specialCharacters = confirm("Click OK If You Would Like To Include Special Characters (!@#$%^&*(){}[]+<>/,.?)");
      if (specialCharacters === true){
        var specialInput = specialCharacters;
      }
      else{
        var noSpecialInput = specialCharacters;
      }

    var upperCharacters = confirm("Click OK If You Would Like Uppercase Characters");
      if (upperCharacters === true){
        var upperInput = upperCharacters;
      }
      else{
        var noUpperInput = upperCharacters;
      }
    
    var lowerCharacters = confirm("Click OK If You Would Like Lowercase Characters");
    if (lowerCharacters === true){
      var lowerInput = lowerCharacters;
    }
    else{
      var noLowerInput = lowerCharacters;
    }
    
    var numberCharacters = confirm("Click OK If You Would Like To Include Numbers");
    if (numberCharacters === true){
      var numberInput = numberCharacters;
    }
    else{
      var noNumberInput = numberCharacters;
    }
  }
  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function for generating password
function generatePassword() {

}

// function for specialCharacter 
function getSpecial() {
  var special = '!@#$%^&*(){}[]+<>/,.?';
  return special[Math.floor(Math.random() * special.length)];
}

// function for numberCharacters 
function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// function for upperCharacters
function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// function for lowerCharacters  
function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
