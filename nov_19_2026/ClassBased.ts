class Employee{
    employee_id:number;
    department:string = 'Production';
    
    constructor(employee_id:number){
        this.employee_id = employee_id;
    }
}

let e = new Employee(100)
console.log(e.employee_id)
console.log(e.department)
