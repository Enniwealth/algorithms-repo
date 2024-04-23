

// const sumNumbers  = (numbersArray) => {
//     let result = 0;
//     for (let number of numbersArray) {
//          result += number
//         console.log(result);
//     }
//     return result;
// };

// const numbers = [0, 1 , 2, 3, 4, 5, 50] 
// console.log(sumNumbers(numbers));


// const primalityTest = (num) => {

//    for (let i = 2; i < num; i++) {

//     if (num % i === 0 ){
//         return false;
//     }
//     return true;
//     }
//    }

// console.log(primalityTest(15))





// const isEven = (num) => {
//     if (num % 2 === 0) {
//         return true;
//     };
//     return false;
// }
// console.log(isEven(20))

function fact(num) {
    if (num <= 1){
        return 1;
    }
     return num * fact(num - 1);
}

console.log(fact(7));
console.log(fact(500))


