// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const checkUniquness = function(str){
    //Should return false if charcters are not unique
      for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
          return false;
        }
    }
    return true;
  }


  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    // your solution code here
    const regularAlphabet = "abcdefghijklmnopqrstuvwxyz";
    console.log(input);
    console.log(alphabet);

    //return false if the alphabet is not exactly 26 characters or doesn't exist at all
    if(!alphabet || alphabet.length!=26 || !checkUniquness(alphabet) ){
      return false;
    }


    let outputMessage = "";
    

    
  if(encode===true){
    //loop through the input and use the charcode to get an index for the alphabet
    for (let z = 0; z < input.length; z++){
      //preserve the spaces
      if(input[z]===" "){
        outputMessage += " ";
      }else{
      //console.log(input.charCodeAt(z));
      const swapIndex = input.charCodeAt(z)-97;
      //assign new letter from alphabet to the output message
      outputMessage += alphabet[swapIndex];

      }
    }
    //if decoding a message AKA encode is false
  }else{
    for (let z = 0; z < input.length; z++){
      //preserve the spaces
      if(input[z]===" "){
        outputMessage += " ";
      }else{
      //when it matches that character use the index from the regular alphabet array for new variable
      for (let x = 0; x<alphabet.length;x++){
        if(input[z]===alphabet[x]){
          outputMessage += regularAlphabet[x];
        }
      }


      }
    }

  }
  console.log(outputMessage);
  return outputMessage;
  }




  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
