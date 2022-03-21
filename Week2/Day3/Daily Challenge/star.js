
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


function getAsterisks(length) {
    var length = 5;
    var sign = ' ';

    while (length > 0) {
        sign += '*';
        length--;
        console.log(sign);
    }
    return sign;
}

getAsterisks(5);

getaster(5);
function getaster(num) {
    num = 5;
    let sign = " ";
    for (let i = num; i < num; i--) {
        sign += "*";
        console.log(sign);

    }
  return sign;
}













