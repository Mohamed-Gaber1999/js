// task1
function makesTen(a, b) {
    return a === 10 || b === 10 || a + b === 10;
}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));
// task2
function getSumOfItems(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));

// task3
function length(str) {
    let count = 0;
    for (const char of str) {
        count++;
    }
    return count;
}
console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));

// task4
function arrayValuesTypes(arr) {
    let types = [];
    for (let i = 0; i < arr.length; i++) {
        types.push(typeof arr[i]);
    }
    return types;
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));

// task5
function findIndex(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return i;
        }
    }
    return -1;
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// task6
function printArray(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}
console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));
