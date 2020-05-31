console.log(1)
new Promise((resolve) => {
	resolve();
	console.log(2)
}).then(() => {
	console.log(3)
})

setTimeout(function(){
	console.log(4)
}, 0);

console.log(5)


