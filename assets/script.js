//Assignment code here
const UppercaseCharCodes = arrayFromLowToHigh(65,90)
const LowercaseCharCodes = arrayFromLowToHigh(97,122)
const SpecialCharacterCharCode = arrayFromLowToHigh(33,47)
const NumberCharCode=arrayFromLowToHigh(48,57)
.concat(arrayFromLowToHigh(58,64))
.concat(arrayFromLowToHigh(91,96))
.concat(arrayFromLowToHigh(123,126))


//function array
function arrayFromLowToHigh(low,high){
  const array =[]
  for (let i = low; i <=high; i++){
    array.push(i)
  }
  return array
}

function generatePassword(){
  let selected = ""
  let charCodes = null

  function PasswordLengthOption(){
    const PasswordLength = prompt('Enter password length (Mininmum characters 8 maxium characters 128');
    if (PasswordLength <= 7){
      window.alert('Try again, the number was '+PasswordLength +', please enter a number between 8 and 128')
      return PasswordLengthOption();
    }if (PasswordLength >=129){
      window.alert('Try again, the number was '+passwordLength +',please enter a number between 8 and 128');
    return PasswordLengthOption();
  }
  else{
    console.log(PasswordLength)
    return PasswordLength;
     }
  }
  //LowercaseCharcodes
  function includeLowercaseOption(){
    var includeLowercase = prompt('Would you like to use lowercase characters in your password? Type 1 for yes or 2 for No');
  includeLowercase =parseInt (includeLowercase);
    switch(includeLowercase){
      case 1:
        charCodes = LowercaseCharCodes;
        selected = selected.concat('Lowercase Characters')
        includeLowercaseOption();
        break;
        case 2:
          includeLowercaseOption();
          break;
        default:
          window.alert("Invalid option typed, please try again.");
          includeLowercaseOption
          break;
    }
  }
//UppercaseCharCodes
function includeUppercaseoption(){
  var includeUppercaseoption = prompt('Would you like to use uppercase characters in your password? Type 1 for yes or 2 for No');
includeUppercase =parseInt (includeLowercase);
  switch(includeUppercaseoption){
    case 1:
      charCodes = UppercaseCharCodes;
      selected = selected.concat('Uppercase Characters')
      includeUppercaseOption();
      break;
      case 2:
        includeUppercaseOption();
        break;
      default:
        window.alert("Invalid option typed, please try again.");
        includeUppercaseOption
        break;
  }
}
//SpecialCharactersCharCodes
function SpecialCharacterOption(){
  var includeSpecialCharacter = prompt('Would you like to use Special Character in your password? Type 1 for yes or 2 for No');
  includeSpecialCharacter =parseInt (includeSpecialCharacter);
  switch(includeSpecialCharacter){
    case 1:
        charCodes = charCodes.concat(SpecialCharacterCharCode);
        selected = selected.concat(',SpecialCharacterOption')
        includeNumbersOption();
        break;
    case 2:
        includeNumbersOption();
        break;
      default:
        window.alert("Invalid option typed, please try again.");
        SpecialCharacterOption();
        break;
  }
}
//NumbersCharcodes
function includeNumbersOption(){
  var includeNumbersOption = prompt('Would you like to use Special Character in your password? Type 1 for yes or 2 for No');
  includeNumbers =parseInt (includeNumbers);
  switch(includeNumbers){
    case 1:
         charCodes = charCodes.concat(NumberCharCode);
         selected = selected.concat(',and Numbers')
         window.alert("Your created password will be" +passwordLength +"characters long. Consisting of" +selected);
         break;
      
      case 2:
        if(charCodes === null){
        window.alert("Please select options for your password.");
        return includeLowercaseOption();
        }else;
        window.alert("Your created password will be" +passwordLength +"characters long. Consisting of" +selected);
         break;
      default:
        window.alert("Invalid option typed, please try again.");
        includeNumbersOption();
        break;
  }
}
//password function 
var PasswordLength = PasswordLengthOption();
includeLowercaseOption()
const passwordCharacters = []
for (let i = 0; i < PasswordLength; i++) {
  const CharacterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
  passwordCharacters.push(String.fromCharCode(CharacterCode))
}
return passwordCharacters.join('')}



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