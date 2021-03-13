var colors=setcolors(6);
var numbox=6;
var parent = document.getElementById("frst");
var picked = pick();
var displayclr = document.getElementById("dis");
var message =document.getElementById("msg");
var head=document.querySelector("h1");
var button=document.getElementById("btn");
var easy=document.querySelector("#esy");
var hard=document.querySelector("#hrd");
var box=[];

init();
function init(){
  first();
  setup();
  easy1();
  hard1();
}
function first(){
for(var i=0; i<numbox; i++){
  var cls= document.createElement('div');
   cls.classList.add("colorbox")
  parent.appendChild(cls);
}
box=document.querySelectorAll("#frst div:nth-of-type(n)");
}


//**Easy Button**//
function easy1(){
easy.addEventListener("click",function(){
  easy.classList.add("background");
  hard.classList.remove("background");
  numbox=2;
  colors=setcolors(numbox);
  picked = pick();
  displayclr.textContent = picked;
  for(var i=0; i<=box.length; i++){
    if(colors[i]){
      box[i].style.backgroundColor = colors[i];
    }
  else{
      box[i].style.display = "none";
    }
  }
});
reset();
}
//**Hard Button**//
function hard1(){
hard.addEventListener("click",function(){
  hard.classList.add("background");
  easy.classList.remove("background");
  numbox=6;
  colors=setcolors(numbox);
  picked = pick();
  displayclr.textContent = picked;
  for(var i=0; i<=box.length; i++){
      box[i].style.backgroundColor = colors[i];
      box[i].style.display= "block";
    }
  });
reset();
}

  //*Reset Button*//
function reset(){
button.addEventListener("click",function(){
  colors=setcolors(numbox);
  picked = pick();
  displayclr.textContent = picked;
  this.textContent="New colors"
  message.textContent="";
  for(var i=0; i<box.length; i++){
    box[i].style.backgroundColor = colors[i];
    head.style.background="rgb(255, 0, 98)";
  }
})
}
displayclr.textContent = picked;

function setup(){
for(var i=0; i< box.length; i++){
    box[i].style.backgroundColor = colors[i];

    box[i].addEventListener("click",function(){
       
      var clickedclr = this.style.backgroundColor;
    
      if(clickedclr === picked){
        message.textContent="Correct"
        button.textContent="Play Again?"
        change(clickedclr)
        head.style.background=clickedclr
      } else{
        this.style.backgroundColor="#232323";
        message.textContent="Try again"
      }
        });
}
}

//*Random color changes*//

function change(clr){
for(var i=0;i<box.length;i++){
box[i].style.backgroundColor=clr;
}}
function pick(){
  var random=Math.floor(Math.random() * colors.length);
  return colors[random]
}
function setcolors(num){
  var array =[];
  for(var i=0; i<=num; i++){
   array.push(getcolors())
  }
  return array;
}
function getcolors(){
  var r=Math.floor(Math.random() * 256);
  var g=Math.floor(Math.random() * 256);
  var b=Math.floor(Math.random() * 256);
  return "rgb("+r  + ", "  +g  + ", "  +b +")";
}