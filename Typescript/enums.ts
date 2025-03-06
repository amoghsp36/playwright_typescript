
//enums are used to define a collection of constants
// the first value is 0 and the next value is incremented by 1
// if there are non intialized values in our enums we need to add them first and then we can add the values which have initializations.

enum Browsers {
    Firebox,
    Edge,
    Safari = getBrowserVersion('chrome') + 10,
    Chrome = getBrowserVersion('chrome')
}


function getBrowserVersion(browsername: string): number{
    if(browsername === 'chrome'){
        return 121;
    }
    return -1;
}

console.log(Browsers.Safari);

//String enums

enum envs {
    DEV = 'dev',
    QA = 'qa',
    PROD = 'prod',
    STAGE = 'stage'
}

console.log(envs.DEV);
console.log(envs['QA']);

enum Status {
    PENDING,
    ACTIVE = 0,
    INACTIVE = 'inactive',
    
}