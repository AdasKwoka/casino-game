class Game {
  constructor(money) {
    document.querySelector("form button").addEventListener("click", this.startGame.bind(this));
    this.wallet = new Wallet(money);
    this.statistics = new Statistics();
    this.bidInput = document.querySelector("#bid")
    this.boards = document.querySelectorAll(".board");
    this.moneyInWallet = document.querySelector("h2 .wallet");
    this.spanAlert = document.querySelector("span.alert");
    this.spanGames = document.querySelector("span.games");
    this.spanWins = document.querySelector("span.wins");
    this.spanLosses = document.querySelector("span.losses");
    this.render();
  }

  render(colors = ["#ccc","#ccc","#ccc"], wallet = this.wallet.getMoney(), result = "", win = 0, bid = 0, stats = [0,0,0]) {
    this.boards.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
    })

    this.moneyInWallet.textContent = wallet;

    if(result) {
      this.spanAlert.textContent = `Gratulacje!!! Wygrałeś ${win} $. `;
      this.spanAlert.style.color = "green";
    } else if(!result && result !== "") {
      this.spanAlert.textContent = `Ale pech!!! Przegrałeś ${bid} $. `
      this.spanAlert.style.color = "red";
    }

    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];

    this.bidInput.value = "";
  }

  startGame(e) {
    e.preventDefault(); 
    const bid = Math.floor(this.bidInput.value);
    if(bid < 1) return alert("Zbyt mała stawka");
    if(!this.wallet.checkCanPlay(bid)) return alert("Zbyt mało środków na koncie");

    this.wallet.changeWallet(bid, "-");
    
    const draw = new Draw()
    const colors = draw.getColors();
    
    const result = Result.checkResult(colors);
    const win = Result.winMoney(bid, result);

    this.wallet.changeWallet(win);

    this.statistics.addGameToStatistics(win, result);
    this.render(colors, this.wallet.getMoney(), result, win, bid, this.statistics.showGameStatistics());
  }
}