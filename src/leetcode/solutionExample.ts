'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let stringArray:string[] = [];

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    stringArray = inputString.split('\n');

    main();
});

function readLine() {
    return stringArray[currentLine++];
}

/*
 * Complete the 'legoBlocks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function legoBlocks(n: number, m:number) {
    // Write your code here
    var mod = BigInt(Math.pow(10, 9) + 7);
    var oneFloor = [];
    var dirtyMultiFloor = [];
    var cleanMultiFloor = [];

    oneFloor = [0, 1, 2, 4, 8].flatMap(number => BigInt(number));

    for (let width = 1; width <= m; width++) {
        if (width > 4) {
            oneFloor[width] =
                (oneFloor[width - 1] +
                    oneFloor[width - 2] +
                    oneFloor[width - 3] +
                    oneFloor[width - 4]) %
                mod;
        }

        dirtyMultiFloor[width] = 1n;``````
        for (let k = 0; k < n; k++) {
            dirtyMultiFloor[width] *= oneFloor[width];
            dirtyMultiFloor[width] %= mod;
        }
    }

    for (let width = 1; width <= m; width++) {
        cleanMultiFloor[width] = dirtyMultiFloor[width] + mod;
        for (let k = 1; k < width; k++) {
            cleanMultiFloor[width] -=
                (cleanMultiFloor[k] * dirtyMultiFloor[width - k]) % mod;
            cleanMultiFloor[width] += mod;
        }
    }

    return cleanMultiFloor[m] % mod;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const result = legoBlocks(n, m);

        ws.write(result + '\n');
    }

    ws.end();
}