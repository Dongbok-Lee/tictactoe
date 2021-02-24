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
      numbers[t - 1] = 1;
    }
    n--;
  }
}
