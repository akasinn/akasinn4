const version=96;


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
buffer.width = buffer.height = 11000;


function mathmatical_function(x){
  const x_string=x+"";
  const keta=x_string.length;
  var y_array=[];
  for(var i=0;i<keta;i++){
    y_array=y_array.concat(x_string[i]);
  }
  for(var i=0;i<keta-1;i++){
    if(x_string[i]==x_string[i+1]){
      y_array[i]='0';
      y_array[i+1]='0';
    }
  }
  var y="";
  for(var i=0;i<keta;i++){
    y=y.concat(y_array[i]);
  }
  return Number(y);
}

const draw = () => {
  // 背景
  btx.fillStyle = "green";
  btx.fillRect(0, 0, buffer.width, buffer.height);
  
  // 文字列
  btx.fillStyle = "white";
  btx.textAlign = "center";
  btx.font = "60px serif";
  btx.fillText(
    "ver"+version,4000,1000
  );
  btx.fillStyle = "black";
  btx.fillText("x",10750,10250);
  btx.fillText("y",775,325);
  btx.fillText("o",250,10835);
  btx.fillText("1",250,500);
  btx.fillText("1",10500,10850);


  btx.save();

  //座標変換
  btx.translate(500,10500);
  btx.scale(1,-1);

  //軸
  btx.beginPath();
  btx.moveTo(-400,50);
  btx.lineTo(-50,50);
  btx.lineTo(-50,10000);
  btx.lineTo(-200,10000);
  btx.lineTo(0,10400);
  btx.lineTo(200,10000);
  btx.lineTo(5,10000);
  btx.lineTo(50,50);
  btx.lineTo(10000,50);
  btx.lineTo(10000,200);
  btx.lineTo(10400,0);
  btx.lineTo(10000,-200);
  btx.lineTo(10000,-50);
  btx.lineTo(50,-50);
  btx.lineTo(50,-400);
  btx.lineTo(-50,-400);
  btx.lineTo(-50,-50);
  btx.lineTo(-400,-50);
  btx.fill();

  btx.fillStyle = "white";
  for(var x=0;x<=10000;x++){
    const y=mathmatical_function(x);
    //const endAngle = Math.PI * 2; // 円孤の終点
  //  btx.arc(x, y,2,0,endAngle,true);
   // btx.fill();
    btx.fillText(".",x,y+20);
  }

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
ver84
xyoの位置を修正
ver85
グラフを描画
ver86
例のグラフを描画
ver87
verを左に。点を円で描く。
ver88
グラフが見えなかったので、円の半径を1->5
ver89
円弧の終わりをしっかり
ver90
円弧の終わりを修正。半径5->2
ver91
真っ青。math.PI*2が変になっていたので空白を入れる。
ver92
真っ青。塗り忘れに気づく
ver93
なぜか真っ白。軸も白い。.で点を表現
ver94
上手くいった。.を2だけ上に。目盛りを追加
ver95
yをちゃんとNumberにキャスト
ver96
点を10倍に増やせる。解像度も同じく。
*/
