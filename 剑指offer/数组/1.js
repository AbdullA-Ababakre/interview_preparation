// https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&&tqId=11154&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

let arr=[
    [1,2,3],
    [2,3,4],
    [3,4,5]
];

let num=5;

function Find1(target, array)
{
    if(array.flat().includes(target)){
        return true;
    }
    return false;
}

function Find2(target, array)
{
    if(array.flat().indexOf(target)>-1){
        return true;
    }
    return false;
}

let res=Find2(num,arr);
console.log("res",res);