class Result {
  static winMoney(bid, result) {
    if(result) return bid * 3;
    else return 0;
  }

  static checkResult(colors) {
    if(colors[0] === colors[1] && colors[0] === colors[2] || colors[0] !== colors[1] && colors[0] !== colors[2] && colors[1] !== colors[2]) return true;
    else return false;
  }
}