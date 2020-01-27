var generateBtn = document.querySelector('#generate');
var lowerCaseChars;
var upperCaseChars;
var specialChars;
var numbers;


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

function generatePassword(){
    //
definteCriteraForPassword()
    //

    //

    //
}

function definteCriteraForPassword(){

    //lower case chars
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
    //we need to generate a random number to find a random character
    var randomIndex = Math.floor(Math.random()*lowerCaseChars.length);

    //upper case chars
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    //special chars
    var specialChars = "!@#$5^&*(){}[]:;,.<>".split("");

    //numbers
    var numbers = "0123456789".split("");

}


// all of the above code is what Dane covered at the end of class Friday. I'm clueless on what to do next as I have written and tried various code snippets with none of them working, so I need help, please!

