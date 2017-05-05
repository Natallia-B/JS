function product(s){
  //coding and coding..
let exclamation = 0;
let question = 0;
for(i=0; i<=s.length; i++){
    if (s[i] === '!'){
        exclamation++;
    };
    if (s[i] === '?'){
        question++;
    }
   
}
 return exclamation * question;
}
console.log (product('!!!!!??'));