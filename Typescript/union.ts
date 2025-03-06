
//union types allow us to define a variable with multiple types

function getUnionTypes(id: (string | number)){
    if(typeof id === 'string'){
        console.log(id.toUpperCase());
    }else if(typeof id === 'number'){
        console.log(id.toExponential());
    }
}

console.log(getUnionTypes('John'));

