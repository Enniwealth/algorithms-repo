// const isPrime = (num) => {
//     for (let i = 2; i < num; i++) {
//         if ( num % i === 0 ){
//             return false;
//         }
//     }
//     return true; 
// }
// console.log(isPrime(1000000))
// console.log(isPrime(5))


//Algorithm 1

const getMin = (numbers) => {

    let currentMin = numbers[0];
    for (const number of numbers) {
        if (number < currentMin) {
            currentMin = number;
        } 
    }
    return currentMin

}


console.log(getMin([2, 1, 6, 0, 5]))



//Algorithm 2

const IsEven = (num) => {
    return num % 2 === 0
  
    
}

console.log(IsEven(7))
console.log(IsEven(6))