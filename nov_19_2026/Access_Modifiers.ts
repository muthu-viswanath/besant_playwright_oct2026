class Laptop{
    private laptop_id:number;
    private warranty_date:Date;

    constructor(laptop_id:number,warranty_date:Date){
        this.laptop_id = laptop_id;
        this.warranty_date = warranty_date;
    }

    getData(){
        console.log(`Laptop Id: ${this.laptop_id} | Warranty Date: ${this.warranty_date}`)
    }
}

let Lenovo_Laptop = new Laptop(123,new Date(2045,4,12));
Lenovo_Laptop.getData()

console.log(Lenovo_Laptop.warranty_date)