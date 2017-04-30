/**
 * Created by nokatami on 30.04.17.
 */
str1 = 'abs';

function solution(str) {
    let rts  = [];
    for (let i = str.length - 1; i >= 0; i--) {
        rts.push(str[i]);
    }
    return (rts.join(''));
}
console.log(solution('world'));

// function solution(str){
//     return str.split('').reverse().join('');
// }