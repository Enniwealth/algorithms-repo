const fibonacci = (n) => {
    const number = [1, 1];
    for (let i = 2; i < n + 1; i++) {
        number.push(number[i - 2] + number[i - 1]);
    }
    const fibonacciNumber = number[n];
    
    return `The number at the ${n}'th position is ${fibonacciNumber}`;
}
console.log(fibonacci(6000));