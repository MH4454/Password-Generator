// Symbols
const symbolsChar = [
'@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

// Numbers
const numbersChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lowercase characters
const lowerCaseChar = [
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Uppercase characters
const upperCaseChar = [
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

function generatePassword(){
  // Determines the length of the password
  let passwordlength = parseInt(prompt("How long would you like your password"))
  // The if statements filter out incorrect values
   if (isNaN(passwordlength) === true) {
  alert('Please provide length as a number');
  return;
  }
  if (passwordlength > 128 || passwordlength < 8){
    alert("Please keep the length between 8 and 128");
    return;
  }
  //prompts the user to with the avaliable characters
  let symbolQuestion = confirm("Would you like to add symbols?");
  let numberQuestion = confirm("Would you like to add numbers?");
  let lowerQuestion = confirm("Would you like to add lower case letters?");
  let upperQuestion = confirm("Would you like to add UPPERCASE letters?");
  
  if (symbolQuestion === false && numberQuestion === false
     && lowerQuestion === false && upperQuestion === false){
       alert("Dude I need to make a password out of something.");
       return; 
      }
  let newPassword = [];
  // These if statements concat the chosen characters
  if (symbolQuestion) {
    newPassword = newPassword.concat(symbolsChar);
  }  
  if (numberQuestion) {
    newPassword = newPassword.concat(numbersChar);
  } 
  if (lowerQuestion) {
    newPassword = newPassword.concat(lowerCaseChar);
  }
  if (upperQuestion) {
    newPassword = newPassword.concat(upperCaseChar);
  };
  console.log(newPassword)
  let password = "";
  
/*This for loop runs amount (times the password length)
 the random number fuction generates (times the newpassword arr) */
  for (var i = 0; i < passwordlength; i++) {
    let randomCharacter = Math.floor(Math.random() * newPassword.length);
    password += newPassword[randomCharacter]
  } 
  return password;
};
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