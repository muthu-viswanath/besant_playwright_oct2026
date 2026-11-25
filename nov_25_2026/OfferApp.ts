import { Student } from "./Student";
import { Employee } from "./Employee";
import { Citizen } from "./Citizen";
import { Person } from "./Person";

class OfferApp {

    displayDiscount(p: Person) {
        if (p instanceof Student) {
            console.log(`${p.name} gets 25% discount`)
        }
        else if (p instanceof Employee) {
            console.log(`${p.name} gets 15% discount`)
        }
        else if (p instanceof Citizen) {
            console.log(`${p.name} gets 5% discount`)
        }

    }
}

let off = new OfferApp()
let emp = new Employee("Modi",new Date('10/11/2010'))
let stu = new Student("Rahul",new Date('10/10/2020'))
let cit = new Citizen("Vijay",new Date('11/12/2310'))
off.displayDiscount(emp)
off.displayDiscount(stu)
off.displayDiscount(cit)