// Write your tests here!

const { expect } = require("chai");
const polybius = require("../src/polybius");
const caesar = require("../src/polybius");


//When encoding, it translates the letters i and j to 42.
describe("Polybius Square",()=>{
    it("Should return '42' if the encoded letter is i or j",()=>{
        const input = 'i i j j';
        const actual = polybius(input);
        const expected = "42 42 42 42"
        expect(actual).to.equal(expected);

    })
})


//When decoding, it translates 42 to (i/j).
describe("Polybius Square",()=>{
    it("Should return 'i/j' if the encoded number is 42",()=>{
        const input = '42';
        const actual = polybius(input);
        expect(actual).to.equal('i/j');

    })
})

//It ignores capital letters. 
//(For example, the results of A Message and a message should be the same.)
describe("Polybius Square",()=>{
    it("Should return the same for capital and lowercase letters",()=>{
        const input = 'THIS Message';
        const actual = polybius(input);
        expect(actual).to.equal(polybius('this message'));

    })
})

//It maintains spaces in the message, before and after encoding or decoding.
describe("Polybius Square",()=>{
    it("Should maintain spaces in messages in all situations",()=>{
        const input = 'this message has a lot of spaces in it';
        const actual = polybius(input);
        expect(actual).to.include(" ");

    })
})