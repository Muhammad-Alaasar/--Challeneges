'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (chunk) {
//     inputString += chunk;
// });
// process.stdin.on("end", function () {
//     inputString = inputString.split('\n');
//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


function dataFinder(data) {
    // Write your code here
    let dataArr = data;

    return function (minRange, maxRange, value) {
        if (maxRange > dataArr.length - 1) throw new Error("Invalid range")
        dataArr = dataArr.slice(minRange, maxRange + 1);
        return dataArr.includes(value);
    };
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//     const data = readLine().trim().split(' ');
//     const finalData = data.map(val => parseInt(val));
//     const join = dataFinder(finalData);
//     try {
//         const inputs = readLine().trim().split(' ');
//         const result = join(parseInt(inputs[0]), parseInt(inputs[1]), parseInt(inputs[2]));
//         ws.write(result.toString());
//     } catch (e) {
//         ws.write(`${e}`);
//     }
//     ws.end();
// }

const mk = dataFinder([15, 1, 10, 5, 4, 20]);

console.log(mk(1, 4, 4));