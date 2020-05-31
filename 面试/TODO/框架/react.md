说说 react diff 算法 https://www.youtube.com/watch?v=mLMfx8BEt8g&list=LLW1-feTVZahNuAcgfdau6ug&index=2&t=0s
写一下 diff 算法。
讨论了一下我写的 diff 算法的一些细节。
MVVM 了解多少。原理明白么？
讲一下 MVVM
在 React 中有几种创建组件的方式
function 组件和 class 组件

react 开发用的是 hook 么？ 不是，那说一下生命周期
react hooks 了解过吗？
hook 的限制 hook 能否用于受控组件【ref】

react 的生命周期
4.react 在列表渲染的时候用 key 是什么原因
SSR
6.react 的纯组件，非纯组件
react 16 的新特性

react 怎么优化
react-router 如何工作？如果输入 '/a/b/c/index.html'应该怎么处理 (用 Switch 来处理,并且可以用 exact,<Linkto=""><Link/>)
react 优化方式 (shouldComponentUpdate 是给我们的优化方式,react.memo)
React.memo 原理

https://juejin.im/post/5e61136ee51d4527196d6019

happypack 原理 【多进程打包 又讲了下进程和线程的区别】
css module 【给样式开启模块化 避免样式污染】
React 的 Loadable 核心 （import() 本质上和 React.lazy 和 Suspense 原理相似）
Dynamic Import （Loadable 的原理之一）
微前端路由设计 多个 SPA 根据 URL 变化改变 路由解决方案 【自己答得是用 Nginx 做匹配 本质上不算是 SPA 内进行改进，面试官说可以用 Dynamic Import】

redux 用过吗？
Redux Vuex Context 原理比较
Redux Context 的区别 和使用场景
redux 的原理 APP dispatch store
redux 开发用过么 https://www.youtube.com/watch?v=CVpUuw9XSjY&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=5

响应式的原理
react 的纯组件，非纯组件

5.static 方法 getDerivedStatesFromProps() 为什么是 static,为什么要用这个方法
6.high order component 的好处 本质上是一个代码复用，相当于一个 decorator，装饰器模式
pure function pure component
平时把什么当成一个函数
7.react 性能优化
redux 项目
首屏，白屏
懒加载 滚动跟白屏和首屏有什么关系
雪碧图跟白屏有什么关系
你把需求做出来以后额外做出来的是什么样的？
性能优化 你没有讲出优化了多少，你只是常规的方法压缩了一下体积
Vue 和 React 的区别
react 在列表渲染的时候用 key 是什么原因
redux 用过吗？
router 的原理 具体是怎么实现的吗？
vue 的响应式是怎么实现的吗？

8.还有没有其他的方式去实现双向绑定
我的回答是通过订阅和发布模式 9.订阅/发布模式 和 观察者模式有什么区别

你觉得 React 和 Vue 有什么共通之处？

React 受控组件和非受控组件的区别
