var n = 9;
var numbers = new Array();
for (var i = 0; i < 9; i++) {
  numbers[i]=0;
}

function tictactoe(t) {
  if (numbers[t - 1] == 0) {
    if (n % 2 == 0) {
      document.getElementById('td' + t).classList.add('p2');
      numbers[t - 1] = 1;
    } else {
      document.getElementById('td' + t).classList.add('p1');
      animateCircle(t);
      numbers[t - 1] = 1;
    }
    n--;
  }
}
function win(u){
  var win=0;
  var t = document.querySelector('#td'+u);
  if(t.classList.contains('p1')){
    tb[u-1]=11;
  }else if(t.classList.contains('p2')){
    tb[u-1]=22;
  }
  for(i=0; i<3; i++){
    if(tb[3*i]===tb[3*i+1]&&tb[3*i]===tb[3*i+2]){
      win=tb[3*i];
    }else if(tb[i]===tb[i+3]&&tb[i]===tb[i+6]){
      win=tb[i];
    }else if(i<2){
      if(tb[2*i]===tb[4]&&tb[2*i]===tb[8-(2*i)]){
        win=tb[2*i];
      }
    }
  }
  console.log(win);
  if(win>0){
    if(win===11){
      alert("Player1 win!!");
    }else{
      alert("Player2 win!!");
    }
  }
}
function animateCircle(t){
  var ctx = document.querySelector('#circle'+t).getContext("2d");
  var end = Math.PI;
  for(var i = 0; i<=100; i++){
    draw(i);
  }
function draw(delay){
  setTimeout(function(){
    ctx.clearRect(0,0,100,100);
    ctx.lineWidth = "15";
    ctx.strokeStyle = "#b5b2ff";
    ctx.beginPath();
    ctx.arc(50,50,40,0,end*2/100*delay);
    ctx.stroke();
  },delay*4);
 }
}
