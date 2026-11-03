function display(name:string, fact:boolean, age:number=20){
console.log(name + " | " + age + " | " + fact);
}

display("Muthu",true,100)


function test(email:string, contact:number, whatsapp?:number){
console.log("Email: " + email + " | " + "Whatsapp " + whatsapp + "Contact: " + contact);
}

test("muthuviswanath@outlook.com", 7904093412);


//Rest Parameter
function greetings(...names:any[]){
   console.log(names)
}
let emp = {
    name:"Muthu",
    age:23
}

greetings(23);
greetings(23, 45, 67);
greetings(emp);
