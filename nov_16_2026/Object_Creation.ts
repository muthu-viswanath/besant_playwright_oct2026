//Creating the object using literal (Most common way)

let employee = {
    id: 1234,
    name: "Muthu",
    designation: "Trainer",
    salary: 34567.78
}

console.log(`Employee Salary: ${employee.salary}`)
console.log(employee.designation)
console.log(employee.name)

//Type annotation
let a: number = 123;

//Using object type annotation:

let student: {
    roll_no: number,
    name: string,
    grade: string
}

// using interface

interface Stud {
    roll_no: number;
    name: string;
    grade: string;
}

let age: number;

let stu1: Stud = {
    roll_no: 123,
    name: "Tilak Varma",
    grade: "A+"
}

let stu2: Stud = {
    roll_no: 113,
    name: "RameshVarma",
    grade: "B+"
}

//Object creation using type alias
type Movies = {
    title: string;
    release: number;
    language: string;
}

let Bahubali: Movies = {
    title: 'Bahubali',
    release: 2018,
    language: 'Telugu'
}

console.log(Bahubali.release)

//Using Factory Function:

function createEmployee(id:number, name:string, designation:string, salary:number){
    return{
        id,
        name,
        designation,
        salary
    };

}

let emp1 = createEmployee(12, "Sashi Kumar", "Developer", 23455.45)
console.log(emp1.designation)