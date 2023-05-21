import assert from "assert";
import { describe, it } from "mocha";
import { isbn13 } from "../isbn13"
import { checkDigit } from "../checkDidit";

describe("ISBN test's", () => {
    it("The isbn number 9780316066525 should return Valid.", () => {

        let result: string = "Valid";

        assert.equal(isbn13('9780316066525'), result);
    })

    it("The isbn number 9783866155237 should return Valid.", () => {

        let result = "Valid";

        assert.equal(isbn13('9783866155237'), result);
    })

    it("The isbn number 9780345453747 should return Valid.", () => {

        let result: string = "Valid";

        assert.equal(isbn13('9780345453747'), result);
    })

    it("The isbn number 031606652X should return Invalid.", () => {

        let result: string = "Invalid";

        assert.equal(isbn13('031606652X'), result);
    })

    it("The isbn number 9783876155237 should return Invalid.", () => {

        let result: string = "Invalid";

        assert.equal(isbn13('9783876155237'), result);
    })

    it("The isbn number 0345453747 should return Invalid.", () => {

        let result: string = "Invalid";

        assert.equal(isbn13('0345453747'), result);
    })

    it("The isbn number 0316066524 should return 9780316066525.", () => {

        let result: string = "9780316066525";

        assert.equal(isbn13('0316066524'), result);
    })

    it("The isbn number 3866155239 should return 9783866155237.", () => {

        let result: string = "9783866155237";

        assert.equal(isbn13('3866155239'), result);
    })

    it("The isbn number 817450494X should return 9788174504944.", () => {

        let result: string = "9788174504944";

        assert.equal(isbn13('817450494X'), result);
    })



});

describe("ISBN check digit tests",()=> {
    it("The function 'checkDigit' passed in with 3866155239 should return 2",()=> {
        let result = checkDigit("3866155239")
        assert.equal(2,result);

    });

    it("The function 'checkDigit' passed in with 0316066524 should return 9",()=> {
        let result = checkDigit("0316066524")
        assert.equal(9,result);

    });

    it("The function 'checkDigit' passed in with 9992158107 should return 1",()=> {
        let result = checkDigit("9992158107")
        assert.equal(1,result);

    });

    it("The function 'checkDigit' passed in with 9971502100 should return 4",()=> {
        let result = checkDigit("9971502100")
        assert.equal(4,result);

    });

    it("The function 'checkDigit' passed in with 9604250590 should return 0",()=> {
        let result = checkDigit("9604250590")
        assert.equal(0,result);
    });
})
