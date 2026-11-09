let multiplyValue =(x:number, y?:number)=>{
    if(y==0){
        return 0;
    }

    if(x && y){
        return x*y;
    }

    if(x){
        return x*2;
    }
}


let processInput = (val: string | number | boolean) => {
    if(typeof val == "string"){
        return val.trim().toLowerCase();
    }
    if(typeof val == "number"){
        return val * 10;
    }
    if(typeof val == "boolean" && val == true){
        return "Active";
    }
    if(typeof val == "boolean" && val == false){
        return "Inactive";
    }
}


let concatenateArrays = <T>(...args: T[][]) : T[] => {
    let total: T[] = [];

    for(let arg of args){
        total.push(...arg);
    }

    return total;
}


interface Course {
    title : string,
    students : number,
    isPublished : boolean,
}

let getPopularCourses = (x : Array<Course>, minStudents : number) => {
    let newX : Array<Course> = [];
    x.map(c => {
        if(c.isPublished && c.students >= minStudents){
            newX.push(c);
        }
    });
    return newX;
}


let pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    let result: T[K][] = [];

    items.map(item => {
        result.push(item[key]);
    });

    return result;
}


class Employee {
    constructor(
        protected name : string, 
        private baseSalary : number){
    }

    getDetails = () => {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name : string, 
        baseSalary : number,
        private department: string){
            super(name, baseSalary);
    }

    getRoleInfo = () => {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


let validateAgeAsync = async(age : number) : Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        age >= 18 ? setTimeout(()=> {
            resolve("Access Granted")
        }, 1000) : 
        reject(new Error("Access Denied: Must be 18 or older")); 
    })
    .catch(error => {
        return error.message;
    });
}