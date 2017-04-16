/**
 * Created by nokatami on 16/04/17.
 */// let numbers = ([0,4,3,2,5] );
//
// function removeSmallest(nu){
//     {
//         nu.sort(function (a, b) {
//             return a - b;
//         });
//         return nu.slice(1);
//     }
// }
//
// console.log(removeSmallest(numbers));

let numbers = ([2,7,1,2,5] );


function removeSmallest(nu){
    let mi = nu[0];
    let i;
    let ind = 0;
    let nuw = [];
    {
        for (i = 0; i < nu.length; i++) {

            if (nu[i] < mi) {
                mi = nu[i];
                ind = i;
            }
        }
        // console.log(ind);
    }
    for (i = 0; i < nu.length; i++){
        if (i !== ind){
            nuw.push(nu[i]);
        }
    }
    return nuw;
}
console.log(removeSmallest(numbers));