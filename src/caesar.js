// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //If shift if negative, subtract 6 more from a Capital letter

  function caesar(input, shift, encode = true) {
    // your solution code here
    //return false if shift is not valid
    
    if(shift <0){
      return caesar(input, shift+26, encode = true);
    }


    if(!shift || shift < -25 || shift > 25 || shift ===0){
      return false;
    }
    //initialize an output string
    let output = "";
    //Loop through the characters
    for(let i =0;i<input.length;i++){
      //make a varible for each letter
      let letter = input[i];
      //check if the letter is a character in the alphabet
      if(letter.match(/[a-z]/i)){
        //Get the character code
        let letterCode = input.charCodeAt(i);
        // if(letterCode === 32){
        //   letter = String.fromCharCode(32);
        //}
        //Shift the uppercase letters
        if (letterCode >=65 && letterCode <=90){
          letter = String.fromCharCode(((letterCode - 65 + shift)%26)+97);
        }

        //Shift Lowercase Letters
        else if (letterCode >= 97 && letterCode <=122){
          letter = String.fromCharCode(((letterCode-97+shift)%26)+97);
          
          }
          
        


      }
      //Append the shifted letter to the output
      
        output += letter; 
      
    }
    //return the output in lowercase
      console.log(output);
      return output;


  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
