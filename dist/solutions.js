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
let pluckValues = (items, key) => {
    let result = [];
    items.map(item => {
        result.push(item[key]);
    });
    return result;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails = () => {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    };
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo = () => {
        return `Manager of ${this.department}: ${this.name}`;
    };
}
let validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        age >= 18 ? setTimeout(() => {
            resolve("Access Granted");
        }, 1000) :
            reject(new Error("Access Denied: Must be 18 or older"));
    })
        .catch(error => {
        return error.message;
    });
};
export {};
