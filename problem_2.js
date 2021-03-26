let num1 = 0, num2 = 1, fibo = 0, sum = 0;

while (fibo < 4000000) {
    fibo % 2 == 0 ? sum += fibo : "";
    fibo = num1 + num2;
    num1 = num2;
    num2 = fibo;
}

console.log(sum);