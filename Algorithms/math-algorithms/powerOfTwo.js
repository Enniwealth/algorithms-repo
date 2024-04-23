
const isPowerOfTwo = (number) => {
    if (number < 1) {
        return false;
    }
    let dividednumber = number;
    while (dividednumber  !== 1) {
        if (dividednumber % 2 !== 0 ){
            return false;
        }
        dividednumber /= 2;
    }
    return true;
}


// Using Bitwise Operators



console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(10))