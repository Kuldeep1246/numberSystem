function primeNo(arr){
    let primNumber = [];
    
    
    for(let i=1;i<arr.length;i++){
      
        let isprime = true;
        if(arr[i]<2) isprime=false;
        else{
        for(let j=2;j<arr[i];j++){
          if(arr[i]===2) primNumber.push(arr[i]);
          else if(arr[i]%j===0) isprime=false;
        }
        }
        if(isprime===true) primNumber.push(arr[i]);
    }
    console.log(primNumber)
   let min = primNumber[0];
    let max = primNumber[0];
    let sum = 0;
    for(let i=0;i<primNumber.length;i++){
        if(primNumber[i]<min) min = primNumber[i];
        if(primNumber[i]>max) max = primNumber[i];
        sum += primNumber[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum);
}