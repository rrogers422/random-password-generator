// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v','w','x','y','z']
var numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '@', '#', '$', '%','^', '&', '*', '(', ')']
var charCount;
var pwlength =[]
let generateRandom;

// Write password to the #password input
function writePassword() {
  var charCount = userOption()
  var password = generatePassword(charCount);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 console.log(charCount);
}

//calls functions//

function chooseChar(array){
  let generateRandom = array[Math.floor(Math.random() * array.length)];
  return generateRandom;
  }



function userOption(){
  var charCount = prompt("How many characters would you like your password to contain? (8-128)");
  console.log(typeof charCount);
 if(isNaN(charCount)=== true){
  alert("Password must contain a Number")
  return;
 }
 if(charCount < 8 || charCount > 128 ){
   alert("Password must be between 8 and 128 characters");
   return;

}
var checkUpperCase = confirm("Do you want a Uppercase letter?");
var checkLowerCase = confirm("Do you want a Lowercase letter?");
var CheckNumbers = confirm("Do you want a number?");
var CheckSymbols = confirm("Do you want to add a symbol?");
if( checkUpperCase !== true && checkLowerCase !== true && CheckNumbers !== true && CheckSymbols !== true ){
  alert("Must contains atleast 1 special character or numnber")
}
if(checkUpperCase===true){
  pwlength=pwlength.concat(upperCase);
}
if(checkLowerCase===true){
  pwlength=pwlength.concat(lowerCase);
}
if(CheckNumbers===true){
  pwlength=pwlength.concat(numbers);
}
if(CheckSymbols===true){
  pwlength=pwlength.concat(symbols);
}
return charCount;
};

function generatePassword(charCount){

  var newPassword =[]
  for(var i=0; i< charCount; i++){
   let randomPassword = pwlength[Math.floor(Math.random()* pwlength.length)];
   console.log(randomPassword)
  newPassword.push(randomPassword);
  console.log('newPassword:', newPassword)
  }
  return newPassword.join('');
  
  }
  generateBtn.addEventListener("click", writePassword);
  //generates new random password//

  