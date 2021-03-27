let original_number = 62;
let temp = original_number;

while (temp % 2 == 0) {
    temp = temp / 2;
    console.log(2);
}

let i;
for (i = 3; i < Math.sqrt(original_number); i = i + 2) {
    if (temp % i == 0) {
        temp = temp / i;
        console.log("divided by: " + i);
        console.log("temp: " + temp);
    }
}

console.log("fuck!");