
let names: string[] = ['John', 'Doe', 'Smith'];

console.log(names[0]);

let numbers: number[] = [1,2,3,4];

let empNames: Array<String> = ['John', 'Doe', 'Smith'];
let empIds: Array<number> = [1,2,3,4];
let empInfo: Array<any> = ['John', 1, true];

//multype arrays, holding multiple types of values

let multiType: (string|number)[] = ['John', 1, 'Doe', 2,];

let multiTypeArray: Array<string|number> = ['John', 1, 'Doe', 2,];
multiType.push(3);
for(let i=0;i<multiType.length;i++){
    console.log(multiType[i]);
}