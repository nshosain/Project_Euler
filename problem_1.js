
let i, sum = 0;
for (i = 0; i < 1000; i++) {
    ((i % 3 == 0) || (i % 5 == 0)) ? sum += i : " ";
}

console.log(sum);