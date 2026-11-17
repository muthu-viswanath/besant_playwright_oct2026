/*
Using the numbers 1 2 3 4 write a typescript code to generate 
the following sequence. 

123 213 312 412
124 214 314 413
132 231 321 421
134 234 324 423
142 241 341 431
143 243 342 432

Total: 24
*/
let count:number = 0;
for(let i=1; i<=4; i++){
    for(let j=1; j<=4; j++){
        for(let k=1; k<=4; k++){
            if(i!=k && i!=j && j!=k){
                console.log(`${i}${j}${k}`)
                count++;
            }
        }
    }
}
console.log("Total count:" + count)