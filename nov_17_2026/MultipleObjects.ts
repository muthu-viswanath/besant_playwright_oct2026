const students = [
    {
        id:101,
        name: 'Arun',
        marks: 85
    },

    {
        id:102,
        name: 'Mukesh',
        marks: 75
    },

    {
        id:103,
        name: 'Kumar',
        marks: 95
    }

]

for (let stu of students){
    console.log(`Student Id: ${stu.id}`)
    console.log(`Student Name: ${stu.name}`)
    console.log(`Student Marks: ${stu.marks}`)
    console.log(`---------------------------------------`)
    
}