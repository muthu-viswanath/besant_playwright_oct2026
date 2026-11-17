//Creating the object using object literal.

let employee = {
    emp_id: 101,
    name: 'Muthu',
    salary: 25000,

    work: function(){
    console.log(`${this.name} is getting a salary of ${this.salary}`);
    },

    display: function(){
    console.log(`${this.name} is getting a salary of ${this.salary}`);
    },

    show(){
    console.log(`${this.name} is getting a salary of ${this.salary}`);
    },

    play(){
    console.log(`${this.name} is getting a salary of ${this.salary}`);
    }
}


console.log(employee.emp_id)
console.log(employee.name)
console.log(employee.salary)
employee.display()