//union types allow us to define a variable with multiple types
function getUnionTypee(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else if (typeof id === 'number') {
        console.log(id.toExponential());
    }
}
console.log(getUnionTypee('John'));
