function sumNum(cb) {
    cb();

    return function() {
        console.log(2+4)
    }
}
function argCb() {
    console.log()
}

const resultSN = sumNum(argCb);
resultSN();