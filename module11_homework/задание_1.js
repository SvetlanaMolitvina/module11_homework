/*function название фукции по делу  () {
    code
    console.log(1+2)
}

func(); */

let array = [7, null, 0, 15, 'n', '3', 1, 7, 0, 22, 68, 35];

let zeroNumber = 0;
let evenNumber = 0;
let oddNumber = 0;
let notNumber = 0;

function list() {
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
        if (array[i] === 0) {
        zeroNumber++;
    } else {
        if (array[i] % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }
    } else {
        notNumber++;
    }
}

console.log("количество нулей-" + zeroNumber);
console.log("количество четных чисел-" + evenNumber);
console.log("количество нечетных чисел-" + oddNumber);
console.log("количество не числовых значений-" + notNumber);
}

list();
