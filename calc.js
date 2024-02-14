window.addEventListener("load",AddListeners);

var Equation;
Equation = 0
var P1;
P1 = ""
var P2;
P2 = ""
var Sign;
Sign = ""
var InBr;
InBr = ""
var outer
var Process;
var Radians;
var abs1 = "";
var abs2 = "";
	
function AddListeners()
{
	window.addEventListener("keydown", Keys)
	document.getElementById("btn1").addEventListener("click", One)
	document.getElementById("btn2").addEventListener("click", Two)
	document.getElementById("btn3").addEventListener("click", Three)
	document.getElementById("btn4").addEventListener("click", Four)
	document.getElementById("btn5").addEventListener("click", Five)
	document.getElementById("btn6").addEventListener("click", Six)
	document.getElementById("btn7").addEventListener("click", Seven)
	document.getElementById("btn8").addEventListener("click", Eight)
	document.getElementById("btn9").addEventListener("click", Nine)
	document.getElementById("btn0").addEventListener("click", Zero)
	document.getElementById("btnMult").addEventListener("click", Multiply)
  document.getElementById("btnC").addEventListener("click", Clear)
	document.getElementById("btnEqu").addEventListener("click", Result)
	document.getElementById("btnDiv").addEventListener("click", Divide)
	document.getElementById("btnMin").addEventListener("click", Minus)
	document.getElementById("btnAdd").addEventListener("click", Add)
	document.getElementById("btnDec").addEventListener("click", Decimal)
  document.getElementById("btnP").addEventListener("click", Percent)
	document.getElementById("btnNeg").addEventListener("click", Negative)
  document.getElementById("btnSqrt").addEventListener("click", Sqrt)
  document.getElementById("btnPow2").addEventListener("click", Pow2)
  document.getElementById("btnPow").addEventListener("click", Pow)
  document.getElementById("btne").addEventListener("click", e)
  document.getElementById("btnPi").addEventListener("click", Pi)
  document.getElementById("btnSin").addEventListener("click", Sin)
  document.getElementById("btnCos").addEventListener("click", Cos)
  document.getElementById("btnTan").addEventListener("click", Tan)
  document.getElementById("btnAbs").addEventListener("click", Abs)
}

function Keys()
{
	let key = event.key;
	if (key == "1"){One()}
	else if (key == "2"){Two()}
	else if (key == "3"){Three()}
	else if (key == "4"){Four()}
	else if (key == "5"){Five()}
	else if (key == "6"){Six()}
	else if (key == "7"){Seven()}
	else if (key == "8"){Eight()}
	else if (key == "9"){Nine()}
	else if (key == "0"){Zero()}
	else if (key == "+"){Add()}
	else if (key == "x"){Multiply()}
	else if (key == "/"){Divide()}
	else if (key == "-"){Minus()}
	else if (key == "."){Decimal()}
	else if (key == "%"){Percent()}
	else if (key == "Enter"){Result()}
	else if (key == "c"){Clear()}
  else if (key == "^"){Pow()}
  else if (key == "e"){e()}
}

function Clear()
{
	Process = ""
	P1 = ""
	P2 = ""
	Sign = ""
  abs1 = ""
  abs2 = ""
	Change()
}

function One()
{
	P2 = P2 + "1";
	Change()
}

function Two()
{
	P2 = P2 + "2";
	Change()
}

function Three()
{
	P2 = P2 + "3";
	Change()
}

function Four()
{
	P2 = P2 + "4";
	Change()
}

function Five()
{
	P2 = P2 + "5";
	Change()
}

function Six()
{
	P2 = P2 + "6";
	Change()
}

function Seven()
{
	P2 = P2 + "7";
	Change()
}

function Eight()
{
	P2 = P2 + "8";
	Change()
}

function Nine()
{
	P2 = P2 + "9";
	Change()
}
function Zero()
{
	P2 = P2 + "0";
	Change()
}
function Decimal()
{
  P2 = P2 + ".";
	Change()
}
function e()
{
  if (P1 != "" & Sign != "" & P2 != ""){
    Result()
    Sign = "x"
    P2 = "e"
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "x"
    P2 = "e"
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    Sign = "x"
    P2 = "e"
    Change()
  }
  else if (P1 == "" & Sign == "" & P2 == ""){
    P1 = "e"
    Change()
  }else if (P1 != "" & Sign != "" & P2 == ""){
    P2 = "e"
    Change()
  }
}

function Pi()
{
  if (P1 != "" & Sign != "" & P2 != ""){
    Result()
    P1 = "π"
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "x"
    P2 = "π"
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    Sign = "x"
    P2 = "π"
    Change()
  }
  else if (P1 == "" & Sign == "" & P2 == ""){
    P1 = "π"
    Change()
  }else if (P1 != "" & Sign != "" & P2 == ""){
    P2 = "π"
    Change()
  }
}

function Multiply()
{
  if (Sign != ""){
    Result()
    Sign = "x"
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "x"
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "x"
    Change()
  }
  else {
    alert("error no values")
  }
}

function Divide()
{
  if (Sign != ""){
    Result()
    Sign = "/"
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "/"
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "/"
    Change()
  }
  else {
    alert("error no values")
  }
}

function Minus()
{
  if (Sign != ""){
    Result()
    Sign = "-"
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "-"
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "-"
    Change()
  }
  else {
    alert("error no values")
  }
}

