let num1 = 999, 
    num2 = 999,
    product = 1,
    largest_palin = 0;
    

while(num1 > 99){
    product = num1 * num2;

    if(checkPalindrome(product)){
        if(product > largest_palin){
            largest_palin = product;
        }
    }


    if(num2 == 100){
        num1 = num1 - 1;
        num2 = 999;
    } else {
        num2 = num2 - 1;
    }
    
}

console.log(largest_palin);


function checkPalindrome(num){
    let reversed_num = reverse_num(num);
    if(reversed_num == num){
        return true;
    } else {
        return false;
    }
}

function reverse_num(num){
    return(
        parseInt(num.toString().split('').reverse().join(''))
    )
}



