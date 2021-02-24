var tb = new Array();
for(var i=0; i<9; i++){
  tb[i]=i;
}
function win(u){
  var win=0;
  var player1 = document.querySelector('p1');
  var player2 = document.querySelector('p2');
  var t = document.querySelector('t'+u);
  if(t.classList.contains('p1')){
    tb[u]=11;
  }else if(t.classList.contains('p2')){
    tb[u]=22;
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
  if(win>0){
    if(win===11){
      alert("Player1 win!!");
    }else{
      alert("Player2 win!!");
    }
  }
}
