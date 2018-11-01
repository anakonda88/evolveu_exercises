
console.log("Hello World from JavaScript file");
function myFunction(){
console.log("I'm in JS");
alert("Boom!!");
}
function myMouse(){

  console.log("Halloween!!");

}
var counting = 0
function myFunction3(){

  document.getElementById("myDiv").innerHTML += "<br>Now what?"+counting;
  counting++;
}
function clear_all(){
  document.getElementById("myDiv").innerHTML ="";
}
var line = 0
function move_circle(){
  var line = document.getElementById("circle");
  var intcx = parseInt(line.getAttribute('cx'));
  line.setAttribute("cx", intcx + 25 + "px");
  line++;
}
function addValues(){
  var num1, num2, res;
  num1=Number(document.myCalculator.num_1.value);
  num2=Number(document.myCalculator.num_2.value);
  res=num1+num2;
  document.myCalculator.results.value=res;
}

function circle_move(){
  var xnum, ynum;
  xnum = Number(document.circle_move2.textX.value);
  ynum = Number(document.circle_move2.textY.value);

  var line2 = document.getElementById("circle2");
  var intcx2 = parseInt(line2.getAttribute('cx'));
  var intcy2 = parseInt(line2.getAttribute('cy'));
  line2.setAttribute("cx", intcx2 + xnum + "px");
  line2.setAttribute("cy", intcy2 + ynum + "px");
}
