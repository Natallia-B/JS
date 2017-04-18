/**
 * Created by nokatami on 16/04/17.
 */
// Count the number of Duplicates
//
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.
//
//     Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'

// let a = "aAbc";
// function duplicateCount(text) {
//     text = text.toLowerCase();
//     // console.log (text);
//     let freq = {};
//     for (let i = 0; i < text.length; i++) {
//
//         let letter = text.charAt(i);
//         console.log(letter);
//         console.log(text.charAt(i));
//         if (freq[letter]) {
//             freq[letter]= freq[letter]+1;
//         }
//         else {
//             freq[letter] = 1;
//         }
//     }
//     return freq;
//
// }
// console.log(duplicateCount(a))

let a = "aabbccaAdd";
function duplicateCount(text) {
    text = text.toLowerCase();
    let freq = [];
    let newfreq = [];
    for (let i = 0; i < text.length; i++) {

        let letter = text.charAt(i);

        if (freq[letter]) {
            freq[letter] = freq[letter]+1;
            newfreq[letter] = freq[letter];
        }
        else {
            freq[letter] = 1;
        }
    }
    var max = 0;
    for (var name in newfreq) {
        if (1 < newfreq[name]) {
            max ++;
        }
    }
return max;
}
console.log(duplicateCount(a))