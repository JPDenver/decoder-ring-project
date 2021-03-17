// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here



    

    //Use this getKeyByValueFunction Later
    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
    
    // Make one long object that has the letters as keys and the numbers as values
    const gridObject = {'a':'11','b':'21','c':'31','d':'41','e':'51','f':'12','g':'22','h':'32','i':'42','j':'42',
  'k':'52','l':'13','m':'23','n':'33','o':'43','p':'53','q':'41','r':'24','s':'34','t':'44','u':'54',
    'v':'15','w':'25','x':'35','y':'45','z':'55'," ":" "};
    //Initialize the output string
    let output ="";
    //switch it to all lower case
    input = input.toLowerCase();


    //This if will tell you if you are dealing with numbers that you have
    //to turn in to letters

    //Initialize a variable to use to lookup correspinding letters
    let letterKey = "";
    
    
    if(input[0]==='1'||input[0]==='2'||input[0]==='3'||input[0]==='4'||input[0]==='5'){
      console.log("This should work");
      
      //Check if there is an odd number of numbers
      let oddCheck = input.split(' ').join('');
      if(oddCheck.length%2!=0){
        return false;
      }

      //Loop through the input by letter
      for(let j = 0; j<input.length; j++){
        //Check for spaces and add those to the output directly
        if (input[j]===" "){
          output += " ";
        //If it is a letter
        }else{
          //add the numbers individually to the letterkey variable
          letterKey += input[j];
          //Make sure you return a string that represents i/j for 42
          if(letterKey==="42"){
            output += "i/j";
            //reset letterKey
            letterKey = "";
            //When it's two numbers look up the corresponding letter with  getkeybyvalue function
          }else if(letterKey.length === 2){
            let newLetter = getKeyByValue(gridObject,letterKey);
            //Add that letter to the output
            output += newLetter;
            //Reset the letterKey
            letterKey = "";
          }
          }
      }
      console.log(output);
      return output;
    }





    console.log(input);
    //loop through the letters in the input individually and match them to the 
    //letters in the object
    for (let i = 0; i< input.length;i++){
      for (letter in gridObject){
        if(input[i]===letter){
          //When that occurs make the value a new variable
          let letterNumber = gridObject[letter];
          //Add that variable to the output each time
          output += letterNumber;

          //This is just an example of how we can use the getkeybyvalue fucntion
          //console.log(getKeyByValue(gridObject,'55'));
        }
      }
    }
    if(output===""||output===" "){
      console.log(true);
    }
    console.log(output);
    return output;


  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
