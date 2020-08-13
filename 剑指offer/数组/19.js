// https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a?tpId=13&&tqId=11172&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function printMatrix(matrix) {
  let list = [];
  let up = 0;
  let left = 0;
  let right = matrix[0].length - 1;  //3
  let down = matrix.length - 1;  //3

  while (true) {
    for (let col = left; col <=right; col++) {
      list.push(matrix[up][col]);
    }
    up++;
    if (up > down) {
      break;
    }
    for (let row = up; row <=down; row++) {
      list.push(matrix[row][right]);
    }
    right--;
    if (left > right) {
      break;
    }
    for (let col = right; col >= left; col--) {
      list.push(matrix[down][col]);
    }
    down--;
    if (up > down) {
      break;
    }
    for (let row = down; row >= up; row--) {
      list.push(matrix[row][left]);
    }
    left++;
    if (left > right) {
      break;
    }
    
  }
  return list;
}

let res=printMatrix(arr);
console.log(res);
