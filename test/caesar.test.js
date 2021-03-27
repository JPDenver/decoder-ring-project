// Write your tests here!
const expect = require('chai').expect;
const caesar = require("../src/caesar");

describe("caesar",()=>{
    it("Should return a string",()=>{
        const input = "Ceasar Shift Test";
        const shift = 10;
        const actual = caesar(input,shift);
        expect(actual).to.be.a('string');

    })
});


describe("caesar",()=>{
    it("Should return a new ciphered string with the letters shifted by the number inputted",()=>{
        const input = "Jeff";
        const shift = 1;
        const expected = "kfgg";
        const actual = caesar(input,shift);
        expect(actual).to.equal(expected);

    })
});


//It returns false if the shift value is equal to 0, 
//less than -25, greater than 25, or not present.
describe("caesar",()=>{
    it("Should return False if shift is zero or <-25 or >25",()=>{
        const input = "Jeff";
        const shift = 31;
        
        const actual = caesar(input,shift);
        expect(actual).to.be.false;

    })
});


//It ignores capital letters. 
//(For example, the results of A Message and a message should be the same.)
describe("caesar",()=>{
    it("Should ignore capital letters and return lowercase results only",()=>{
        const input = "THIS Message";
        const shift = 1;
        const expected = "uijt nfttbhf";
        const actual = caesar(input,shift);
        expect(actual).to.equal(expected);

    })
});


//When encoding, it handles shifts that go past the end of the alphabet. (For example, 
//shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, 
//so that z becomes c.)

describe("caesar",()=>{
    it("Should return a new ciphered where z shifted by 3 wraps around the alphabet and becoms C",()=>{
        const input = "Pizza";
        const shift = 3;
        const expected = "slccd";
        const actual = caesar(input,shift);
        expect(actual).to.equal(expected);

    })
});


//It maintains spaces and other nonalphabetic symbols in the message, 
//before and after encoding or decoding.
describe("caesar",()=>{
    it("Should maintain the spaces in the original message",()=>{
        const input = "Pizza by the slice";
        const shift = 3;
        const actual = caesar(input,shift);
        expect(actual).to.include(" ");

    })
});

//Decoding Messages
describe("ceasar",()=>{
    it("Should decode correctly",()=>{
        const input = "az";
        const shift = 1;
        const expected = "zy";
        const actual = caesar(input,shift,encode=false);
        expect(actual).to.equal(expected); 


    })
})

// else if (letterCode >= 97 && letterCode <=122){
//     const checkLetter = letterCode-97+shift%26+97;
//     if(checkLetter > 96){
//     letter = String.fromCharCode(checkLetter);
//     }else{
//       letter = String.fromCharCode(checkLetter + 26);
//     }
//     }