const { count } = require('console');
const fs = require('fs');

fs.readFile('./rightToLeft.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('error');
        return;
    };
    countSteps(data);
});

const countSteps = (str) => {
    let dataToArr = str.split('');
    let left = 0;
    let right = 0;
    let count = 0;
    // let countAll =left -right
    // let ttlCount;

    for (let i = 0; i < dataToArr.length; i++) {
        let currSign = dataToArr[i];
        if (currSign === '<') {
            left++;
            if ((right - left) === -1 && count === 0) {
                console.log('A', (right + left), 'A',);
            }
            count++

        } else if (currSign === '>') {
            right++;
            count++
            if ((right - left) === -1 && count === 0) {
                console.log('a', (right + left), 'b',);
            }
        }
    }
    // dataToArr.forEach((corresponding) => {
    //       if(dataToArr[0] === '<'){
    //         if (corresponding === '<') {
    //             left++
    //             right--
    //         } else {
    //             left--
    //             if(left === -1){
    //                 ttlCount = right -left
    //             }
    //             // right++
    //         }
    //     }
    //     });
    //     // let countAll = right - left;
    console.log('right', right, 'left', left);
}