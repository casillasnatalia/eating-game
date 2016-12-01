// randomNumber returns a random number between min and max
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}


var Pooh = document.getElementById("Pooh");
var honey = document.getElementById("honey");
var piglet = document.getElementById("piglet")

var PoohX = Number(Pooh.getAttribute("x"));
var PoohY = Number(Pooh.getAttribute("y"));

document.addEventListener("keydown", function(e) {

  if (e.keyCode == 37) {
    Pooh.setAttribute("x",PoohX - 15);
  PoohX = PoohX - 15;
  }

   if (e.keyCode == 39) {
    Pooh.setAttribute("x",PoohX + 15);
  PoohX = PoohX + 15;
  }

  if (e.keyCode == 38) {
    Pooh.setAttribute("y",PoohY - 15);
  PoohY = PoohY - 15;
  }

if (e.keyCode == 40) {
    Pooh.setAttribute("y",PoohY + 15);
  PoohY = PoohY + 15;
  }


var honeyX = Number(honey.getAttribute("x"));
var honeyY = Number(honey.getAttribute("y"));
var honeywidth = Number(honey.getAttribute("width"));
var honeyheight = Number(honey.getAttribute("height"))

var pigletX = Number(piglet.getAttribute("x"));
var pigletY = Number(piglet.getAttribute("y"));
var pigletwidth = Number(piglet.getAttribute("width"));
var pigletheight = Number(piglet.getAttribute("height"));

if (PoohX > honeyX && PoohX < honeyX + honeywidth && PoohY > honeyY &&  PoohY < honeyY + honeyheight) {
  var randX = randomNumbers(10, 800)
honey.setAttribute("X", randX)
 console.log("overlap");

 var randX = randomNumbers(10, 800)

 honey.setAttribute("opacity", "0")
}

if (PoohX > pigletX && PoohX < pigletX + pigletwidth && PoohY > pigletY &&  PoohY < pigletY + pigletheight) {
  var randX = randomNumber(10, 800)
honey.setAttribute("x", randX)
 console.log("overlap");

 var randX = randomNumber(10, 800)

 honey.setAttribute("opacity", "0")
}


})
