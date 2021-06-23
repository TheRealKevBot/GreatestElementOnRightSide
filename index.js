// Given an array arr, replace every element in that array with the greatest element among the elements to its right, 
// and replace the last element with -1.

// After doing so, return the array. 

function replaceElements(arr){
    let newArr = []
    let curArr = [...arr]
    arr.forEach(curNum => {
        curArr.shift()
        bigNum = 0 
        curArr.forEach(num => {
            num > bigNum ? bigNum = num : null
        })
        bigNum === 0 ? bigNum = -1 : null
        newArr.push(bigNum)
    })
    return newArr
}; // Long Run Time, need to refactor....

console.log(replaceElements([17,18,5,4,6,1]))
console.log(replaceElements([400, 100, 500, 600, 200, 100, 10]))
console.log(replaceElements([10, 20 , 400, 600, 500, 300, 100]))
console.log(replaceElements([400, 900, 1000]))