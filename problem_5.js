let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let divider = 2,
    counter = 0,
    changeDivider = false,
    lcm = 1,
    looper = Math.max(...data) + data.length;

while(looper >= 0){
    if(changeDivider == true){
        divider++;
        changeDivider = false;
    }
    for(let i = 0; i < data.length; i++){
        if(data[i] % divider == 0){
            data[i] = data[i] / divider;
            counter++;
        }
    }
    
    if(counter > 0){
        counter = 0;
        lcm = lcm * divider;
    } else {
        changeDivider = true;
    }

    looper--;
}

console.log("LCM: " + lcm);


