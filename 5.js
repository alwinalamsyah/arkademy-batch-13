var pair=0;
pairshock=(a=[1,4,4,4,2]) => {
    a.sort(function (a,b){
     return a-b   
    })
    
for(i=0;i<a.length;i++){
    if(a[i]===a[i+1]){
        pair++;
        i++;
    }
       }
       return `${pair} pairs`
}


console.log(pairshock());