function instanceOf(L, R) {
  let L = L.__proto__;
  let R = R.prototype;
  while (true) {
    if (L === null) {
      return false;
    }

    if (L === R) {
      return true;
    }

    L = L.__proto__;
  }
}


