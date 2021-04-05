let a = 0,
    b = 0,
    c = 0;

loop1:   
for(let i = 1; i < 1000; i++){
loop2:   
    for(let j = 1; j < 1000; j++){
        c =  Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
        if ( i + j + c == 1000 ){
            console.log("FOUND!");
            a = i;
            b = j;
            break loop1;
        }
    }
}

console.log(`A: ${a} B: ${b} C: ${c}`);
console.log(a * b * c);