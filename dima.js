/**
 * Created by nokatami on 16/04/17.
 */
//Input = array, output = devide array elements in two arrays.
let myArr = ([2, 7, 1, 2, 5]);
let arr1 = [];
let arr2 = [];
let newArray = [];

function splitIntoTwo(arr) {
        for (i = 0; i < arr.length; i++) {
            let n = Math.floor(Math.random() * 2);
            if (n == 1) {
                arr1.push(arr[i]);
            }
            else {
                arr2.push(arr[i]);
            }
        }
newArray.push(arr2, arr1);

return newArray;
}
console.log (splitIntoTwo(myArr));
