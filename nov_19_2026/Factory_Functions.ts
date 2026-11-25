function createStudent(roll:number, name:string, marks:number){
    return {
        roll, 
        name, 
        marks
    }
}

let stu_1 = createStudent(123, 'Muthu', 35)
console.log(stu_1)
console.log(stu_1.roll)
console.log(stu_1.name)
console.log(stu_1.marks)

