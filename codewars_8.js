/**
 * Created by nokatami on 22.04.17.
 */
// Description:
//     Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//
//     Rules for a smiling face:
//     -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     -Every smiling face must have a smiling mouth that should be marked with either ) or D.
//     Valid smiley face examples:
//     :) :D ;-D :~)
// Invalid smiley faces:
//     ;( :> :} :]
//
// Example cases:
//
//     countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
//
// Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array)
let array1 = [':)', ';(', ';}', ':-D'];

let array2 = [';tD', ':-(', ':-)', ';~)'];

let array3 = [';]', ':[', ';*', ':$', ';-D'];
function countSmileys(arr) {
    let result = 0;
    for (elem of arr) {
        console.log(elem);

        if ((elem.length === 2) && (elem.indexOf(":") > -1 || elem.indexOf(";") > -1) && (elem.indexOf(")") > -1 || elem.indexOf("D") > -1)) {
            result++;
        }
        if ((elem.length === 3) && (elem.indexOf(":") > -1 || elem.indexOf(";") > -1) && (elem.indexOf(")") > -1 || elem.indexOf("D") > -1) && (elem.indexOf("~") > -1 || elem.indexOf("-") > -1)) {
            result++;

        }
    }
        return result;

}

console.log(countSmileys(array2));