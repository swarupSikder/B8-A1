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
// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));
//--------------------//
//    Solution (3)    //
//--------------------//
let formatCoordinate = ([latitude, longitude, locationName]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
//--------------------//
//    Solution (4)    //
//--------------------//
let concatenateArrays = (...args) => {
    let total = [];
    for (let arg of args) {
        total.push(...arg);
    }
    return total;
};
let getPopularCourses = (x, minStudents) => {
    let newX = [];
    x.map(c => {
        if (c.isPublished && c.students >= minStudents) {
            newX.push(c);
        }
    });
    return newX;
};
export {};
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];
// console.log(getPopularCourses(courses, 80));
// console.log(courses);
