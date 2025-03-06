

let browser: string = 'Chrome';

browser === 'chrome' ? console.log('chrome') : browser === 'firefox' ? console.log('firefox') : console.log('others');


let word: any = 'Hello World';

for(let i of word){
    console.log(i);     // for..of gives the values
}

for(let i in word){
    console.log(i);    //for..in gives the index
}