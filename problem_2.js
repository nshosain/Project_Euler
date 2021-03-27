let factor_1 = 0, factor_2 = 1, fibo = 0, sum = 0;

while (fibo < 4000000) {
    fibo % 2 == 0 ? sum += fibo : "";
    fibo = factor_1 + factor_2;
    factor_1 = factor_2;
    factor_2 = fibo;
}

console.log(sum);