const { getCombinedNodeFlags } = require("typescript");

//1. Array
let myArray = ['a', 'b', 'c', 'd'];

myArray = [...myArray, 'end'];
// myArray.shift();

//2. How do you create a private variable in JS?

function secretVariable() {
    var private = 'super secret code';
    var code;

    return code = () => {
        return private;
    }
}

let privateVariable = secretVariable();
// console.log(privateVariable())

//3. What is the output?
'use strict';

let str = new String();

let num = 4;
let outer = () => {
    let inner = () => {
        num++;
        // num = 3;
        // console.log(num);

    }
    inner();
}

outer();

//4. what is the output?

// console.log(typeof typeof 1); //string

let closureTest = 'test';
let hero = {
    _name: 'john doe',
    getSecretIdentity: function () {
        console.log(closureTest);
        return this._name
    }
}

// let stoleSecretIdentigy = hero.getSecretIdentity();
// console.log(stoleSecretIdentigy)
// console.log(hero.getSecretIdentity());

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

const addY = makeAdder(10);

// console.log(addY(10));

// Create A promise

function getNumber(cb) {
    setTimeout(() => {
        cb(10)
    }, 100)
}

// getNumber(n => console.log(n));

function getNumberPromise() {
    return new Promise((res, rej) => {
        getNumber(res);
    })
}

const getPromise = getNumberPromise();

// getPromise.then(n => console.log(n));

const person = {
    name: 'this Nick',
    getName: function () {
        console.log(this.name);
    }
}

// const nameGetter = person.getName.bind(person);
// nameGetter();


let name = 'Jackson Global';


let dog = {
    name: 'Jackson',
    breed: 'pit',
    getName: function () {
        console.log(this.name)
    }
}
function getJackson() {

    dog.getName();
}

// getJackson()

// What is a prototype?
const carFeatures = {
    startEngine: function () {
        console.log('the engine has started')
    }
}

const car = {
    make: 'Honda'
}

Object.setPrototypeOf(car, carFeatures);

car.startEngine();
