const MaiorNumero = (arr) => {
    let higherNumber = 0
    for(let number of arr) {
        if(number > higherNumber) {
            higherNumber = number
        }
    }

    return higherNumber
}

console.log(MaiorNumero([1,2,4,5,10, 10, 30, 50, 100, 100]))