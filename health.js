window.addEventListener("load",addListeners)
var HeightFt;
var HeightIn;
var HeightTotal1;
var HeightTotal2;
var Weight;
var BMI;
var Age;
var Gender;
var BMR;
var BFP;
var Fname;
var Lname;
function addListeners(){
  document.getElementById("btnSubmitBMI").addEventListener("click",CalcBMI)
  document.getElementById("btnSubmitBMR").addEventListener("click",CalcBMR)
  document.getElementById("btnSubmitBFP").addEventListener("click",CalcBFP)
  document.getElementById("btnReportY").addEventListener("click",ReportY)
  document.getElementById("btnReportN").addEventListener("click",ReportN)
  document.getElementById("btnBMI").addEventListener("click",BMIbtn)
  document.getElementById("btnBMR").addEventListener("click",BMRbtn)
  document.getElementById("btnBFP").addEventListener("click",BFPbtn)
  document.getElementById("btnSubmitReport").addEventListener("click",Report)
  document.getElementById("btnReportBack").addEventListener("click",ReportBack)
  document.getElementById("Inputs").style.display = "none"
  document.getElementById("Mainselectors").style.display= "none"
  document.getElementById("InputHead").style.display = "none"
  document.getElementById("Report").style.display = "none"
}

function ReportY(){
  document.getElementById("InputHead").style.display = "block"
  document.getElementById("Inputs").style.display= "block"
  document.getElementById("Reportselector").style.display= "none"
  document.getElementById("btnSubmitBMI").style.display= "none"
  document.getElementById("btnSubmitBFP").style.display= "none"
  document.getElementById("btnSubmitBMR").style.display= "none"
}

function ReportN(){
  document.getElementById("Mainselectors").style.display= "block"
  document.getElementById("Reportselector").style.display= "none"
  document.getElementById("InputHead").style.display = "none"
  document.getElementById("btnSubmitReport").style.display = "none"
}

function CalcBMI(){
  HeightFt = document.getElementById("txtHeightFt").value
  HeightIn = document.getElementById("txtHeightIn").value
  Weight = document.getElementById("txtWeight").value
  HeightTotal1 = HeightFt * 12 + parseInt(HeightIn)
  HeightTotal2 = HeightTotal1 * HeightTotal1
  BMI = 703*Weight/HeightTotal2
  BMI =BMI.toFixed(2)
  document.getElementById("lblResultBMI").innerText = "Your BMI is: " + String(BMI)
}

function CalcBMR(){
  HeightFt = document.getElementById("txtHeightFt").value
  HeightIn = document.getElementById("txtHeightIn").value
  Weight = document.getElementById("txtWeight").value
  Age = document.getElementById("txtAge").value
  Gender = document.getElementById("cmbGender").value
  HeightTotal1 = HeightFt * 12 + parseInt(HeightIn)
  Weight = Weight*0.45359237
  HeightTotal1 = HeightTotal1 * 2.54
  if (Gender == "Male"){
    BMR = (10 * Weight) + (6.25 * HeightTotal1) - (5 * Age)+5
  }else{
      BMR = (10 * Weight) + (6.25 * HeightTotal1) - (5 * Age)-161
    }
  BMR = BMR.toFixed(2)
  document.getElementById("lblResultBMR").innerText = "Your BMR is: " + String(BMR)
}

function CalcBFP(){
  HeightFt = document.getElementById("txtHeightFt").value
  HeightIn = document.getElementById("txtHeightIn").value
  Weight = document.getElementById("txtWeight").value
  Age = document.getElementById("txtAge").value
  HeightTotal1 = HeightFt * 12 + parseInt(HeightIn)
  HeightTotal2 = HeightTotal1 * HeightTotal1
  BMI = 703*Weight/HeightTotal2
  BMI =BMI.toFixed(2)
   if (Age < 18){
    if (Gender == "Male"){
      BFP = 1.51 * BMI - 0.70 * Age - 2.2 
    }else{
      BFP = 1.51 * BMI - 0.70 * Age + 1.4
    }
  }else{
    if (Gender == "Male"){
      BFP = 1.20 * BMI + 0.23 * Age - 16.2
    }else{
      BFP = 1.20 * BMI + 0.23 * Age - 5.4
    }
  }
  BFP = BFP.toFixed(2)
  document.getElementById("lblResultBFP").innerText = "Your BFP is: " + String(BFP)
}

function BMIbtn(){
  document.getElementById("Name").style.display = "none"
  document.getElementById("btnSubmitBMR").style.display= "none"
  document.getElementById("btnSubmitBFP").style.display= "none"
  document.getElementById("btnSubmitBMI").style.display= "block"
  document.getElementById("Inputs").style.display= "block"
}
function BMRbtn(){
  document.getElementById("Name").style.display = "none"
  document.getElementById("btnSubmitBMI").style.display= "none"
  document.getElementById("btnSubmitBFP").style.display= "none"
  document.getElementById("btnSubmitBMR").style.display= "block"
  document.getElementById("Inputs").style.display= "block"
}
function BFPbtn(){
  document.getElementById("Name").style.display = "none"
  document.getElementById("btnSubmitBMR").style.display= "none"
  document.getElementById("btnSubmitBMI").style.display= "none"
  document.getElementById("btnSubmitBFP").style.display= "block"
  document.getElementById("Inputs").style.display= "block"  
}
function Report(){
  document.getElementById("Report").style.display = "Block"
  document.getElementById("Result").style.display = "none"
  Fname = document.getElementById("txtFname").value
  Lname = document.getElementById("txtLname").value
  Age = document.getElementById("txtAge").value
  Gender = document.getElementById("cmbGender").innerText
  CalcBMR()
  CalcBMI()
  CalcBFP()
  document.getElementById("repFname").innerText = Fname
  document.getElementById("repLname").innerText = Lname
  document.getElementById("repAge").innerText = "Age:  " + Age
  document.getElementById("repGender").innerText = "Biological gender:  " + Gender
  document.getElementById("repBMI").innerText = "Your BMI is:  " + BMI
  document.getElementById("repBMR").innerText = "Your BMR is:  " + BMR
  document.getElementById("repBFP").innerText = "Your BFP is:  " + BFP
  document.getElementById("Inputs").style.display = "none"
}
function ReportBack(){
  document.getElementById("Inputs").style.display = "Block"
  document.getElementById("Report").style.display = "none"
}