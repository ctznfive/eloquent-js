function reverseArray(arr) {
    let resultArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        resultArr.push(arr[i]);
    }
    return resultArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]