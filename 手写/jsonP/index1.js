function jsonP({ url, params, callbackName }) {
  function generateURL() {
    let dataStr = "";
    for (let key in params) {
      dataStr = `${key}=${params[key]}&`;
    }
    dataStr += `callback=${callbackName}`;
    url = `${url}?${dataStr}`;
  }
 

  return new Promise((resolve, reject) => {
     callbackName=callbackName || Math.random().toString.replace(",", "");
     let scriptEle=document.createElement('script');
     scriptEle.type='text/javascript';
     scriptEle.src= generateURL();
     document.body.appendChild(scriptEle);
     window[callbackName]=function(data){
         resolve(data);
     }
  })
}

// 前端这样简单地调用一下就好了:
jsonP({
  url: "https://itunes.apple.com/search",
  params: {
    term: "jsck+johnson",
    limit: 5,
  },
}).then((data) => {
  // 拿到数据进行处理
  console.log(data); // 数据包
});
