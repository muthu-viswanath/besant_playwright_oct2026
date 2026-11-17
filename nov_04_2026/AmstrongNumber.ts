// is 1,2,3,4,5,6,7,8,9 amstrong number?

function power(base:number, exp:number):number{
    let res = 1;
    for(let i=exp; i>0; i--){
        res = res * base
    }
    return res
}

function Amstrong(num: number):boolean{
    let temp = num;
    let no_of_digits = 0;

    while(temp !=0){
        temp = Math.floor(temp/10)
        no_of_digits ++;
    }
    console.log("Total number of digits: " + no_of_digits)
    
    let temp2 = num;
    let sum = 0;
    while (temp2 !=0){
        let digit = temp2 % 10;
        sum = sum + power(digit, no_of_digits)
        temp2 = Math.floor(temp2 / 10)
    }

    if(sum == num)
        return true
    else
        return false
}

let result:boolean = Amstrong(1634);
if(result)
    console.log("Given number is an amstrong number")
else
    console.log("Given number is not an amstrong number")