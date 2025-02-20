let row = 3;
let pattern = "";
let col = 1;

for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
        pattern += j;
    }
    pattern += "\n"; // Move to the next line
    col += 2;
}

console.log(pattern);
