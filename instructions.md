# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria DONE

WHEN prompted for password criteria
THEN I select which criteria to include in the password DONE

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


psuedo code for hw 3
// you'll need to return something
  // if they fail any of the below criteria, it should return nothing, '', null
  // CODE GOES BELOW HERE
  // 1. variable for storing characterLength and prompt the user
        // 1a. Now I have character length, how do I prevent less than 8 or more than 128 characters?
  // 2. 4 variables for special characters, numerics, lowercase, and uppercase confirm
        // 2a. At least one has to be true
        // 2b. If at least one is true, make the password, else start over
  // 3. Finally generate the password
        // numbers 0-9
        // letters a-z, A-Z
        // (between double quotes) " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        // hint hint how do we make lists in Javascript? Arrays
        // 3a. Once you've gotten what characters they want, make one big list with those characters. Shove valid ones into one big list
        // You'll need the length of that list
        // randomly pick from that list, for the number of characters you're generating
        // Ex. Employee wants a password of 10 characters. All data types valid.
        // Put them in list, grab length, generate random number between 0 and 1 less than length
        // shove that character into new list
        // keep repeating (hint what do we do to repeat in Javascript?) for loop
        // once you've reached end of for loop (character length), the new list you shoved the characters in should be length user chose.
        // then display that to the user.
