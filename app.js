const loc = document.getElementById("jsCanvas");
let ctx = loc.getContext("2d");       

const colors = document.getElementsByClassName("controls__color")
console.log(colors);


loc.width = 1000;
loc.height = 800;

let onpoint = false;

function changecolor(event){
    const brushcolor = event.target.style.backgroundColor;
    ctx.strokeStyle = brushcolor;
    ctx.lineWidth = 1;
    console.log(brushcolor);
}

function stop(event){
    onpoint = false;
}

function onMousemove(event){
    const X = event.offsetX;
    const Y = event.offsetY;
    if(onpoint){
    ctx.lineTo(X,Y);
    ctx.stroke();
    }
    else{
        ctx.beginPath();
    }
}

function strPaint(event){
    onpoint = true;
}

    loc.addEventListener("mousemove", onMousemove);
    loc.addEventListener("mousedown", strPaint);
    loc.addEventListener("mouseleave", stop);
    loc.addEventListener("mouseup", stop);
    Array.from(colors).forEach(color => color.addEventListener("click", changecolor));