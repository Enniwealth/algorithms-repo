const binarySearch = (sortedArray, element) => {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (element === sortedArray[middleIndex]) {
            return middleIndex;
        }

        if (sortedArray[middleIndex] < element){
            startIndex = middleIndex + 1;
        }
        else{
            endIndex = middleIndex -1;
        }

};
 
}
const arr = [1, 2, 3, 4, 77, 89]
console.log(binarySearch(arr, 4));