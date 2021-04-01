let num = 2, // starting from 2 because 1 is not considered a prime number
    factorCounter = 0,
    lastPrime = 0,
    primeCounter = 0;

//to find the 10001th prime number
while(primeCounter != 10001){  
    factorCounter = 0;
    for(let i= 1; i <= num; i++){
        //restting factorCounter for a new number      
        if(num % i == 0){
            
            //counting factors of a number
            factorCounter = factorCounter + 1;       
        }
        if(factorCounter > 2){
            break;
        }
    }
    //if num has more than 2 factors, it's not a prime
    if(factorCounter > 2){
        num++;
    } else { //if it's a prime we're counting it
        lastPrime = num;
        primeCounter++;
        num++;
    }
}

console.log(`The ${primeCounter}th prime is: ${lastPrime}`);




