import { checkDigit } from "./checkDidit"
export const isbn13 = (str: string | Array<any> | any) => {

    let isValid = false;
    if (str.length === 13) {

        //split the string to an array
        str = str.split("");
        // 1.loop through Array in the first map and converting string to number | 2 second map multiplies by the weight
        str = str.map((el: any) => parseInt(el)).map((el: any, index: any) => el * (index % 2 == 0 ? 1 : 3));
        //sum up all values and return true if divisible by 10 == 0
        isValid = str.reduce((a: any, b: any) => a + b, 0) % 10 === 0;

        return isValid ? "Valid" : "Invalid";

    } else if (str.length === 10) {

        let counterFake = 10;
        //split the string to an array
        str = str.split("");
        //check if last element  is equal to "X"
        // if true assign 10 to last element in Array
        str[str.length - 1] === "X" ? str[str.length - 1] = 10 : null;
        // convert all to nymber type Number
        str = str.map(Number);
        //map through Array and times by decreasing counter then reduce to get and tota; if total divisible 
        //by ten then we a valid isbn if not we take our operations to the else branch
        if (str.map((el: any) => parseInt(el) * counterFake--).reduce((a: any, b: any) => a + b) % 11 === 0) {
            //removeall commas 
            str = str.join().replace(/,/g, "");
            // Add the prefix "978" to the beginning
            const isbn13Prefix = "978";
            //concat prefix --> 978 and isbn and checkdigit in the two lines below 
            const isbn13 = isbn13Prefix + str.slice(0, 9);
            let checkNumString: string = checkDigit(isbn13);
            return isbn13 + checkNumString;

        } else {
            return "Invalid"
        }
    };

}
