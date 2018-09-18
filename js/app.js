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

            // a space should be added in the proper place (unless this is the only word so far)
            // the current word is done and should be added to the output in a proper place
            if(output == "") {
                output = currentWord
            } else {
                output = currentWord + " " + output
            }

            // clear out the "current word"
            currentWord = ""
  
        } 
        // if this char isn't a space:
        else {
            currentWord += str[i];

            // add the word if it's not a space but we've reached the end of the string
            if(i === str.length - 1) {
                output = currentWord + " " + output
            }
        }

    }
    return output

}
 
let reversed = reverseWordOrder2("Four score and seven years ago")
console.log("---->" + reversed + "<----")
reversed = reverseWordOrder2("Lakeshore drive is always under construction!!!")
console.log("---->" + reversed + "<----")
reversed = reverseWordOrder2("I'm a member of the resistance inside the administration")
console.log("---->" + reversed + "<----")
// issues:
// it omits the last word  - RESOLVED
// there's an extra space at the end - RESOLVED
