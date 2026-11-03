// //Positional Arguments
// function display(name:string, age:number){
// console.log("Name: " + name + "Age: " + age)
// }

// display("Madhan", 34)

// //Default Arguments
// // When the user doesn't want to provide a value to the parameter and wants the
// // function to take a default value
// // default arguments should proceed the definite arguments

// function greet(name:string, city: string ="Chennai"){
//     console.log(`Name: ${name} City: ${city}`)
// }

// greet("Manohar")
// greet("Mani", "Delhi")


// function greetings(name:string, city: string ="Chennai"){
//     console.log(`Name: ${name} City: ${city}`)
// }

// greetings("Naveen");

// //Optional Arguments

// function welcome(name:string, city?: string){
//     console.log(`Name: ${name} City: ${city}`)
// }

// welcome("Muthu")

// function combine(name:string, email?:string, city:string = "Chennai"){
// console.log(`Name: ${name} Email: ${email} City: ${city}`)
// }

// function combines(name:string, city:string = "Chennai", email?:string){
// console.log(`Name: ${name} Email: ${email} City: ${city}`)
// }

// combine("Rajnikanth")
// combines("Rajnikanth")

//Rest Parameters
function sayHello(...names:any[]){
    let branch:string ="T.Nagar";
    for(let i=0; i<names.length; i++){
    console.log(`Welcome to the playwright session ${names[i]}.\nYou are attending the session from ${branch} Branch`)
    console.log()
    }
    
    for(let name of names){
    console.log(`Welcome to the playwright session ${name}.\nYou are attending the session from ${branch} Branch`)
    console.log()
    }
}

sayHello("Mahalakshmi","Divya","Mani","Karan")