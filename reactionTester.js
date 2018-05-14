function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}
function getRandomShape(){
  var circle = (Math.random() <= 0.5) ? 1 : 2;
  if(circle === 2){
    document.getElementById('box').style.borderRadius='50%';
  }
}
function randomPosition(){
  var left = Math.floor(Math.random()*document.getElementById('playArea').clientWidth);
  var top = Math.floor(Math.random()*document.getElementById('playArea').clientHeight);
  document.getElementById('box').style.left=left+'px';
  document.getElementById('box').style.top=top+'px';
}
var clickedTime; var createdTime; var reactionTime; var i = 1;
function appearingBox(){
  createdTime=Date.now();
  let time = Math.floor(Math.random()*3000);
  setTimeout(function(){
    getRandomShape();
    randomPosition();
    document.getElementById('box').style.backgroundColor=getRandomColor();
    document.getElementById('box').style.display='block';
  },time);
}

var Table = function(){
  var x = document.getElementById('tableStart');
  this.x = x;
  this.i = i;
  this.currentField = function(){
    this.x = x;
    if(this.i>8){
      this.i=1;
    }
    if(this.i>4){
      this.x = this.x.children[this.i-4];
      this.x.children[3].style.backgroundColor = 'grey';
    }
    else{
      this.x = this.x.children[this.i];
      this.x.children[1].style.backgroundColor = 'grey';
    }
  }
  this.tableInsert = function(){
    if(this.i>4){
      this.x.children[3].innerHTML = reactionTime+'s';
      this.x.children[3].style.backgroundColor = '#391568';
    }
    else{
      this.x.children[1].innerHTML = reactionTime+'s';
      this.x.children[1].style.backgroundColor = '#391568';
    }
    this.i=this.i+1;
  }
}

document.getElementById('box').addEventListener('click',function(){
  clickedTime=Date.now();
  reactionTime=(clickedTime-createdTime)/1000;
  scoreboard.tableInsert();
  this.style.display='none';
  scoreboard.currentField();
  appearingBox();
});
var scoreboard = new Table();
scoreboard.currentField();
appearingBox();
