let product = [{
    id:1001,
    name:'Mouse',
    category: 'Electronics',
    price: 650.00,
    stock:50
}]

for(let key in product){
    console.log(`${key} | ${product[key as keyof typeof product]}`)
}

console.log()
console.log("Printing using of: ")

for(let prd of product){
console.log(`${prd.id}`)
console.log(`${prd.name}`)
console.log(`${prd.price}`)
console.log(`${prd.category}`)
}