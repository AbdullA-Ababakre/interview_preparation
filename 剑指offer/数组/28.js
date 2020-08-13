function MoreThanHalfNum_Solution(numbers)
{
    let obj={};
    for(let i=0;i<numbers.length;i++){
        let cur=numbers[i];
        if(obj[cur]){
            obj[cur]++
        }else{
            obj[cur]=1;
        }
    }
    // return obj;
    for(let key in obj){
        if(obj[key]>numbers.length/2){
           return Number(key);
        }
    }
    return 0;
}

let num=[1,2,3,2,2,2,5,4,2];
let res=MoreThanHalfNum_Solution(num);
console.log(res);
