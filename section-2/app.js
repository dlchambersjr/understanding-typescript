var myName = 'David';
var myAge = 50;
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello World');
    // return myAge;
}
console.log(sayHello());
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 2));
var myMultiply;
// myMultiply = sayHello;
// console.log(myMultiply());
myMultiply = multiply;
console.log(multiply(5, 2));
var userData = {
    name: 'David',
    age: 50
};
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output(true));
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2.output(false));
var myRealRealAge = 27;
myRealRealAge = 27;
myRealRealAge = '27';
// myRealRealAge = true;
var finalValue = 30;
if (typeof finalValue == 'number') {
    console.log('Final Value is a number');
}
function neverReturns() {
    throw new Error('An Error!');
}
console.log(neverReturns());
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
