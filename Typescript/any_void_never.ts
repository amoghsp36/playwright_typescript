
let info: any[] = ['John', 1, true];

let info2: Array<any> = ['Doe', 2, false];

function none(a: string): void{
    console.log(a);
    return; //optional
}

function throwError(msg: string): never{
    throw new Error(msg);
}

let abc: any = 10;
let ab = <number>abc + 12;
let v = abc as number + 12;
console.log(ab);