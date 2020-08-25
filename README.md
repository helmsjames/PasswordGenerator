# PasswordGenerator
# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
textarea (display only)
generateBtn (click only)
  if I click on the generateBtn it is going to prompt me for
    1-number of chars
      I can input 8-128
      Then validate whether I have less than 8 and more than 128
    2-uppercase
      it checks to see if i want uppercase. Likely a boolean input
    3-lowercase
      it checks to see if i want lowercase. Likely a boolean input
    4-special chars
      it checks to see if I want special chars. Likely a boolean input
    5-numbers
      it checks to see if I want to use numbers

    Based on my responses to the above questions, generates the password  


```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
*create event listener that hooks to btn click
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
*create prompt asking for password length
THEN I choose a length of at least 8 characters and no more than 128 characters
*select at least 8 up to and including 128 and no more than 128
WHEN prompted for character types to include in the password
*create a prompt asking for character types
THEN I choose lowercase, uppercase, numeric, and/or special characters
*create radio selection of lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
*set variable for answer(s)
THEN my input should be validated and at least one character type should be selected
*?
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
*store the password in a variable
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*create temporarily write to the page what the password was that was genergated
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

