let original_number = 600851475143;
let reminder = original_number;
let last_factor = 1;

while (reminder % 2 == 0) {
    reminder = reminder / 2;
}

let i;
for (i = 3; i < Math.sqrt(original_number); i = i + 2) {
    if (reminder % i == 0) {
        reminder = reminder / i;
        last_factor = i;
    }
}

if (last_factor > reminder) {
    console.log(last_factor);
} else {
    console.log(reminder);
}