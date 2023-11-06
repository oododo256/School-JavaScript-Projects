function getData(){
  alert("This is a javascript calculator. Enter two numbers and click an operation.")
}
function add(){
  var num1=parseFloat(document.getElementById("num1").value);
  var num2=parseFloat(document.getElementById("num2").value);
  document.getElementById("outBox").value=num1+num2;
}
function subtract(){
  var num1=parseFloat(document.getElementById("num1").value);
  var num2=parseFloat(document.getElementById("num2").value);
  document.getElementById("outBox").value=num1-num2;
}
function multiply(){
  var num1=parseFloat(document.getElementById("num1").value);
  var num2=parseFloat(document.getElementById("num2").value);
  document.getElementById("outBox").value=num1*num2;
}
function divide(){
  var num1=parseFloat(document.getElementById("num1").value);
  var num2=parseFloat(document.getElementById("num2").value);
  document.getElementById("outBox").value=num1/num2;
}

