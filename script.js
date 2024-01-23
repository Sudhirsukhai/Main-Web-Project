window.addEventListener("load",addListeners)

function addListeners(){
  document.getElementById("btnHealthPage").addEventListener("click",ToHealth)
  document.getElementById("btnInterCalc").addEventListener("click",ToCalc)
  document.getElementById("btnEduGame").addEventListener("click",ToGame)
  document.getElementById("btnSearchEng").addEventListener("click",ToHealth)
}

function ToHealth(){
  window.location.href = "https://health-page.glitch.me/";
}

function ToCalc(){
  window.location.href = "https://main-interactive-calculator.glitch.me/";
}

function ToGame(){
  window.location.href = "https://main-interactive-calculator.glitch.me/";
}

function ToSearch(){
  window.location.href = "Search.html";
}