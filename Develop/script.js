//All getFunctions have Charcode in which im retrieving the numbers, lowercase, and uppercase
function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}
function getRandomSymbol () {
  const specialCharacters = [
    '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_', '.'
    ];
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}
console.log(getRandomSymbol(), getRandomNumber(),getRandomLower(),getRandomUpper())

function getPasswordConditions (){
//All the questions needed for users
let confirmUniqueCharacters = confirm("Click ok to add special characters")

let confirmLowerCase = confirm("Click ok to add lowercase letters")

let confirmUpperCase = confirm("Click ok to add UPPERCASE LETTERS")

let confirmNumbers = confirm("Click ok to add numbers")

let passwordLength = parseInt(
  prompt("How long would you like you new password"));
}
















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
