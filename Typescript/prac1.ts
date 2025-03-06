
console.log('Hello World');

//Typescript is a superset of Javascript
//Its a statically typed language
//Its a compiled language
//Its a object oriented language

let ah: number = 10;
let bh: string = 'Hello';
let ch: boolean = true;  //type annotation

let dh: any = 10;

let eh = 'Hello';  //type inference
console.log(typeof(eh));

let age: null = null;
let person: undefined = undefined;

function getRandomNumber(): number{
    return Math.random();
}

function add(a:number, b:number): number{
    return a+b;
}