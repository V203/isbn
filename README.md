[![Node.js CI](https://github.com/V203/isbn/actions/workflows/node.js.yml/badge.svg)](https://github.com/V203/isbn/actions/workflows/node.js.yml)

# International Standard Book Numbers

## Installation
-----

To install and run this TypeScript project on Linux, Windows, or Mac, follow these steps:

1. Make sure you have Node.js and npm installed on your system. You can download and install them from the official Node.js website: [https://nodejs.org](https://nodejs.org)

2. Fork the repository by clicking the "Fork" button on the GitHub repository page: [https://github.com/V203/isbn](https://github.com/V203/isbn)

3. Open the terminal or command prompt on your system.

4. Clone the forked repository to your local machine by running the following command:
   ```bash
   git clone https://github.com/YourGitHubUsername/isbn
   ```

Navigate into the project directory:   
```bash
   cd isbn
``` 

Install project dependencies using npm:
```bash
npm install
```
Build and compile the project using TypeScript:
```bash
tsc -w
```
Run the project using ts-node:
```bash
ts-node index.ts
```
## Running the Test
Simply after you have followed all the instructions above just run the command below to see the test results.
-----
```bash npm test ```


## Space and time complexity
-----
isbn13 function:

If the input str has a length of 13, it performs operations to validate an ISBN-13 number.
It splits the string into an array, converts elements to numbers, multiplies them by weights, and calculates the sum.
It checks if the sum is divisible by 10 to determine if the ISBN-13 is valid.
Returns "Valid" if the ISBN-13 is valid, otherwise returns "Invalid".
If the input str has a length of 10, it performs operations to convert it to an ISBN-13 number.
It checks if the last element is "X" and assigns 10 to it if true.
It converts the elements to numbers, maps and reduces them to calculate a total, and checks if it's divisible by 11.
If the operations above result in a valid ISBN-10, it converts it to an ISBN-13 by adding a prefix and check digit.
Returns the converted ISBN-13 if valid, otherwise returns "Invalid".
checkDigit function:

Given an ISBN string, it converts it to an array of digits.
It multiplies each digit by its corresponding weight (1 or 3).
Calculates the sum of all the weighted digits.
Calculates the check digit by subtracting the sum from the nearest multiple of 10.
Returns the check digit as a string.
The time complexity of the code is O(max(n, m)), where n is the length of the input string when str.length === 13, and m is the length of the input string when str.length === 10. This accounts for the operations performed in the code.

The space complexity of the code is also O(max(n, m)), as it depends on the input and intermediate data structures created during execution. This includes the arrays created by splitting the string and other variables used in the code.
