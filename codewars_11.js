/**
 * Created by nokatami on 01.05.17.
 */
// Find the smallest integer in the array.
//
//     Given an array of integers your solution should find the smallest integer. For example:
//     Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
//
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
arr1 = [8, 10, -4, 2, 6, 22, 0 ];

// function findSmallestInt(arr) {
//         function compare (a, b){
//             return a - b;
//         }
//        arr.sort(compare);
//        return arr[0];
//
//     }
//
// console.log(findSmallestInt(arr1));

function findSmallestInt(arr, callback) {

    arr.sort(callback)
    return arr[0];
}
let callback = function (a, b) {
    return a - b;
}

console.log(findSmallestInt(arr1, callback))

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min.apply(this,args);
//     }
// }

// class SmallestIntegerFinder {
//     findSmallestInt(ar) {
//
//         let a = ar.sort(function (a, b) {
//             return a - b;
//         });
//         return a[0];
//     }
// }