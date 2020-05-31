function IsPopOrder(pushV, popV) {
	
	if (pushV.length == 0 || popV.length == 0) {
		return;
	}
	
	var stack = [];
	var index = 0;
	for (var i = 0; i < pushV.length; i++) {
		if (pushV[i] == popV[index]) {
			index++;
			while (stack.length > 0 && stack[stack.length - 1] == popV[index])            {
				stack.pop();
				index++;
			}
		} else {
			stack.push(pushV[i]);
		}
	}
	
	if (stack.length == 0) {
		return true;
	} else {
		return false;
	}
}

let pushOrder = [1, 2, 3, 4, 5];
let popOrder = [4, 5, 3, 2, 1];
let res = IsPopOrder(pushOrder, popOrder);
console.log(res);
