function range(start, end, step = start < end ? 1 : -1) {
    let arr = [];
    for (let i = start; i * step <= end * step; i += step) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    let total = 0;
    for (let elem of arr) {
        total += elem;
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
