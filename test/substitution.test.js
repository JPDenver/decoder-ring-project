// Write your tests here!
const expect = require('chai').expect;
const substitution = require("../src/substitution");



//It returns false if the given alphabet isn't exactly 26 characters long.
describe("substitution",()=>{
    it("Should return false if the alphabet isn't 26 characters long",()=>{
        const input = "Whatever";
        const alphabet = "avlakdfji";
        const actual = substitution(input,alphabet);
        expect(actual).to.be.false;
        
    })
})



//It correctly translates the given phrase, based on the alphabet given to the function.
describe("substitution",()=>{
    it("should correctly translate a given phrase based on the alphabet",()=>{
        const input = "jeff";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const expected = "uknn";
        const actual = substitution(input,alphabet);
        expect(actual).to.equal(expected);
    })
})



//It returns false if there are any duplicate characters in the given alphabet.
describe("substitution",()=>{
    it("should return false if there are any duplicate characters in the given alphabet",()=>{
        const input = "Whatever";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(input,alphabet);
        expect(actual).to.be.false;
    })
})



//It maintains spaces in the message, before and after encoding or decoding.
describe("substitution",()=>{
    it("should maintain spaces in the messages when encoding",()=>{
        const input = "this has spaces";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input,alphabet);
        expect(actual).to.include(" ");
    })
})

describe("substitution",()=>{
    it("should maintain spaces in the messages when decoding",()=>{
        const input = "djbr jpr rtpmkr";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input,alphabet, encode = false);
        expect(actual).to.include(" ");
    })
})




//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
describe("Substitution",()=>{
    it("should ignore capital letters",()=>{
        const input = "JEFF";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input,alphabet);
        const input2 = "jeff";
        const expected = substitution(input2,alphabet);
        expect(actual).to.equal(expected);
    })
})