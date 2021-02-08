const canvas = document.getElementById("jscanvas");
const ctx = canvas.getContext("2d");
let painting = false;
let range = document.getElementById("jsbrush");
let colors = document.getElementsByClassName("jschoice");
const customcolor = document.getElementById("custom");
let fill = false;
let fillmode = document.getElementById("fillmode");
let savemode = document.getElementById("savemode");

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = "white";
ctx.lineWidth = 2.5;

 ctx.fillRect(0,0,canvas.width,canvas.height);

function fillmodeHandle(event)
{

  if(fill === false)
  {
  fill = true;
  console.log(fill);
  }
  else
  {

  fill = false;
  console.log(fill);

  }

}


function startPainting()
{

painting = true;
ctx.lineWidth = range.value;


}



function onMouseMove(event)
{


  const x = event.offsetX;
  const y = event.offsetY;

  if(!painting)
  {
    ctx.beginPath();
    ctx.moveTo(x,y);
  }
  else
  {
    ctx.lineTo(x,y);
    ctx.stroke();
  }


}


function onMouseDown(event)
{
  painting = true;

}

function stopPainting(event)
{
   painting = false;


}


function changeColor(event)
{

  let a = event.target.style.backgroundColor;

  ctx.strokeStyle = a;
  ctx.fillStyle = a;

}

function changeColorCustom(event)
{

  let a = event.target.value;

  ctx.strokeStyle = a;
  ctx.fillStyle = a;


}

function fillStart()
{
     if(fill)
     {
     ctx.fillRect(0,0,canvas.width,canvas.height);
     }

}

function savemodeHandle(event)
{
  const img = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = img;
  link.download = "PaintJs[Export]";
  link.click();

}

if(canvas)
{
  canvas.addEventListener("mousemove",onMouseMove);
  canvas.addEventListener("mousedown",startPainting);
  canvas.addEventListener("mouseup",stopPainting);
  canvas.addEventListener("mouseleave",stopPainting);
  canvas.addEventListener("click",fillStart);


}

Array.from(colors).forEach(color => color.addEventListener("click",changeColor));
customcolor.addEventListener("input",changeColorCustom);
fillmode.addEventListener("click",fillmodeHandle);
savemode.addEventListener("click",savemodeHandle);
