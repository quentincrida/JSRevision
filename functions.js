

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

//Task 2

// const matching = function(object, searchString) {
// for(var key in object) {
//     if(searchString !== key) {
//         return false;
//     } 
//     }
//     return true;
// }

// var person = {name: 'Piele', age: 30};
// var keyIsFound = objectHasKey(person, 'name');
// var keyNotFound = objectHasKey(person, 'mobile');

// console.log(matching(keyIsFound));