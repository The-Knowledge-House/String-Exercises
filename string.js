//My partners were Anthony Tapia and Jason Young. Without them I would have not done this (cries in new at this)




//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:
function DrEvil(amount) {
if (amount === 100000) {
    return amount + " dollars (pinky)";
} else {
    return amount + " dollars";
}
}
console.log(DrEvil(1500))





//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 
function mixUp(str1, str2) {
    return str2.slice(0,2) + str1.slice(2) + " " + str2.slice(0,2) + str1.slice(2);
}
console.log(mixUp('bill','pool'));






//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below
function fixStart(babble) {
    let cattle = babble.charAt(0);
    return cattle + babble.slice(1).replace(new RegExp(cattle, 'g'), '*');
}
console.log(fixStart('babble')); //didn't work   //UPDATE: chaAt ws missing the letter r, and babble was missing the '' signs at console log





//Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, 
//it should leave it unchanged. For example: 
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below
function verbing(word) {
    if (word.length < 3) return word;
    if (word.slice(-3) == 'ing') {
      return word + 'ly';
    } else {
      return word + 'ing';
    }
  }

  console.log(verbing("embracing"));







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
function notBad(sentence) {
  var notIndex = sentence.indexOf('not');
  var badIndex = sentence.indexOf('bad');
  if (notIndex == -1 || badIndex == -1 || badIndex < notIndex) return sentence;
  return sentence.slice(0, notIndex) + 'good' + sentence.slice(badIndex + 3);
}

console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This movie is not so bad"));
console.log(notBad("This dinner is bad!"));
//NOTE: I found it online and still don't understand the code. Most likely by the end of the week I will get it.