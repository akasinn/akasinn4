const version=83;


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize, false);
resize();

const buffer = document.createElement("canvas");
const btx = buffer.getContext("2d");
buffer.width = buffer.height = 1100;




const draw = () => {
  // 背景
  btx.fillStyle = "green";
  btx.fillRect(0, 0, buffer.width, buffer.height);
  
  // 文字列
  btx.fillStyle = "white";
  btx.textAlign = "center";
  btx.font = "60px serif";
  btx.fillText(
    "ver"+version,
    1000,
    100
  );
  btx.fillStyle = "black";
  btx.fillText("x",1075,1000);
  btx.fillText("y",75,30);
  btx.fillText("o",25,1080);
  btx.save();

  //座標変換
  btx.translate(50,1050);
  btx.scale(1,-1);

  //軸
  btx.beginPath();
  btx.moveTo(-40,5);
  btx.lineTo(-5,5);
  btx.lineTo(-5,1000);
  btx.lineTo(-20,1000);
  btx.lineTo(0,1040);
  btx.lineTo(20,1000);
  btx.lineTo(5,1000);
  btx.lineTo(5,5);
  btx.lineTo(1000,5);
  btx.lineTo(1000,20);
  btx.lineTo(1040,0);
  btx.lineTo(1000,-20);
  btx.lineTo(1000,-5);
  btx.lineTo(5,-5);
  btx.lineTo(5,-40);
  btx.lineTo(-5,-40);
  btx.lineTo(-5,-5);
  btx.lineTo(-40,-5);
  btx.fill();



  btx.restore();
}



const loop = () => {

  ctx.drawImage(
    buffer,
    0, 0, buffer.width, buffer.height,
    0, 0, canvas.width, canvas.width
  );

  window.requestAnimationFrame(loop);
}


function main() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  

  draw();
  loop();
  return ;
}

window.onload = main;

/*
akasinn3から移植

*/
