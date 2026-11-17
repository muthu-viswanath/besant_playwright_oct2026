/*
10

10 = 3 + 7
10 = 5 + 5
10 = 7 + 3

*/

function isPrime(num:number):boolean{
let factor:number = 0;
for(let i=1; i<=num; i++){
    if(num%i == 0){
        factor++;
    }
}
return factor==2?true:false;
}

function display(num: number){
for(let i=2; i<=num; i++){
    if(isPrime(i) && isPrime(num-i)){
        console.log(`${num} = ${i} + ${num-i}`)
    }
}
}

display(10);