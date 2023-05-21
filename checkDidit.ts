export const checkDigit = (isbn: string) => {
    const digitArray = isbn.split("").map(Number); // Convert ISBN string to an array of digits
    
    // Multiply each digit by its corresponding weight (1 or 3)
    const weightedDigits = digitArray.map((digit: number, index: number) => digit * (index % 2 === 0 ? 1 : 3));
    
    // Calculate the sum of all the weighted digits
    const sum = weightedDigits.reduce((a, b) => a + b);
    
    // Calculate the check digit
    const checkDigit = (10 - (sum % 10)) % 10;
  
    return checkDigit.toString()
    }
