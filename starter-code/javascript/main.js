var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');
var splitNumber = 1;
var minutes     = 0;
var seconds     = 0;
var miliseconds = 0;


function printTime() {
  return  chronometer.twoDigitsNumber(minutes) + ":" + chronometer.twoDigitsNumber(seconds) + ":" + chronometer.twoDigitsNumber(miliseconds)
}

function clearTime() {
  chronometer.resetClick()
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  setInterval(function(){
    minutes = chronometer.getMinutes()
    if(minutes < 10){
      minDec.innerText = "0"
      minUni.innerText = minutes
    } else {
      minDec.innerText = Math.floor(minutes / 10)
      minUni.innerText = minutes % 10
    }
  }, 100)
}
function printSeconds() {
  setInterval(function(){
    seconds = chronometer.getSeconds()
    if(seconds < 10){
      secDec.innerText = "0"
      secUni.innerText = seconds
    } else {
      secDec.innerText = Math.floor(seconds / 10)
      secUni.innerText = seconds % 10
    }
  }, 100)
}

function printMilliseconds() {
  setInterval(function(){
    miliseconds = chronometer.getMiliseconds()
    if(miliseconds < 10){
      milDec.innerText = "0"
      milUni.innerText = miliseconds
    } else {
      milDec.innerText = Math.floor(miliseconds / 10)
      milUni.innerText = miliseconds % 10
    }
  })
}

function printSplit() {
  let newLi = document.createElement('li')
  newLi.setAttribute("id", "split" + splitNumber)
  splits.append(newLi)
  newLi.innerText = printTime()
  splitNumber ++;
}

function clearSplits() {
  for (let i = 1; i < splitNumber; i++){
    let allLi = document.getElementById("split" + i)
    splits.removeChild(allLi)
  }
  splitNumber = 1;
}

function setStopBtn() {
  btnLeft.className = "btn stop"
  btnLeft.innerText = "STOP"
}

function setSplitBtn() {
  btnRight.className = "btn split"
  btnRight.innerText = "SPLIT"
}

function setStartBtn() {
  btnLeft.className = "btn start"
  btnLeft.innerText = "START"
}

function setResetBtn() {
  btnRight.className = "btn reset"
  btnRight.innerText = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.className == "btn start"){
    chronometer.startClick()
    setStopBtn()
    setSplitBtn()
    printSeconds()
    printMinutes()
    printMilliseconds()
  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.className == "btn reset"){
    clearSplits()
    clearTime()
  } else {
    printSplit()
  }
});
