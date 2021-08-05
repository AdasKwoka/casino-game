class Draw {
  constructor() {
    let _colors = [];

    this.getColors = () => {
      this.drawColors();
      return _colors;
    }

    this.drawColors = () => {
      const colorsToDraw = ["red", "green", "blue"];
      for(let i = 0; i < colorsToDraw.length; i++) {
        const index = Math.floor(Math.random() * colorsToDraw.length);
        _colors.push(colorsToDraw[index]);
      }
    }
  }
}

