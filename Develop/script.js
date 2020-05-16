// Assignment code here

var lowercaseMin = 0;
var lowercaseMax = 0;
var uppercaseMin = 0;
var lowercaseMax = 0;
var specialMin = 0;
var uppercaseMax = 0;
var numberMin = 0;
var numberMax = 0;

var passLength = prompt("How long do you want the password to be?  Enter the number of characters you want (from 8-128.)");

if (passLength >= 8 && passLength <= 128) {
} 
else {
  alert("Please enter a number between 8 and 128.");
}

var includeLowercase = prompt("Do you want to include lowercase letters? (y/n)");
  includeLowercase = includeLowercase.toLowerCase();

if (includeLowercase === 'y') {

  lowercaseMin = 97;
  lowercaseMax = 122;

} else if (includeLowercase === 'n') {
    
  lowercaseMin = 127;
  lowercaseMax = 0;
  
} else {
    alert("Please enter either 'y' or 'n'.");
}    

var includeUppercase = prompt("Do you want to include capital letters? (y/n)");
    includeUppercase = includeUppercase.toLowerCase();

if (includeUppercase === 'y') {

  uppercaseMin = 65;
  uppercaseMax = 90;

} else if (includeUppercase === 'n') {

  uppercaseMin = 127;
  uppercaseMax = 0;

} else {
alert("Please enter either 'y' or 'n'.");
}


var includeSpecial = prompt("Do you want to include special characters? (y/n)");
includeSpecial = includeSpecial.toLowerCase();

if (includeSpecial === 'y') {

  specialMin = 58;
  specialMax = 126;

} else if (includeSpecial === 'n') {

  specialMin = 127;
  specialMax = 0;

} else {
  alert("Please enter either 'y' or 'n'.");
}
 
var includeNumber = prompt("Wo you want to include numbers? (y/n)");
  includeNumber = includeNumber.toLowerCase();

if (includeNumber === 'y') {

  numberMin = 48;
  numberMax = 57;

} else if (includeNumber === 'n') {
  
  numberMin = 127;
  numberMax = 0;

} else {
  alert("Please enter either 'y' or 'n'.");
}
      

    
  

  function generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    let ascii_low = 48;
    let ascii_high = 126;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
  }

  function generate() {
    return generate_random_string(passLength)
  }

  console.log("password: " + generate())
  console.log("lowercaseMin: " + lowercaseMin)
  console.log("lowercaseMax: " + lowercaseMax)
  console.log("uppercaseMin: " + uppercaseMin)
  console.log("uppercaseMax: " + uppercaseMax)
  console.log("specialMin: " + specialMin)
  console.log("specialMax: " + specialMax)
  console.log("numberMin: " + numberMin)
  console.log("numberMax: " + numberMax)




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
