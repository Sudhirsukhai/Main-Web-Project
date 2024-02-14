window.addEventListener("load",AddList)
var ans1;
var ans2;
var ans3;
var ans4;
var ans5;
var ans6;
var ans7;
var ans8;
var ans9;
var ans10;
var arrayAns;
var CurrIndex;
var Correct;
var G1Key = ["d","a","c","i","j","f","b","h","g","e"];
var G2Key = ["d","b","g","f","c","j","a","h","i","e"];
var G3Key = ["d","b","a","a","a","d","b","b","b","a"];
var G4Key = ["53.13","1.75","21.07","","","","","","",""]

function AddList(){
  document.getElementById("Game4").style.display = "none"
  document.getElementById("Game3").style.display = "none"
  document.getElementById("Game2").style.display = "none"
  document.getElementById("Game1").style.display = "none"
  document.getElementById("Results").style.display = "none"
  document.getElementById("btnChem").addEventListener("click",Chem)
  document.getElementById("btnGame1Submit").addEventListener("click",Submit1)
  document.getElementById("btnLivingEnv").addEventListener("click",LivEnv)
  document.getElementById("btnGame2Submit").addEventListener("click",Submit2)
  document.getElementById("btnAlgebra").addEventListener("click",Alg)
  document.getElementById("btnGame3Submit").addEventListener("click",Submit3)
  document.getElementById("btnTrig").addEventListener("click",Trig)
  document.getElementById("btnGame4Submit").addEventListener("click",Submit4)
}

function Chem(){
  document.getElementById("MainSelectors").style.display = "none"
  document.getElementById("H1").style.display = "none"
  document.getElementById("Game1").style.display = "block"
}

function Submit1(){
  document.getElementById("Game1").style.display = "none"
  ans1 = document.getElementById("Chem1").value
  ans2 = document.getElementById("Chem2").value
  ans3 = document.getElementById("Chem3").value
  ans4 = document.getElementById("Chem4").value
  ans5 = document.getElementById("Chem5").value
  ans6 = document.getElementById("Chem6").value
  ans7 = document.getElementById("Chem7").value
  ans8 = document.getElementById("Chem8").value
  ans9 = document.getElementById("Chem9").value
  ans10 = document.getElementById("Chem10").value
  arrayAns = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10]
  CurrIndex = 0
  Correct = 0
  while (CurrIndex != 10){
    if (arrayAns.at(CurrIndex) == G1Key.at(CurrIndex)){
      CurrIndex = CurrIndex + 1
      Correct = Correct+1
    }else{
      CurrIndex += 1
    }
  }
  
  document.getElementById("Results").style.display = "block"
  document.getElementById("lblscore1").innerText = Correct
  document.getElementById("lblscore2").innerText = "Correct"
}

function LivEnv(){
  document.getElementById("MainSelectors").style.display = "none"
  document.getElementById("H1").style.display = "none"
  document.getElementById("Game2").style.display = "block"
}

function Submit2(){
  document.getElementById("Game2").style.display = "none"
  ans1 = document.getElementById("LivEnv1").value
  ans2 = document.getElementById("LivEnv2").value
  ans3 = document.getElementById("LivEnv3").value
  ans4 = document.getElementById("LivEnv4").value
  ans5 = document.getElementById("LivEnv5").value
  ans6 = document.getElementById("LivEnv6").value
  ans7 = document.getElementById("LivEnv7").value
  ans8 = document.getElementById("LivEnv8").value
  ans9 = document.getElementById("LivEnv9").value
  ans10 = document.getElementById("LivEnv10").value
  arrayAns = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10]
  CurrIndex = 0
  Correct = 0
  while (CurrIndex != 10){
    if (arrayAns.at(CurrIndex) == G2Key.at(CurrIndex)){
      CurrIndex = CurrIndex + 1
      Correct = Correct+1
    }else{
      CurrIndex += 1
    }
  }
  
  document.getElementById("Results").style.display = "block"
  document.getElementById("lblscore1").innerText = Correct
  document.getElementById("lblscore2").innerText = "Correct"
}

function Alg(){
  document.getElementById("MainSelectors").style.display = "none"
  document.getElementById("H1").style.display = "none"
  document.getElementById("Game3").style.display = "block"
}

function Submit3(){
  document.getElementById("Game3").style.display = "none"
  ans1 = document.getElementById("Alg1").value
  ans2 = document.getElementById("Alg2").value
  ans3 = document.getElementById("Alg3").value
  ans4 = document.getElementById("Alg4").value
  ans5 = document.getElementById("Alg5").value
  ans6 = document.getElementById("Alg6").value
  ans7 = document.getElementById("Alg7").value
  ans8 = document.getElementById("Alg8").value
  ans9 = document.getElementById("Alg9").value
  ans10 = document.getElementById("Alg10").value
  arrayAns = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10]
  CurrIndex = 0
  Correct = 0
  while (CurrIndex != 10){
    if (arrayAns.at(CurrIndex) == G3Key.at(CurrIndex)){
      CurrIndex = CurrIndex + 1
      Correct = Correct+1
    }else{
      CurrIndex += 1
    }
  }
  
  document.getElementById("Results").style.display = "block"
  document.getElementById("lblscore1").innerText = Correct
  document.getElementById("lblscore2").innerText = "Correct"
}

function Trig(){
  document.getElementById("MainSelectors").style.display = "none"
  document.getElementById("H1").style.display = "none"
  document.getElementById("Game4").style.display = "block"
}

function Submit4(){
  document.getElementById("Game4").style.display = "none"
  ans1 = document.getElementById("Trig1").value
  ans2 = document.getElementById("Trig2").value
  ans3 = document.getElementById("Trig3").value
  ans4 = document.getElementById("Trig4").value
  ans5 = document.getElementById("Trig5").value
  ans6 = document.getElementById("Trig6").value
  ans7 = document.getElementById("Trig7").value
  ans8 = document.getElementById("Trig8").value
  ans9 = document.getElementById("Trig9").value
  ans10 = document.getElementById("Trig10").value
  arrayAns = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10]
  CurrIndex = 0
  Correct = 0
  while (CurrIndex != 10){
    if (arrayAns.at(CurrIndex) == G4Key.at(CurrIndex)){
      CurrIndex = CurrIndex + 1
      Correct = Correct+1
    }else{
      CurrIndex += 1
    }
  }
  
  document.getElementById("Results").style.display = "block"
  document.getElementById("lblscore1").innerText = Correct
  document.getElementById("lblscore2").innerText = "Correct"
}