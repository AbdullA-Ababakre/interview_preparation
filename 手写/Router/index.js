// https://ke.qq.com/course/360028?taid=2724967771111004
class Router {
  _routes = [];

  //mode是哈希模式还是History模式
  constructor(routes, mode) {
    this._routes = routes;
  }

  //改变URL并新增一条历史记录
  push() {}

  // 改变URL但替换当前的历史记录
  replace() {}

  go() {}

  forward() {}

  back() {}
}
