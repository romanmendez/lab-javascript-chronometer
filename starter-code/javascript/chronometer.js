class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick(){
    this.intervalId = setInterval(function(){
      this.currentTime += 1;
    }.bind(this), 1000)
  }
  getMinutes(){
    return Math.floor(this.currentTime / 60)
  }
  getSeconds(){
    return this.currentTime % 60
  }
  twoDigitsNumber(value){
    if (value < 10){
      return "0" + value;
    } else {
      return "" + value;
    }
  }
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}