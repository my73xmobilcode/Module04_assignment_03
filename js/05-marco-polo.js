
for (let num = 1; num <= 100; num++) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
      console.log(num + ' Marco Polo')
    } else {
        if ((num % 3 === 0) && (num % 5 != 0)) {
            console.log(num + ' Marco')
        } else {
            if ((num % 5 === 0) &&  (num % 3 != 0)) {
                console.log(num + ' Polo')
            }
        }
    }
}