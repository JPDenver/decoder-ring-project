// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


// const caesarModule = (function () {
//   // you can add any code you want within this function scope
//     let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
//     normalAlphabet = normalAlphabet.split('');



const caesarModule = (function () {
  // you can add any code you want within this function scope


  function caesar(input, shift, encode = true) {
    // your solution code here
    //return false if shift is not valid
    
    // if(shift <0){
    //   return caesar(input, shift+26, encode = true);
    // }
    
    if(!shift || shift < -25 || shift > 25 || shift ===0){
      return false;
    }
    //initialize an output string
    let output = "";


    //DECODING A MESSAGE
    if(encode===false){
      
      for(let i =0;i<input.length;i++){
        //make a varible for each letter
        let letter = input[i];
        //check if the letter is a character in the alphabet
        if(letter.match(/[a-z]/i)){
          //Get the character code
          let letterCode = input.charCodeAt(i);
  
          //Shift the uppercase letters
          if (letterCode >=65 && letterCode <=90){
            letter = String.fromCharCode(((letterCode - 65 - shift)%26)+97);
          }
  
          //Shift Lowercase Letters
          else if (letterCode >= 97 && letterCode <=122){
            const checkLetter = letterCode-97 - shift%26+97;
            if(checkLetter > 96){
            letter = String.fromCharCode(((letterCode-97 - shift)%26)+97);
            }else{
              letter = String.fromCharCode(((letterCode-97 - shift)%26)+123)
            }
            }
            
        }
        //Append the shifted letter to the output
          output += letter; 

        
      }
      return output;

      //ENCODING A message
    }else{
      
    //Loop through the characters
    for(let i =0;i<input.length;i++){
      //make a varible for each letter
      let letter = input[i];
      //check if the letter is a character in the alphabet
      if(letter.match(/[a-z]/i)){
        //Get the character code
        let letterCode = input.charCodeAt(i);

        //Shift the uppercase letters
        if (letterCode >=65 && letterCode <=90){
          letter = String.fromCharCode(((letterCode - 65 + shift)%26)+97);
        }

        //Shift Lowercase Letters
        else if (letterCode >= 97 && letterCode <=122 && shift > 0){
          letter = String.fromCharCode(((letterCode-97+shift)%26)+97);
          
          }else if(letterCode >= 97 && letterCode <=122 && shift < 0){
                const checkLetter = letterCode-97+shift%26+97;
                if(checkLetter > 96){
                letter = String.fromCharCode(checkLetter);
                }else{
                  letter = String.fromCharCode(checkLetter + 26);
                }
          }
          
      }
      //Append the shifted letter to the output
        output += letter; 
      
    }
    //return the output in lowercase
      console.log(output);
      return output;

  }
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
