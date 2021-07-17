//* It seems TS is very similar to C#

interface IUser {
  name: string;
  age: number;
  isAdult?: boolean;
}

let user1: IUser = {
  name: 'Neo',
  age: 123,
};

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal {
  getName(): string {
    return `Cat name is ${this.name}.`;
  }
}

let cat: Cat;
cat = new Cat('Lucy');
console.log(cat.getName()); // Cat name is Lucy.

// Error - TS2532: Object is possibly 'undefined'.
function toString(str: string | undefined) {
  return str.toString();
}

// Type Assertion
function toString(str: string | undefined) {
  return (str as string).toString();
}

// Optional Chaining
function toString(str: string | undefined) {
  return str?.toString();
}

const foo = null ?? 'Hello nullish.';
console.log(foo); // Hello nullish.

const bar = false ?? true;
console.log(bar); // false

const baz = 0 ?? 12;
console.log(baz); // 0

//Triple-slash directive
/// <reference path="./lodash.d.ts" />

// OR 'npm i -D @types/lodash'

import * as _ from 'lodash';

console.log(_.camelCase('import lodash module'));
