let factor1 = 0, factor2 = 1, fibo = 0, sum = 0;

while (fibo < 4000000) {
    fibo % 2 == 0 ? sum += fibo : "";
    fibo = factor1 + factor2;
    factor1 = factor2;
    factor2 = fibo;
}

console.log(sum);