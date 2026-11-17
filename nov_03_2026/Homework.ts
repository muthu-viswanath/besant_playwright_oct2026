function createTestReport(project:string, ...testNames:string[]){
console.log(`Project: ${project}`)
console.log("Tests:")
let i:number = 1
    for(let names of testNames){
        console.log(`${i++}. ${names} Test`)
}
}

createTestReport("E-Commerce","Smoke","Regression","Load")


//Output:
/*
Project: E-Commerce
Tests:
1. Smoke Test
2. Regression Test
3. Load Test
*/