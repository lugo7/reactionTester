//returns a random hex code color
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}

//50/50 chance of being a circle or square
function getRandomShape(){
  var circle = (Math.random() <= 0.5) ? 1 : 2;
  if(circle === 2){
    document.getElementById('box').style.borderRadius='50%';
  }
}

//needs to appear only within given element
function randomPosition(elem){
  let vPos = Math.floor(Math.random()*((elem.getBoundingClientRect().bottom-100)-elem.getBoundingClientRect().top)+elem.getBoundingClientRect().top);
  let hPos = Math.floor(Math.random()*((elem.getBoundingClientRect().right-100)-elem.getBoundingClientRect().left)+elem.getBoundingClientRect().left);
  document.getElementById('box').style.left=hPos+'px';
  document.getElementById('box').style.top=vPos+'px';
}

var clickedTime; var createdTime; var reactionTime; var i = 1;

//Display given element
function appearingBox(elem){
  let time = Math.floor(Math.random()*3000);
  setTimeout(function(){
    getRandomShape();
    randomPosition(elem);
    document.getElementById('box').style.backgroundColor=getRandomColor();
    document.getElementById('box').style.display='block';
  },time);
  createdTime=Date.now();
}

function rankingInput(time){
  var cell=document.getElementsByTagName('td');
  cell[counter].textContent=reactionTime+'s';
}

function getTime(){
  clickedTime=Date.now();
  reactionTime=(clickedTime-createdTime)/1000;
  rankingInput(reactionTime);
  counter+=4;
  if(counter==21){
    counter=3;
  }
  else if(counter==24){
    //check win or lose condition
  }
}

//var scoreboard = new Table();
//scoreboard.currentField();
var counter = 1;
document.getElementById('startGame').addEventListener('click',function(){
  document.getElementById('overlay').style.display='none';
  document.getElementById('startGame').removeEventListener('click',function(){});
  var field = document.getElementById('playArea');
  document.getElementById('box').addEventListener('click',function(){
    this.style.display='none';
    getTime();
    appearingBox(field);
  });
  appearingBox(field);
});
