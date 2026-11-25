class Person{
    readonly birthdate: Date;

    constructor(birthdate:Date){
        this.birthdate = birthdate;
        console.log("My birthdate: " + birthdate)
    }
}

let my_dob = new Date(1984,4,16)
let person_1 = new Person(my_dob)
