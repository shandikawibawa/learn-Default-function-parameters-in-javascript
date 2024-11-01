// Default function parameters, introduced in ECMAScript 6 (ES6), allow you to assign default values to function parameters. When a fumction is called, and an argument is not provided for a parameter, the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined

function countTo5(count = false) {
    if (count === true) {
        for (let i = 1; i <= 5; i++) {
            console.log(`Count: ${i}`)
        }
    }
}

countTo5(true);



function ratings(rate = 0) {
    if (rate === 5) {
        console.log(`high ratings :)`);
    } else if (rate === 0) {
        console.log(`Low Ratings :(`);
    }
}

ratings(5);

function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(5, 6)) 