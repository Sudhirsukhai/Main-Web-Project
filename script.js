window.addEventListener("load",addListeners)

function addListeners(){
  document.getElementById("btnHealthPage").addListener("click",ToHealth)
  document.getElementById("btnInterCalc").addListener("click",ToCalc)
  document.getElementById("btnEduGame").addListener("click",ToGame)
  document.getElementById("btnSearchEng").addListener("click",ToHealth)
}

function ToHealth(){
  window.location.href = "Health.html";
}

function ToCalc(){
  window.location.href = "Calc.html";
}

function ToGame(){
  window.location.href = "Game.html";
}

function ToSearch(){
  window.location.href = "Search.html";
}