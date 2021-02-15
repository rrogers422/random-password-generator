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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 userOption()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function userOption(){
  var charCount = prompt("How many characters would you like your password to contain? (8-128)");
 if(charCount < 8 || charCount > 128 ){
   alert("Password must be between 8 and 128 characters");
   return;
 } 
if(isNaN(charCount)=== true){
  alert("Password must contain a Number")
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
  allArrays=allArrays.concat(upperCase);
}
if(checkLowerCase===true){
  allArrays=allArrays.concat(lowerCase);
}
if(CheckNumbers===true){
  allArrays=allArrays.concat(numbers);
}
if(CheckSymbols===true){
  allArrays=allArrays.concat(symbols);
}
return charCount;
};


function chooseChar(array){
  let generateRandom = array[Math.floor(Math.random() * array.length)];
  return generateRandom;
  }


for(var i=0; i< charCount; i++){
  let randomPassword = allArrays[Math.floor(Math.random()* allArrays.length)];
  console.log(randomPassword)
  newPassword.push(randomPassword);
  console.log('newPassword: ', newPassword)
}
return newPassword.join('');



function generatePassword(){
  console.log(pwlength.push(generateRandom))

}
