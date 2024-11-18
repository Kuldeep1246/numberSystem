function evenOddNumber(n,arr){
    let evenNo = [];
    let oddNo = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 === 0) evenNo.push(arr[i]);
        else oddNo.push(arr[i]);
    }
    console.log("Even Numbers : ",evenNo);
    console.log("Odd Number : ",oddNo);
}