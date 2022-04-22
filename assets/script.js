// Assignment code here
const UppercaseCharCodes = arrayFromLowToHigh(65,90)
const LowercaseCharCodes = arrayFromLowToHigh(97,122)
const SpecialCharacterCharCode = arrayFromLowToHigh(33,47)
.concat(arrayFromLowToHigh(58,64))
.concat(arrayFromLowToHigh(91,96))
.concat(arrayFromLowToHigh(123,126))
const NumberCharCode=arrayFromLowToHigh(48,57)


//function array
function arrayFromLowToHigh(low,high){
  const array =[]
  for (let i = low; i <=high; i++){
    array.push(i)
  }
  return array
}


//password function 
var PasswordLength = PasswordLengthOption();
includeLowercaseOption()
const passwordCharacters = []
for (let i = 0; <PasswordLength;i++){
  const CharacterCode = charCodes[Math.floor(Math.random *charCodes.length)]
  passwordCharacters.push
  (String.fromCharCode(CharacterCode))
}
return passwordCharacters.join('')}


function generatePassword()
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