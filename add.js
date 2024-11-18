function primeNo(arr){
    let primNumber = [];
    
    if(arr[i]<2) isprime=false;
    for(let i=3;i<arr.length;i++){
        let isprime = true;
        for(let j=2;j<arr[i];j++){
            if(arr[i]%j===0) isprime=false;
        }
        if(isprime===true) primeNumber.push(arr[i]);
    }
   let min = primNumber[0];
    let max = primNumber[0];
    let sum = 0;
    for(let i=0;i<primeNumber.length;i++){
        if(primNumber[i]<min) min = primNumber[i];
        if(primNumber[i]>max) max = primNumber[i];
        sum += primNumber[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum);
}