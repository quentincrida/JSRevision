

//Named function function declaration

function sayHello(greeting, name) {
    return `${greeting} ${name}`;

}

console.log("Hello Message:", sayHello('Jy is die beste','Gloria'));

//Anonymous function expression

const add = function(num1, num2) {
    return num1 + num2;
}
console.log('Add 2 and 3:',add(2, 3));

//Task1:
function addArray(arr) {
    var sum = 0;
    for(var i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of array of numbers:", addArray([1,2,3,4]));


//Arrow function
let multiply = (numA, numB) => numA * numB;

console.log('Multiply 3 by 6:', multiply(3, 6));
