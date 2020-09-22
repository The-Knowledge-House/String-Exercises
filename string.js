//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:

function drEvil(amount){
    return (amount === 1000000) ? amount + " dollars (pinky)": amount + " dollars";
}

// console.log(drEvil(1000000))
// console.log(drEvil(1000))


//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 

function mixUp(str1, str2){
    let result = "";
    result = `${str2.slice(0, 2)}${str1.slice(2)} ${str1.slice(0, 2)}${str2.slice(2)}`

    return result ;
}

// console.log(mixUp("mixing", "pods"))

//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below

function fixStart(str){
    let firstChar = str[0];
    let strToArr = str.split("");
    for(let i = 1; i < strToArr.length; i++){
        if(firstChar === strToArr[i]){
            strToArr[i] = '*';
        }
    }
    return strToArr.join("");
}

console.log(fixStart("babble"))

//Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, 
//it should leave it unchanged. For example: 
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below

function verbing(str){
    if(str.length > 3){
        if(str.endsWith("ing")){
            return str + "ly";
        }
        return str + "ing";
    }
    return str;
}

// console.log(verbing("swim"))
// console.log(verbing("swimming"))
// console.log(verbing("go"))

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

function notBad(str){
    if(str.includes("not") && str.includes("bad")){
        let idxofNot = str.indexOf("not")
        let idxofBad = str.indexOf("bad")
        if( idxofNot < idxofBad){
            return str.slice(0, idxofNot) + "good" + str.slice(idxofBad +3);
        }
    }
    return str;
}

// console.log(notBad('This dinner is not that bad! I love it'))
// console.log(notBad('This dinner is really bad!'))