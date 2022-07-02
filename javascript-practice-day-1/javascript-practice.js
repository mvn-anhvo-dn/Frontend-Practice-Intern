function excercise_1(x, y) {
    if (x == y) {
        return 3 * (x + y);
    }
    else {
        return (x + y);
    }
}
console.log("Excercise 1 : 200 + 12 = " + excercise_1(200, 12));
console.log("//*--------------------------")

function excercise_2(n) {
    if (n <= 19) {
        return (19 - n);
    }
    else {
        return (n - 19) * 3;
    }
}

console.log("Excercise 2 : input 12 -> " + excercise_2(12));
console.log("Excercise 2 : input 22 -> " + excercise_2(22));
console.log("Excercise 2 : input 9 -> " + excercise_2(9));
console.log("//*--------------------------")

function excercise_3(x) {
    let y = [];
    for (let i = 0; i <= 10; i++) {
        let num = x.replace("*", i);
        if (num % 3 === 0) {
            y.push(num);
        }
    }
    return y;
}
console.log("Excercise 3 : input 1*9 -> " + excercise_3('1*9'));
console.log("//*--------------------------")


function excercise_4(x) {
    let y = [];
    for (let i = 0; i <= 10; i++) {
        let num = x.replace("*", i);
        if (num % 6 === 0) {
            y.push(num);
        }
    }
    return y;
}

console.log("Excercise 4 : input 1*9 -> " + excercise_4('1*9'));
console.log("Excercise 4 : input 1234567890* -> " + excercise_4('1234567890*'));


