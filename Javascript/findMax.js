let a = [52,45,32,49,76,100,695,35];
let max1 = a[0];
let max2 = a[0];

for(let i=0; i<a.length; i++){
    if(a[i] > max1){
        max2 = max1;
        max1 = a[i];
    }

    if(a[i] > max2 && a[i] != max1){
        max2 = a[i];
    }
}

if(max1 != max2){
    console.log("Second maximum number is: "+max2);
}
