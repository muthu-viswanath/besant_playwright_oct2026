export class Citizen{
    protected ssn: string;
    private first_name: string;
    private last_name: string;
    private job:string;

    constructor(ssn:string, first_name:string, 
        last_name:string, job:string){
        this.first_name = first_name;
        this.ssn = ssn;
        this.last_name = last_name;
        this.job = job;
    }

    getFullName():string{
        return `${this.first_name} ${this.last_name} 
        - SSN : ${this.ssn}`
    }

    describe(){
        console.log(`I am working as ${this.job}`)
    }
}
