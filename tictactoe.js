var n = 9;
var cntp1 = 0;
var cntp2 = 0;
var numbers = new Array();
for (var j = 0; j < 9; j++) {
  numbers[j] = 0;
}
var tb = new Array();
for (var i = 0; i < 9; i++) {
  tb[i] = i;
}

function tictactoe(t) {
  if (n > 0 && numbers[t - 1] == 0) {
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

function win(u) {
  var win = 0;
  var t = document.querySelector('#td' + u);
  if (t.classList.contains('p1')) {
    tb[u - 1] = 11;
  } else if (t.classList.contains('p2')) {
    tb[u - 1] = 22;
  }
  for (i = 0; i < 3; i++) {
    if (tb[3 * i] === tb[3 * i + 1] && tb[3 * i] === tb[3 * i + 2]) {
      win = tb[3 * i];
    } else if (tb[i] === tb[i + 3] && tb[i] === tb[i + 6]) {
      win = tb[i];
    } else if (i < 2) {
      if (tb[2 * i] === tb[4] && tb[2 * i] === tb[8 - (2 * i)]) {
        win = tb[2 * i];
      }
      else if (n == 0) {
        win = 1;
      }
    }
  }
  console.log(win);
  if (win > 0) {
    if (win == 11) {
      n=-1;
      cntp1++;
      document.getElementById('winner').innerHTML = 'P1이 승리하셨습니다.';
      document.getElementById('wcontent').style.display = 'block';
      document.getElementById('p1score').innerHTML = cntp1;
      for (m = 0; m < 9; m++) {
        tb[m] = m;
        numbers[m]=0;
      }
    }
    else if (win == 22) {
      n=-1;
      cntp2++;
      document.getElementById('winner').innerHTML = 'P2이 승리하셨습니다.';
      document.getElementById('wcontent').style.display = 'block';
      document.getElementById('p2score').innerHTML = cntp2;
      for (m = 0; m < 9; m++) {
        tb[m] = m;
        numbers[m]=0;
      }
    }
    else if(win==1){
      document.getElementById('winner').innerHTML = '무승부입니다';
      document.getElementById('wcontent').style.display = 'block';
      for (m = 0; m < 9; m++) {
        tb[m] = m;
        numbers[m]=0;
}
    }
  }
}

function reset() {
  for (k = 1; k <= 9; k++) {
    document.getElementById('td' + k).classList.remove('p1');
    document.getElementById('td' + k).classList.remove('p2');
    numbers[k - 1] = 0;
    tb[k - 1] = k - 1;
    n = 9;
    document.getElementById('wcontent').style.display = 'none';
    function removeCircle(){
        for(var i=1; i<10; i++){
          document.querySelector('#circle'+i).getContext("2d").clearRect(0,0,100,100);
        }
      }
  removeCircle();
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
