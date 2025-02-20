let a = ["Steven","Tony","Bruce Wanyen","Mark","Chis"];
let longest = a[0];
for(let i=0; i<a.length; i++){
    if(a[i].length > longest.length){
        longest = a[i];
    }
}

console.log("The Longest String is : "+longest);