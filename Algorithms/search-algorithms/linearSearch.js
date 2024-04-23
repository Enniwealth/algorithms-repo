const findElement = (arr, value) =>{
    let index = 0
    for (let item of arr) { 
        if (item === value) return 'element found at the index of ' + index;
        index++;
    }
    
    return "No such element in array " 
}

const arr = [5, 3, 10,-10, 33, 51]
console.log(findElement(arr, 51))