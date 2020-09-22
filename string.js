//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:

const drEvil = amount => {
    if (amount === 1000000) return amount + " dollars (pinky)";
    return amount + " dollars";
}

console.log(drEvil(1000000));





//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 

let mixUp = (strOne, strTwo) => {
    return strTwo.slice(0, 2) + strOne.slice(2) + " " + strOne.slice(0, 2) + strTwo.slice(2);
}

console.log(mixUp('dog', 'dinner'));




//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below

let fixStart = (str) => {
    let firstChar = str.substring(0, 1);
    let bigString = str.slice(1);
    return firstChar + bigString.replace(new RegExp(firstChar, 'g'), '*');
}

console.log(fixStart("babble"));



//Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, 
//it should leave it unchanged. For example: 
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below








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

let notBad = (str) => {
    let not = str.indexOf("not");
    let bad = str.indexOf("bad");

    // console.log(str.substring(0, str.length - 1));
    if ((not == -1) || (bad == -1) || (bad < not)) return str;
    return str.slice(0, not) + 'good' + str.slice(bad + 3);
}

console.log(notBad('This movie is not so bad!'));