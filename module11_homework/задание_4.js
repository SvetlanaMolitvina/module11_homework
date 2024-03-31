function interval(firstNumber, secondNumber) {
    const idInterval = setInterval(function () {
        if(firstNumber <= secondNumber) {
            console.log(firstNumber);
            firstNumber++;
        } else {
            clearInterval(idInterval);
        }
    }, 1000)
}

interval(5, 15);