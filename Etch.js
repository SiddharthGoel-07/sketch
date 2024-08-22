const size = 600;
let cellNumber=25;
let flag=0;
let bcolor="green";

function create(cellNumber)
{
    let boardArea=document.getElementById("board")
    boardArea.innerHTML=""
for(let i=0;i<cellNumber*cellNumber;i++)
{
    let gridCell=document.createElement('div');
    boardArea.appendChild(gridCell);
   gridCell.style.height=gridCell.style.width=`${size/cellNumber-2}px`;
    gridCell.classList.add('Cell');
    gridCell.addEventListener("mouseover",(e)=>hover(e,bcolor));
    gridCell.addEventListener("mousedown",down);
    gridCell.addEventListener("mouseup",up);
   
}
}

create(cellNumber);

function down()
{
    flag=1;
}

function up()
{
    flag=0;
}

function hover(e,bcolor)
{    
    if(flag===1)
    e.target.style.backgroundColor = `${bcolor}`;
}

document.getElementById("picker").addEventListener("input",(e)=>pick(e));

function pick(e)
{
    bcolor=e.target.value;
}

document.getElementById("eraser").addEventListener("click",rubber);
 function rubber()
 {   flag=1;
    bcolor="white";
 }
console.log('hello');

document.getElementById("slider").addEventListener("input",(e)=>change(e));
function change(e)
{
    console.log(e.target.value);
    cellNumber=e.target.value;
    create(cellNumber);
}





