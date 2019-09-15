let myName = 'David';
let myAge = 50;

function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

function sayHello(): void {
  console.log('Hello World');
  // return myAge;
}

console.log(sayHello());

function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 2));

let myMultiply: (va1: number, val2: number) => number;

// myMultiply = sayHello;
// console.log(myMultiply());
myMultiply = multiply;
console.log(multiply(5, 2));

let userData: { name: string, age: number } = {
  name: 'David',
  age: 50
};

let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
};

console.log(complex.output(true));

type Complex = { data: number[], output: (all: boolean) => number[] }

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
};

console.log(complex2.output(false));

let myRealRealAge: number | string = 27;

myRealRealAge = 27
myRealRealAge = '27';
// myRealRealAge = true;

let finalValue = 30;

if (typeof finalValue == 'number') {
  console.log('Final Value is a number');
}

function neverReturns(): never {
  throw new Error('An Error!');
}

console.log(neverReturns());

let canBeNull: number | null = 12;

canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;
