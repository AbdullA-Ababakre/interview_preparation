// function count(str){
//     let obj={};
//     for(let i=0;i<str.length;i++){
//         let curChar=str[i];
//         if(obj[curChar]){
//              obj[curChar]++;
//         }else{
//            obj[curChar]=1; 
//         }
//     }
//     return obj;
// }
// 
// 
// let res=count('javaScript');
// console.log(res);
function unique(arr){
    let set=new Set(arr);
    console.log(set);
}

unique([10,2,3,4,2,10]);