let sum = 0;
let n = 10;
for(let i=1; i<=n; i++){
    sum = sum + i;
}
console.log("----------------------------------");
console.log("For loop");
console.log("----------------------------------");
console.log("The sum of "+n+" number is: "+sum);

console.log("");
console.log("");
let a = 10;
let i = 0;
console.log("-----------------------------------");
console.log("While loop");   
console.log("-----------------------------------");
while(i<=a){
    i=i+2;
    if(i==a){
        console.log("i is equal to a");
    }
    if(i<a){
        console.log(i+" is smaller than "+a);
    }
}

if(i > a){
    console.log("Finally i is Greater than a.")
}
else if(i == a){
    console.log("Both are equal.");
}
else{
    console.log("I get closer but can't beat a.");
}


