class Alpha{
    //Instance or Global variable
    age:number;

    //Static Variable
    static salary:number = 12345;


    constructor(age:number){
        this.age = age;
    }
}


let alp_1 = new Alpha(12);

console.log(alp_1.age)
console.log(Alpha.salary)

let alp_2 = new Alpha(34);
console.log(alp_2.age)
Alpha.salary =5000
console.log(Alpha.salary)

let alp_3 = new Alpha(67);
console.log(alp_3.age)
console.log(Alpha.salary);

