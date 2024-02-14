window.addEventListener("load",Addlist)
var Searched;
var L0;
var L1;
var L2;
var L3;
var L4; 
function Addlist(){
  document.getElementById("btnSearch").addEventListener("click",Search)
}

function Search(){
  L0 = document.getElementById("link1")
  L1 = document.getElementById("link2")
  L2 = document.getElementById("link3")
  L3 = document.getElementById("link4")
  L4 = document.getElementById("link5")
  L0.href = ""
  L0.innerText = "" 
  L1.href = ""
  L1.innerText = ""
  L2.href = ""
  L2.innerText = ""
  L3.href = ""
  L3.innerText = ""
  L4.href = ""
  L4.innerText = ""
  Searched = document.getElementById("cmbSearch").value
  switch(Searched){
    case "N":
      alert("Choose a search category.")
      break;
    case "SE":
      L0.href = "https://shorturl.at/quHNT"
      L0.innerText = "What does a Software Engineer Do" 
      L1.href = "https://shorturl.at/lCV57"
      L1.innerText = "Average Pay of a Software Enginner"
      L2.href = "https://shorturl.at/xLYZ9"
      L2.innerText = "Software Engineer pay by state"
      L3.href = "https://shorturl.at/jFH78"
      L3.innerText = "Pros and Cons of Being a Software Engineer"
      L4.href = "https://shorturl.at/yAN25"
      L4.innerText = "Software Engineer Job Statistics"
      break;
    case "CE":
      L0.href = "https://shorturl.at/cDGT8"
      L0.innerText = "What does a Computer Engineer Do" 
      L1.href = "https://shorturl.at/mntQ9"
      L1.innerText = "Average Pay of a Computer Enginner"
      L2.href = "https://shorturl.at/hwxy9"
      L2.innerText = "Computer Engineer pay by state"
      L3.href = "https://shorturl.at/dfH18"
      L3.innerText = "Pros and Cons of Being a Computer Engineer"
      L4.href = "https://shorturl.at/BIKRW"
      L4.innerText = "Computer Engineer Job Statistics"
      break;
    case "GD":
      L0.href = "https://au.indeed.com/career-advice/finding-a-job/what-does-a-game-developer-do"
      L0.innerText = "What does a Game Developer Do" 
      L1.href = "https://www.zippia.com/game-developer-jobs/demographics/"
      L1.innerText = "Average Pay of a Game Developer"
      L2.href = "https://www.salary.com/research/salary/offering/game-software-developer-salary-by-state"
      L2.innerText = "Game Developer pay by state"
      L3.href = "https://www.computercareers.org/pros-and-cons-of-being-a-video-game-developer/"
      L3.innerText = "Pros and Cons of Being a Game Developer"
      L4.href = "https://www.zippia.com/game-developer-jobs/demographics/"
      L4.innerText = "Game Developer Job Statistics"
      break;
    case "EC":
      L0.href = "http://www.nyu.engineering/admissions/undergraduate"
      L0.innerText = "NYU Tandon school of engineering" 
      L1.href = "https://admission.princeton.edu/"
      L1.innerText = "Princeton"
      L2.href = "https://admissions.cornell.edu/"
      L2.innerText = "Cornell"
      L3.href = "https://www.stanford.edu/admission/"
      L3.innerText = "Stanford"
      L4.href = "https://web.mit.edu/admissions-aid/"
      L4.innerText = "MIT Massachusetts Institute of technology"
      break;
  }
}