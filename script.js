// Assignment Code
var generateBtn = document.querySelector("#generate");

// Working function
generateBtn.addEventListener('click', function generatePassword(){
  //empty string for pw
  var generatedPassword = '';
  //character vars
  var usedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '0123456789'
  var specials = '!@#$%^&*()+-_=~./><'

  let characterCount = prompt("How many characters do you want in your password?", "16");
  //console.log(characterCount);
  //if charactercount not meet requirements, alert and terminate func
  if (characterCount < 8 || characterCount >= 128) {
    alert("Try again. Type in a value between 8 and 128")
    return
  }
  //characterCount to num from string
  var charsWanted = parseInt(characterCount);

  let lowercaseYOrN = confirm("Do you want lowercase characters?");
  //console.log(lowercaseYOrN)
  //if yes, append them to usedcharacters, else don't
  if (lowercaseYOrN) {
    usedCharacters = usedCharacters.concat(lowerLetters)
  }  
  console.log(usedCharacters)

  let numbersYOrN = confirm("Do you want numbers?");
  //console.log(numbersYOrN)
  if (numbersYOrN) {
    usedCharacters = usedCharacters.concat(numbers)
  }
  console.log(usedCharacters)
  //specials alert
  let specialsYOrN = confirm("Do you want special characters?");
  //console.log(specialsYOrN)
  if (specialsYOrN) {
    usedCharacters = usedCharacters.concat(specials)
  }
  console.log(usedCharacters)
  for(let i = 0; i < charsWanted; i++){
    generatedPassword += usedCharacters.charAt(Math.floor(Math.random() * usedCharacters.length))
  }
  console.log(generatedPassword)
  return generatedPassword
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
