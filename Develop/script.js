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

// Code starts here
// Prompt is given when user presses "generate password" button

function generatePassword() {
    
    var numChar = window.prompt("Please enter the number of characters you would like your password to be.");
    
// user enters character length to be either less than 8 characters or greater than 128 characters, there will be an alert message which will tell user to try again.
    
    if (numChar < 8 || numChar > 128){
        window.alert("Your password has to be between 8-128 characters. Please try again.");
        return;
    }

    console.log(numChar);
    
    //all the variables

    var inclNums = window.confirm("Do you want any numbers in your password? If yes, press OK, otherwise press Cancel.");
    var specialChar = window.confirm("Do you want any special characters in your password? If yes, press OK, otherwise press Cancel.");
    var lower = window.confirm("Do you want any lower case letters in your password? If yes, press OK, otherwise press Cancel.");
    var upper = window.confirm("Do you want any upper case letters in your password? If yes, press OK, otherwise press Cancel.");

    var lowerChar = ["a,", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCha = [" ", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "}", "|", "~"];
    var result = [];
    var userresult = [];

// if statement based on user's selection

    if (inclNums) {
        result += numbs;
    };

    if (specialChar) {
        result += specialCha;
    };

    if (lower) {
        result += lowerChar;
    };

    if (upperChar) {
        result += upperChar;
    };

    // for loop

    for ( i = 0; i < numChar; i++) {
        userresult += result.charAt(Math.floor(Math.random() * result.length));
    
    }


    return userresult;
};
