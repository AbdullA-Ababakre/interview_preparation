// let SusanModule=(
//    function(){
// 	   let name="Abdulla";
// 	   let surName="Ababakre";
// 	   return {
// 		   tell(){
//               console.log("我的姓名是 "+name);
// 			  console.log("我的父亲的名字是 "+surName);
// 		   }
// 	   }
//    }
// )();

// 立即执行函数表示的是它返回的东西
console.log(SusanModule);

(function(window) {
		let name = "Abdulla";
		let surName = "Ababakre";

		function tell() {
			console.log("我的姓名是 " + name);
			console.log("我的父亲的名字是 " + surName);
		}
		
		window.susanModule={tell};
})(window);
