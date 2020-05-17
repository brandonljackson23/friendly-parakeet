// Assignment code here
// wrap in writePassword function so we can call it when user clicks generatePassword btn
generatePassword = function() {
  // set up variables for while funtions to check if criteria is met before advancing to next prompt
  var yes = 0;
  var pwdLengthCriteria = 0;
  var lowercaseCriteria = 0;
  var uppercaseCriteria = 0;
  var numberCriteria = 0;
  var specialCharsCriteria = 0;
  // verify that at least one character type has been chosen
  while (pwdLengthCriteria == 0) {
    //prompt user to select length of the password. must be between 8 and 128 characters
    var pwdLength = prompt("How long do you want the password to be?  Enter the number of characters you want (from 8-128.)");
    // verify the lenght meets criteria
    if (pwdLength >= 8 && pwdLength <= 128) {
      pwdLengthCriteria++;
    } 
    else {
      // notify user to select a number that meets criteria and restart pwdLengthCriteria loop
      alert("Please enter a number between 8 and 128.");
    }
  };
  while (yes == 0) {
    while (lowercaseCriteria == 0) {
      var includeLowercase = prompt("Do you want to include lowercase letters? (y/n)");
        includeLowercase = includeLowercase.toLowerCase();

      if (includeLowercase === 'y') {
        yes++;
        lowercaseCriteria++;
      } else if (includeLowercase === 'n') {
        lowercaseCriteria++;
      } else {
        // notify user to select a letter that meets criteria and restart lowercaseCriteria loop
        alert("Please enter either 'y' or 'n'.");
      } 
    };
      
    while (uppercaseCriteria == 0) {
      var includeUppercase = prompt("Do you want to include capital letters? (y/n)");
          includeUppercase = includeUppercase.toLowerCase();

      if (includeUppercase === 'y') {
        yes++;
        uppercaseCriteria++;
      } else if (includeUppercase === 'n') {
        uppercaseCriteria++;
      } else {
        // notify user to select a letter that meets criteria and restart uppercaseCriteria loop
        alert("Please enter either 'y' or 'n'.");
      }  
    };

    while (numberCriteria == 0) {
      var includeNumber = prompt("Do you want to include numbers? (y/n)");
        includeNumber = includeNumber.toLowerCase();

      if (includeNumber === 'y') {
        yes++;
        numberCriteria++;
      } else if (includeNumber === 'n') {
        numberCriteria++;
      } else {
        // notify user to select a letter that meets criteria and restart numberCriteria loop
        alert("Please enter either 'y' or 'n'.");
      }  
    };
    while (specialCharsCriteria == 0) {
      var includeSpecial = prompt("Do you want to include special characters? (y/n)");
      includeSpecial = includeSpecial.toLowerCase();

      if (includeSpecial === 'y') {
        yes++;
        specialCharsCriteria++;
      } else if (includeSpecial === 'n') {
        specialCharsCriteria++;
      } else {
        // notify user to select a letter that meets criteria and restart specialCharsCriteria loop
        alert("Please enter either 'y' or 'n'.");
      }
    };
    // verify that user chose at least one character type and restart character type prompts if not
    if (yes == 0) {
      alert("Please select at least one character type (lowercase letters, capital letters, numbers or special characters.)")
      lowercaseCriteria--;
      uppercaseCriteria--;
      numberCriteria--;
      specialCharsCriteria--;
    }
  };
  // create the password
  function makePwd(pwdLength) {
    var result = '';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var lowercaseCharsLength = lowercaseChars.length;
    var uppercaseChars = lowercaseChars.toUpperCase();
    var uppercaseCharsLength = uppercaseChars.length;
    var numberChars = '0123456789'
    var numberCharsLength = numberChars.length;
    var specialChars = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    var specialCharsLength = specialChars.length;
    // add additional characters shuffling through the different character types until the password length meets the criteria set by user
    for (var i =0; i < pwdLength; i++) {
      // include lowercase letters if user selected lowercase letters
      if (includeLowercase === 'y') {
        result += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseCharsLength));
      }
      // include uppercase letters if user selected capital letters
      if (includeUppercase === 'y') {
        result += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseCharsLength));
      }
      // include numbers if user selected lowercase letters
      if (includeNumber === 'y') {
        result += numberChars.charAt(Math.floor(Math.random() * numberCharsLength));
      }
      // include special characters if user selected lowercase letters
      if (includeSpecial === 'y') {
        result += specialChars.charAt(Math.floor(Math.random() * specialCharsLength));
      }
    }
    return result;
  };
  // if password is too long truncate it to match the length designated by user. then display password to user
  return makePwd(pwdLength / yes).substring(0, pwdLength);
};

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
