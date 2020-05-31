// 实现一个函数a，使其奇数次调用时返回1，偶数次调用时返回2（不能使用全局变量）
// // example
// a(); // 1
// a(); // 2
// a(); // 1
// a(); // 2

function a(){
    let count=0;
    return function (){
        count++;
        if(count%2===1){
            console.log(1);
        }else{
            console.log(2);
        }
    }
}


a()();
a();
a();
a();