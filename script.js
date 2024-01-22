window.addEventListener("load",addListeners)

function addListeners(){
  document.getElementById("btnHealthPage").addEventListener("click",ToHealth)
  document.getElementById("btnInterCalc").addEventListener("click",ToCalc)
  document.getElementById("btnEduGame").addEventListener("click",ToGame)
  document.getElementById("btnSearchEng").addEventListener("click",ToHealth)
}

function ToHealth(){
  window.location.replace("https://health-page.glitch.me/");
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