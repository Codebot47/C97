canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

function square(){
    x = document.getElementById("X").value;
    y = document.getElementById("Y").value;
    size = document.getElementById("size").value;
    color = document.getElementById("color").value;
    border_color = document.getElementById("border_color").value;
    width = document.getElementById("width").value;
    console.log(x);
    console.log(y);
    console.log(size);
    console.log(color);
    console.log(border_color);
    console.log(width);
    console.log("square");
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.rect(x, y, size, size);
    ctx.strokeStyle = border_color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
} 

function rectangle(){
    x = document.getElementById("X").value;
    y = document.getElementById("Y").value;
    size = document.getElementById("size").value;
    color = document.getElementById("color").value;
    border_color = document.getElementById("border_color").value;
    width = document.getElementById("width").value;
    console.log(x);
    console.log(y);
    console.log(size);
    console.log(color);
    console.log(border_color);
    console.log(width);
    console.log("rectangle");
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.rect(x, y, size * 2, size);
    ctx.strokeStyle = border_color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}

function circle(){
    x = document.getElementById("X").value;
    y = document.getElementById("Y").value;
    size = document.getElementById("size").value;
    color = document.getElementById("color").value;
    border_color = document.getElementById("border_color").value;
    width = document.getElementById("width").value;
    console.log(x);
    console.log(y);
    console.log(size);
    console.log(color);
    console.log(border_color);
    console.log(width);
    console.log("circle");
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.strokeStyle = border_color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}