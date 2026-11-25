// Create an array of employee objects that contains 4 employees with the following fields
// id, name, salary, department


/*
    1. Display all the employee records
    2. Display the annual salary of each employee
    3. Display the monthly expenditure of the company
    4. Display the list of employees who are getting salary >= 50000


*/


let employees = [
    {
        id:101,
        name: 'Arun',
        salary: 85000,
        department: 'Production'
    },

    {
        id:102,
        name: 'Prakash',
        salary: 35000,
        department: 'Development'
    },

    {
        id:103,
        name: 'Rohan',
        salary: 45000,
        department: 'Production'
    },

    {
        id:104,
        name: 'Mohan',
        salary: 65000,
        department: 'QA'
    }

];

let total_salary = 0

for(let emp of employees){
    //1. Display all the employee records

    console.log(`Emp Id: ${emp.id} `);
    console.log(`Emp Name: ${emp.name} `);
    console.log(`Emp Department: ${emp.department} `);
    console.log(`Emp Salary: ${emp.salary} `);
    //2. Display the annual salary of each employee
    console.log(`Emp Annual Salary: ${emp.salary * 12} `);
    console.log(`------------------------------------`)    
    total_salary += emp.salary;

    
}

// 3. Display the monthly expenditure of the company
console.log("Monthly Expenditure: " + total_salary)

console.log()
console.log("High Salaried employee details")
for(let emp of employees){
// 4. Display the list of employees who are getting salary >= 50000
    if(emp.salary >= 50000){
        console.log(emp.name)
        console.log(emp.salary)
        console.log(emp.department)
    }
}

