<!-- 缓存 -->

设计 etag 算法

<!-- 状态码 -->

301 302 304 503 502 401,403，403 和 401 不一样的地方在哪里，301 和 302 呢，浏览器会有什么变化，应用在哪里

<!-- 跨域 -->

Nginx 反向代理
跨域携带 cookie

<!-- TCP UDP -->

如何做 TCP 拥塞控制
TCP 的拥塞控制是怎么做的
TCP 如何实现数据的可靠性传输（滑动窗口和拥塞控制）

<!-- HTTP HTTPS -->

简述 https 原理，以及与 http 的区别
你知道哪些 http 头部
怎么与服务端保持连接
http 请求跨域问题，你都知道哪些解决跨域的方法
你了解哪些请求方法，分别有哪些作用和不同
https 和 http2.0 的区别

<!-- cookie session localStorage -->

前端缓存（存储）类型、SessionStorage 可以跨页面访问吗
是否可以跨域获取缓存
追问双重 cookie 原来 cookie 是在哪的 为什么双重 cookie 就可以解决 csrf
cookie 有哪些属性
cookie,session,localstorage,sessionstorage 有什么区别
怎么禁止 js 访问 cookie

<!-- 其他 -->

说说你对 html、css、js 的理解，css 和 js 是串行还是并行。
浏览器请求数据问题，请求数据到请求结束与服务器进行了几次交互
在交互过程中如果数据传送完了，还不想断开连接怎么办，怎么维持
websocket 与 ajax 的区别
fetch API 与传统 request 的区别
反码补码了解吗
Chrome 的内存机制讲一下
content-type：From-data、json 等 及其之间的区别
操作系统中进程和线程怎么通信
node 中 cluster 是怎样开启多进程的，并且一个端口可以被多个进程监听吗
options 请求方法有什么用

GET 和 POST 的区别
POST 的请求体有几种形式 你知道的常见的 content-type 有那些
文件上传用什么样的 content-type 会合适
上传图片
content-length 是干什么用的吗？

浏览器有跨域的机制 跨域大概是什么概念吗？
简单请求 复杂请求 options 请求头 \*有没有什么安全问题吗？
你提到了 CSRF，你有了解过什么是 CSRF 吗？
伪造请求是怎么做的 如果你通过 CSRF 来攻击一个网站，你会怎么做呢
那还了解过其他的安全问题呢 XSS 攻击是什么呢
怎么防范呢
TCP3 次握手
为什么要 4 次握手
发起挥手的会进入一个状态 time-wait 它会做什么，关掉这个链接 定时器
保证可靠性有什么方法来实现这个机制
什么是 window size
解释一下拥塞机制 重传机制
MTU 是什么或者说一个 TCP 的包可以传多少个字节 过大或者过小会有什么影响
HTTP 是基于 TCP 的 你会怎么样实现面对 TCP 链接实现一个 HTTP 协议
当时学计算机网络的时候是否用过 websocket,socket 来写过东西 websocket 和 socket 不是一个东西
