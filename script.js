// Assignment Code
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener('click', function generatePassword(){
  generatedPassword = '';
  const usedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

  //charactercount alert
  let characterCount = prompt("How many characters do you want in your password?", "16");
  console.log(characterCount);
  //if charactercount not meet requirements, alert and terminate func
  if (characterCount < 8 || characterCount >= 128) {
    alert("Try again. Type in a value between 8 and 128")
    return
  }
  //lowercase alert
  let lowercaseYOrN = confirm("Do you want lowercase characters?");
  console.log(lowercaseYOrN)
  //if yes, append lowers to usedcharacters, else don't
  if (lowercaseYOrN) {
    usedCharacters.push(lowerLetters)
  }
  //numbers alert
  let numbersYOrN = confirm("Do you want lowercase characters?");
  console.log(numbersYOrN)
  if (numbersYOrN) {
    usedCharacters.push(numbers)
  }
  //specials alert
  let specialsYOrN = confirm("Do you want lowercase characters?");
  console.log(specialsYOrN)
  if (specialsYOrN) {
    usedCharacters.push(numbers)
  }

});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
