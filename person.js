//Constructor function

const Person = function(name, age){
 this.name = name;
 this.age = age;
 this.greet = function() {
     console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old`);
 };


}

// const shaggy =  new Person();
// console.log('shaggy age:', shaggy.age);
// console.log('shaggy name:', shaggy.name);

const quentin = new Person('Quentin Daddy', 39);
Person.prototype.dateOfBirth = function() {
   return 2021 - this.age;
}

console.log( quentin.greet());
console.log(quentin.dateOfBirth());