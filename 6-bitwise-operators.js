const getMaxLessThanK = (n,k) =>{
    let max = 0;
    
    for (let i = 1; i <= n; i++) {
        for(let j = i+1; j <=n; j++) {
            // do the bitwise operation
            let temp = i & j;
   
             max = (temp<k && temp > max)? temp : max;
       }
       }
       return max;
   }