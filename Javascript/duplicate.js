let duplicate = "Java Scripting and Java";
let found = "";
for(let i=0; i<duplicate.length; i++){
 let insideChar = duplicate.charAt(i);
 let count = duplicate.split(insideChar).length - 1;
 
 if(count == 2 && !found.includes(insideChar)){
    console.log(insideChar);
    found+=insideChar;
 }
}