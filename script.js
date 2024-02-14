window.addEventListener("load",addListeners)

function addListeners(){
  document.getElementById("btnHealthPage").addEventListener("click",ToHealth)
  document.getElementById("btnInterCalc").addEventListener("click",ToCalc)
  document.getElementById("btnEduGame").addEventListener("click",ToGame)
  document.getElementById("btnSearchEng").addEventListener("click",ToSearch)
}

function ToHealth(){
  window.location.href = "\game.html";
}

function ToCalc(){
  window.location.href = "\game.html";
}

function ToGame(){
  window.location.href = "https://main-game-page.glitch.me/";
}

function ToSearch(){
  window.location.href = "https://main-search-engine.glitch.me/";
}