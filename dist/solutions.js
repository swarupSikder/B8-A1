//--------------------//
//    Solution (1)    //
//--------------------//
let multiplyValue = (x, y) => {
    if (y == 0) {
        return 0;
    }
    if (x && y) {
        return x * y;
    }
    if (x) {
        return x * 2;
    }
};
// console.log(multiplyValue(10));
// console.log(multiplyValue(10,5));
// console.log(multiplyValue(7,0));
//--------------------//
//    Solution (2)    //
//--------------------//
let processInput = (val) => {
    if (typeof val == "string") {
        return val.trim().toLowerCase();
    }
    if (typeof val == "number") {
        return val * 10;
    }
    if (typeof val == "boolean" && val == true) {
        return "Active";
    }
    if (typeof val == "boolean" && val == false) {
        return "Inactive";
    }
};
export {};
// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));
