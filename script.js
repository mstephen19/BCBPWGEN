// Assignment Code

//generate btn
var generateBtn = document.querySelector("#generate");

// Working function
generateBtn.addEventListener('click', function generatePassword(){
  //empty string for pw to go in
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
  // NOTE: I got regex help for this part from https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
  // if contains letters
  if (/^[a-zA-Z]+$/.test(characterCount)) {
    alert("Please enter a number.")
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
  let specialsYOrN = confirm("Do you want special characters?");
  //console.log(specialsYOrN)
  if (specialsYOrN) {
    usedCharacters = usedCharacters.concat(specials)
  }
  //using charAt since didn't make it array
  console.log(usedCharacters)
  for(let i = 0; i < charsWanted; i++){
    generatedPassword += usedCharacters.charAt(Math.floor(Math.random() * usedCharacters.length))
  }

  //console.log(generatedPassword)
  //pass generated state
  document.querySelector("#password").style.background = "#FF7878";
  document.querySelector("#password").style.color = "hsl(0, 0%, 100%)";
  document.querySelector("#password").value = "Password generated!";
  //display password finally
  setTimeout(function(){
    document.querySelector("#title").innerHTML = "Click the password to copy it!";
    document.querySelector("#password").style.background = "#CEE5D0";
    document.querySelector("#password").style.color = "hsl(206, 17%, 28%)";
    document.querySelector("#password").value = generatedPassword;
  }, 600);
  return generatedPassword
});

//copy the password in one click
document.getElementById('password').addEventListener('click', function(){
  document.getElementById('password').select();
  //i know execcommand is deprecated but idk how else to do this tbh
  document.execCommand('copy');
  document.querySelector('h3').style.opacity = "100"
  setTimeout(function(){document.querySelector('h3').style.opacity = "0";}, 1000);
})


/* don't need these tbh
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/