function Add()
{
  if (Sign != ""){
    Result()
    Sign = "+"
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "+"
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "+"
    Change()
  }
  else {
    alert("error no values")
  }
}

function Percent()
{
  if (Sign != ""){
    Result()
    Sign = "%"
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "%"
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "%"
    Change()
  }
  else {
    alert("error no values")
  }
}

function Negative()
{
  if (P2 == ""){
    alert("Error no second value.")
  }else{
    P2 = P2 * -1
    Change()
  }
}

function Sqrt()
{
  P2 = Math.sqrt(P2)
  P2 = P2.toFixed(2)
  Change()
}

function Pow2()
{
  P2 = Math.pow(P2, 2)
  P1= Math.pow(P1,2)
  Change()
}

function Pow()
{
  if (Sign != ""){
    Result()
    Sign = "^"
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "^"
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "^"
    Change()
  }
  else {
    alert("error no values")
  }
}

function Sin()
{
  if (P1 != "" & Sign != "" & P2 != ""){
    Result()
    P2 += "sin("
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "x"
    P2 += "sin("
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "x"
    P2 += "sin("
    Change()
  }
  else if (P1 == "" & Sign == "" & P2 == ""){
    P2 += "sin("
    Change()
  }else if (P1 != "" & Sign != "" & P2 == ""){
    P2 += "sin("
    Change()
  }
  Radians = P2 * Math.PI/180;
}

function Cos()
{
  if (P1 != "" & Sign != "" & P2 != ""){
    Result()
    P2 += "cos("
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "x"
    P2 += "cos("
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "x"
    P2 += "cos("
    Change()
  }
  else if (P1 == "" & Sign == "" & P2 == ""){
    P2 += "cos("
    Change()
  }else if (P1 != "" & Sign != "" & P2 == ""){
    P2 += "cos("
    Change()
  }
  Radians = P2 * Math.PI/180;
}

function Tan()
{
  if (P1 != "" & Sign != "" & P2 != ""){
    Result()
    P2 += "tan("
    Change()
  }else if (P1 != "" & Sign == ""){
    Sign = "x"
    P2 += "tan("
    Change()
  }else if (P1 == "" & Sign == "" & P2 != ""){
    P1=P2
    P2 = ""
    Sign = "x"
    P2 += "tan("
    Change()
  }
  else if (P1 == "" & Sign == "" & P2 == ""){
    P2 += "tan("
    Change()
  }else if (P1 != "" & Sign != "" & P2 == ""){
    P2 += "tan("
    Change()
  }
  Radians = P2 * Math.PI/180;
}

function Abs(){
  if (abs1 == "" && abs2 == ""){
    abs1 = "|"
    abs2 = "|"
    Change()
 }else{
    abs1 = ""
    abs2 = ""
    Change()
}
}

function Result()
{
  if (Sign != ""  & P1 != "" & P2 !=""){
    Convert()
    switch(Sign){
        case "x":
          P1 = parseFloat(P1)*parseFloat(P2)
          P2 = ""
          Sign = ""
          break
        case "/":
          P1 = parseFloat(P1)/parseFloat(P2)
          P2 = ""
          Sign = ""
          break
        case "+":
          P1 = parseFloat(P1)+parseFloat(P2)
          P2 = ""
          Sign = ""
          break
        case "-":
          P1 = parseFloat(P1)-parseFloat(P2)
          P2 = ""
          Sign = ""
          break
        case "%":
          P1 = parseFloat(P1)/100
          P1 = (parseFloat(P2)*parseFloat(P1))
          P2 = ""
          Sign = ""
          break
        case "^":
          P1 = P2 = Math.pow(P1, P2)
          P2 = ""
          Sign = ""
          break
        default:
          break
     }
    if (abs1 > ""){
      if (Math.sign(P1) == -1)
        P1 = P1 * -1
        abs1 = ""
        abs2 = ""
  }
  P1 = P1.toFixed(2)
  Change()
  }
}

function Convert()
{
  if (P2.includes("sin(")){
    P2 = P2.replace("sin("," ")
    P2 = Math.sin(P2)
  }else if (P2.includes("cos(")){
    P2 = P2.replace("cos(","")
    P2 = Math.cos(P2)
  }else if (P2.includes("tan(")){
    P2 = P2.replace("tan(","")
    P2 = Math.tan(P2)
  }else if (P1.includes("sin(")){
    P1 = P1.replace("sin("," ")
    P1 = Math.sin(P1)
  }else if (P1.includes("cos(")){
    P1 = P1.replace("cos(","")
    P1 = Math.cos(P1)
  }else if (P1.includes("tan(")){
    P1 = P1.replace("tan(","")
    P1 = Math.tan(P1)
  }
  switch(P1){
        case "e":
          P1 = Math.E
          break
        case "π":
          P1 = Math.PI
          break
        case "sin(":
          P1 = Math.sin(P1)
          break
        case "cos(":
          P1 = Math.cos(P1)
          break
        case "tan(":
          P1 = Math.tan(P1)
          break
        default:
          break
  }
  switch(P2){
        case "e":
          P2 = Math.E
          break
        case "π":
          P2 = Math.PI
          break
        default:
          break
  }
}

function Change()
{
  String(P1)
  String(P2)
	document.getElementById("screen").innerHTML = abs1 + P1 +" "+ Sign +" "+ P2 + " " + abs2;
}