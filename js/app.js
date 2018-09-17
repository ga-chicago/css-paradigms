console.log("hey");

const reverseWordOrder2 = (str) => {
    // build output string as you go
    let output = "";

    // keep track of current "word"
    let currentWord = "";

    // loop over characters in string 
    for(let i = 0; i < str.length; i++) {
        // when you get to a space 
        if(str[i] == " ") {

            // a space should be added in the proper place
            // the current word is "done" and should be added to the string in a proper place
            output = currentWord + " " + output

            // clear out the "current word"
            currentWord = ""
  
        } 
        // if this char isn't a space:
        else {
            currentWord += str[i]
        }

    }
    return output

}
 
const reversed = reverseWordOrder2("Four score and seven years ago")
console.log("---->" + reversed + "<----")