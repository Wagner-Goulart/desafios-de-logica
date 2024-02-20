const ehPrimo = (num) => {
    const falseMessage = `O número ${num} não é primo`
    const trueMessage = `O número ${num} é primo`

    if (num <= 1) {
        return falseMessage
    } else if ( num % 2 === 0 ) {
        return falseMessage
    } else {
        let squareNumber = Math.sqrt(num)

        for(let i = 3; i <= squareNumber; i+=2) {
            if (num % i === 0) {
                return falseMessage
            }

            return trueMessage
        }
    }
}

console.log(ehPrimo(10))