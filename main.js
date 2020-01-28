var generateBtn = document.querySelector('#generate');
var lowerCaseChars;
var upperCaseChars;
var specialChars;
var numbers;


function writePassword() {
    var length = prompt('select at least 8 up to and including 128 and no more than 128');
    if(isNaN(parseInt(length)) || length < 8 || length > 128) {
        //We have bad input
        alert('You did not give us good input');
        return;
    }

    //Here we actually have a valid number
    var upperChars = confirm('Would you like to include: Uppercase y/n');
    var lowerChars = confirm('Would you like to include: Lowercase y/n');
    var symbols = confirm('Would you like to include: Symbols y/n');
    var numbers = confirm('Would you like to include: Numbers y/n'); 
    console.log(upperChars, lowerChars, symbols, numbers)

    //Right here if we make it this far.....WE shold kow a correct length and all the chars needed
    var characterSetArray = generateCharacterSetArray(upperChars, lowerChars, symbols, numbers);
    var password = generatePassword(length, characterSetArray);
    console.log(password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
//['0123456789', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'] => '0123456789'.split() => [0, 1, 2, 3,...]
function generatePassword(len, characterArray){
   //We need to choose a random TYPE first
   var password =  '';
   while(password.length !== parseInt(len)) {
    var characterSet = characterArray[Math.floor(Math.random() * characterArray.length)]

   //Then from the random type choose a random char
   var char = characterSet[Math.floor(Math.random() * characterSet.length)]
    password+=char;
  
}
return password;
}

function generateCharacterSetArray(useUpper, useLower, useSymbols, useNumbers){
    var results = [];
    //lower case chars
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    if(useLower) {
        results.push(lowerCaseChars);
    }
    //upper case chars
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(useUpper) {
        results.push(upperCaseChars);
    }
    //special chars
    var specialChars = "!@#$5^&*(){}[]:;,.<>"
    if(useSymbols) {
        results.push(specialChars);
    }
    //numbers
    var numbers = "0123456789"
    if(useNumbers) {
        results.push(numbers);
    }

    return results;
}


// all of the above code is what Dane covered at the end of class Friday. I'm clueless on what to do next as I have written and tried various code snippets with none of them working, so I need help, please!

