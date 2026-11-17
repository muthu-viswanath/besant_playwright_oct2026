/*for(loopvariable initialization; loop condition; increment/decrement){
    for block code
}
    */

for(let i=1; i<=5; i++){
    console.log(`Value of i is: ${i}`)
}

//for... of
// Used to iterate over a string, array or an iterable

let colors:string[] = ['violet','indigo','blue','green','yellow','orange','red']

for(let color of colors){
    console.log(color)
}



let employee = {
    id:101,
    name: "Arun",
    designation: "Software Engineer"
}

for (let properties in employee){
    console.log("Printing the properties along with its values:")
    console.log(`Field Name: ${properties} Value: ${employee[properties as keyof typeof employee]}`)
}