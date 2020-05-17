// Assignment code here
var yes = 0;

var pwdLength = prompt("How long do you want the password to be?  Enter the number of characters you want (from 8-128.)");

if (pwdLength >= 8 && pwdLength <= 128) {
} 
else {
  alert("Please enter a number between 8 and 128.");
}

var includeLowercase = prompt("Do you want to include lowercase letters? (y/n)");
  includeLowercase = includeLowercase.toLowerCase();

if (includeLowercase === 'y') {
  yes++;
} else if (includeLowercase === 'n') {
} else {
  alert("Please enter either 'y' or 'n'.");
}   

var includeUppercase = prompt("Do you want to include capital letters? (y/n)");
    includeUppercase = includeUppercase.toLowerCase();

if (includeUppercase === 'y') {
  yes++;
} else if (includeUppercase === 'n') {
} else {
  alert("Please enter either 'y' or 'n'.");
}  

var includeNumber = prompt("Wo you want to include numbers? (y/n)");
  includeNumber = includeNumber.toLowerCase();

if (includeNumber === 'y') {
  yes++;
} else if (includeNumber === 'n') {
} else {
  alert("Please enter either 'y' or 'n'.");
}  

var includeSpecial = prompt("Do you want to include special characters? (y/n)");
includeSpecial = includeSpecial.toLowerCase();

if (includeSpecial === 'y') {
  yes++;
} else if (includeSpecial === 'n') {
} else {
  alert("Please enter either 'y' or 'n'.");
}

function makePwd(pwdLength) {
    var result = '';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var lowercaseCharsLength = lowercaseChars.length;
    var uppercaseChars = lowercaseChars.toUpperCase();
    var uppercaseCharsLength = uppercaseChars.length;
    var numberChars = '0123456789'
    var numberCharsLength = numberChars.length;
    var specialChars = '`~!@#$%^&*()-_=+[{]}\|;:,<.>/?';
    var specialCharsLength = specialChars.length;

    for (var i =0; i < pwdLength; i++) {
      if (includeLowercase === 'y') {
        result += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseCharsLength));
      }
      if (includeUppercase === 'y') {
        result += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseCharsLength));
      }
      if (includeNumber === 'y') {
        result += numberChars.charAt(Math.floor(Math.random() * numberCharsLength));
      }
      if (includeSpecial === 'y') {
        result += specialChars.charAt(Math.floor(Math.random() * specialCharsLength));
      }
    }
    return result;
}

console.log(makePwd(pwdLength / yes).substring(0, pwdLength));

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
