//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:
function DrEvil(amount) {
  if (amount === 1000000) {
    console.log(`${amount} dollars pinky`)
  }
  else {
    console.log(`${amount} dollars`)
  }
}

DrEvil(1231);
DrEvil(1000000);

//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings
//(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume 
//that the strings are at least 2 characters long.
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 
function mixUp(string1, string2) {
  let holder1 = string1.slice(1);
  let holder2 = string2.slice(1);
  let holder3 = string2[0] + holder1 + ' ' + string1[0] + holder2;
  console.log(holder3);
}

mixUp("sup", "bye");

//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below
function fixStart(string1) {
  let holder1 = string1.slice(1)
  let holder2 = string1[0] + holder1.replace(/b/g, '*');
  console.log(holder2);
}
fixStart("babble");

//Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, 
//it should leave it unchanged. For example: 
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below
function verbing(string1) {
  if (string1.includes("ing")) {
      console.log(string1 + "ly");
  }
  else if (string1.length >= 3) {
    console.log(string1 + "ing");
  }
  else {
    console.log(string1);
  }
}

verbing("swim");
verbing("swimming");
verbing("Hi");

//Create a function called notBad that takes a single argument, a string
//It should find the first appearance of the substring 'not' and 'bad'
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
//substring with 'good' and return the result
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just 
//return the original sentence
//For example
//notBad('This dinner is not that bad!'): 'This dinner is good!'
//notBad('This movie is not so bad!'): 'This movie is good!'
//notBad('This dinner is bad!'): 'This dinner is bad!'
//write answer below 
function notBad(string1) {
  if(!string1.includes("not" || "bad")){
    console.log(string1);  
    return
  }
  else{
      let holder1 = string1.indexOf("not");
      let holder2 = string1.indexOf("bad");
        if (holder1 < holder2) {
         console.log(string1.slice(0, holder1) + "good");
      }
   }
}
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');