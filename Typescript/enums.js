//enums are used to define a collection of constants
// the first value is 0 and the next value is incremented by 1
// if there are non intialized values in our enums we need to add them first and then we can add the values which have initializations.
var Browsers;
(function (Browsers) {
    Browsers[Browsers["Firebox"] = 0] = "Firebox";
    Browsers[Browsers["Edge"] = 1] = "Edge";
    Browsers[Browsers["Safari"] = getBrowserVersion('chrome') + 10] = "Safari";
    Browsers[Browsers["Chrome"] = getBrowserVersion('chrome')] = "Chrome";
})(Browsers || (Browsers = {}));
function getBrowserVersion(browsername) {
    if (browsername === 'chrome') {
        return 121;
    }
    return -1;
}
console.log(Browsers.Safari);
//String enums
var envs;
(function (envs) {
    envs["DEV"] = "dev";
    envs["QA"] = "qa";
    envs["PROD"] = "prod";
    envs["STAGE"] = "stage";
})(envs || (envs = {}));
console.log(envs.DEV);
console.log(envs['QA']);
