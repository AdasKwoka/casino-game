class Statistics {
  constructor() {
    this.playResults = [];
  }

  addGameToStatistics(bid, result) {
    let gameResult = {
      bid,
      result,
    }
    this.playResults.push(gameResult);
  }

  showGameStatistics() {
    let games = this.playResults.length;
    let wins = this.playResults.filter(item => item.result).length;
    let losses = this.playResults.filter(item => !item.result).length;
    return [games, wins, losses];
  }
}