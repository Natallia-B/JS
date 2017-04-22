/**
 * Created by nokatami on 18/04/17.
 */
// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
//     == [3, 7]
//
// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]
//
// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)
//
// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
//
let arr1 = [10,5,2,3,7,5];
let sum1 = 10;


var sum_pairs = function(arr, sum) {

    let sumarr = arr.map(function (elem) {
        return elem = sum - elem;
    });

// return sumarr;
    let b;
    for (let i = 0; i < arr.length; ++i) {
        for (var j = 1; j < arr.length; ++j) {
            if (arr[i] === sumarr[j]) {
               b = [];
               b.push(arr[i], sumarr[i]);
                // j = arr.length;
                i = arr.length;
        }

        }
    }
    return b;
}
console.log(sum_pairs(arr1, sum1));