import {Citizen} from "./Citizen"

export class Users extends Citizen{

    displaySSN(){
        console.log(this.ssn);
        console.log(this.getFullName());
    }

    describe(): void {
        console.log(`I am jobless`);
    }

    show(){
        console.log("This is sub class specific method");
    }

}