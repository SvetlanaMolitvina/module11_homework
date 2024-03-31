function number(num) {
    if (num <= 1 || num > 1000) {
      console.log("Данные неверны");
    } else {
      let number = true;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          number = false;
          break;
        }
      }
      if (number) {
        console.log(num + " - простое число");
      } else {
        console.log(num + " не является простым числом");
      }
    }
  }
  
  number(789);