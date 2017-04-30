/**
 * Created by nokatami on 30.04.17.
 */
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//
//     each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
s1 = 'aaaadd';
s2 = 'xaadds';
function longest(s1, s2) {
    let new_str = s1 + s2;

    let new_obj = {};
    for(i = 0;i < new_str.length; i++ ){
        let key = new_str[i];
        new_obj[key] = new_str[i];
    }

    let arr = [];
    for(el in new_obj){
        arr.push(new_obj[el]);
    }
   new_str = arr.sort().join('');
return new_str;
}

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

console.log(longest(s1, s2));