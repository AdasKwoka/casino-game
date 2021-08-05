class Wallet {
  constructor(money) {
    let _money = money;

    this.getMoney = () => _money;

    this.checkCanPlay = (value) => {
      if(_money >= value) return true;
      else return false;
    }

    this.changeWallet = (bid, type = "+") => {
      if(typeof bid === "number" && bid !== NaN) {
        if(type === "+") {
          _money += bid;
        }else if(type === "-") {
          _money -= bid;
        }else {
          throw new Error("Nieprawidłowy typ działania");
        }
      } else {
        throw new Error("Nieprawidłowa wartość stawki");
      }
    }
  }
}