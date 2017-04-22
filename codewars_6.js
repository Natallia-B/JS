/**
 * Created by nokatami on 22.04.17.
 */
let arr = ["a", "b", "c"];
let arg = "obj";
let chained = (a, b) => {
    let fun = function(b)  {
        for (let elem of a){
            b = elem(b);
        }
        return b;
    }
    return fun;
}
console.log(chained(arr,arg));

// function chained (a, b) {
//     return function (b) {
//         for (let elem of a){
//             b = elem(b);
//         }
//         return b;
//     }
//
// }
// console.log(chained(arr,arg));