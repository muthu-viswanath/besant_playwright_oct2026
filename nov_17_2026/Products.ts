let prod = {
    prod_id: 123,
    prod_name: "Keyboard",
    prod_price: 2345.45
}

for (let fields in prod) {
    console.log(`${fields} - ${prod[fields as keyof typeof prod]}`)
}


let prod_list = [{
    prod_id: 123,
    prod_name: "Keyboard",
    prod_price: 2345.45
},
{
    prod_id: 234,
    prod_name: "projector",
    prod_price: 23452.45
}]

for(let pr of prod_list){
    console.log(`${pr.prod_id} | ${pr.prod_name} | ${pr.prod_price}`)
}