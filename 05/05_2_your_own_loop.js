function loop(value, fTest, fUpdate, fBody) {
    while (fTest(value)) {
        fBody(value);
        value = fUpdate(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1