/*** Created by nokatami on 15/04/17.
 */
let names = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
function list(arr) {
    let str = "";

        arr.forEach((elem) => {

            {
                for (let el in elem) {
                        if (arr.indexOf(elem) < arr.length - 2) {

                            str = str + elem[el] + ", ";
                        }

                        else if (arr.indexOf(elem) == arr.length-2){

                                str = str + elem[el] + " & ";
                            }
                        else {

                str = str + elem[el];
                }
            }
            }



        });

    return str;
}
console.log(list(name));
