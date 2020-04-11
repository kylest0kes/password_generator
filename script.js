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
  if (characterLength === "") {
    alert("Please Select a Character Amount")
  }
  else if (characterLength === null) {
    alert("Please Select a Character Amount")
  }
  else{
    var characterInput = parseInt(characterLength)
    if (characterInput < 8 || characterInput > 128) {
      alert("Please Select a Valid Character Amount")
    }
    else {
      var specialCharacters = confirm("Click OK If You Would Like To Include Special Characters (!@#$%^&*(){}[]+<>/,.?)");
      var upperCharacters = confirm("Click OK If You Would Like Uppercase Characters");
      var lowerCharacters = confirm("Click OK If You Would Like Lowercase Characters");
      var numberCharacters = confirm("Click OK If You Would Like To Include Numbers");
    }
  }
  if(specialCharacters === false && upperCharacters === false && lowerCharacters === false && numberCharacters === false) {
    alert("Please Select At Least One Characteristic")
  }
  else{
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  
  
  

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
