var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");

var userInput = document.getElementById("respuesta");
var botonADarle = document.getElementById("boton");

var canvas = document.getElementById("dibujo");
var width = canvas.width;
var height = canvas.height;

var lines = 30;
// var line = 0;
var y1 = 0;
var x2 = 20;

function drawLine(color, x1, y1, x2, y2)
{
  lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
  lienzo.closePath();
}

function testEvent()
{
    // console.log(userInput);
    alert(userInput.value);
    // alert("Hello World!!!");
    
}

function userEvent()
{
    var lines = parseInt(userInput.value);
    // console.log(lines);
    drawByEvent(lines);
}

function drawByEvent(lines)
{
    console.log(canvas);

    inc = parseInt(width / lines);
    y1 = 0;
    x2 = inc;
    for(line = 0; line < lines; line++)
    {
      drawLine("blue", 0, y1, x2, height);

      y1 += inc;
      x2 += inc;
    }
}

// Draw Axis
drawLine("blue", 1, 299, 299, 299);
drawLine("blue", 1, 1, 1, 299);
// botonADarle.addEventListener("click", testEvent);
botonADarle.addEventListener("click", userEvent);


for(line = 0; line < lines; line++)
{
  drawLine("green", 0, y1, x2, 300);

  y1 += 10;
  x2 += 10;
}