//tuples are fixed length arrays where each element has a specific type
var tupleex = ['John', 1,]; //only 2 elements with specific types
//now at the time of initialization we can only add the number of given types  
//but we can push elements or pairs to the existing tuple maintaining the types
tupleex.push('Doe', 2, 'asd', 3); //pushing 2 or more elements/pairs of specific types
console.log(tupleex);
var data = [['John', 1, true], ['Doe', 2, false], ['Smith', 3, true]]; //array of tuples
var data2 = [['John', 1], ['Doe', 2], ['Smith', 3]]; //array of tuples
console.log(data[1][0]);
