//Greet the user with optional Title

//greetUser("Arun")
//greetUser("Anshuman", "Dr.")

// Hello, Arun
// Hello, Dr.Anshuman


function greetUser(name:string, title?:string):string{
    return title?`Hello, ${title} ${name}`:`Hello, ${name}`
}

console.log(greetUser("Arun"))
console.log(greetUser("Anshuman", "Dr."))