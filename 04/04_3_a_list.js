function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

function arrayToListRecursive(array) {
    if (array.length === 0) {
        return null;
    }

    return {
        value: array[0],
        rest: arrayToListRecursive(array.slice(1))
    };
}

function listToArray(list) {
    let array = [];
    while (list != null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function listToArrayRecursive(list) {
    let array = [];
    function listToArrayRecursiveStart(list) {
        if (list == null) {
            return null;
        }
        array.push(list.value);
        listToArrayRecursiveStart(list.rest);
    }
    listToArrayRecursiveStart(list);
    return array;
}

function prepend(elem, list) {
    return {
        value: elem,
        rest: list
    };
}

function nth(list, index) {
    for (let i = 0; i < index; i++) {
        if (list.rest == null) {
            return undefined;
        }
        list = list.rest;
    }
    return list.value;
}

function nthRecursive(list, index) {
    if (list == null) return undefined;
    else if (index === 0) return list.value;
    else return nthRecursive(list.rest, index - 1);
}

console.log(JSON.stringify(arrayToList([10, 20])));
console.log(JSON.stringify(arrayToListRecursive([10, 20])));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(listToArrayRecursive(arrayToListRecursive([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20