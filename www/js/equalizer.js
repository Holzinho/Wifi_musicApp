
var also = function(){
    console.log('wer ist hier der Boss?!');
};




//A function to return a random number between a min and a max value
function randomNumber(min, max) {
    number =  Math.floor((Math.random()*(max-min))+ min);
    return number;
  }
  
  //Initialise starting values
  var purple, blue, cyan, green, yellow, orange, red, violet;
  purple = 160;
  blue = 140;
  cyan = 100;
  green = 140;
  yellow = 160;
  orange = 70;
  red = 180;
  violet = 110
  
  
  var playing=true;
  
  
  function changeHeight(column, height) {
    height-=randomNumber(-20,20);
    if (height>200) height=200;
    if (height<5) height=5;
    column.style.height=height + "px";  
    return height;
  }
  
  

  function animate() {
    if (playing) {
      purple = changeHeight(document.getElementById("purple"),purple);     
      blue = changeHeight(document.getElementById("blue"),blue); 
      cyan = changeHeight(document.getElementById("cyan"),cyan); 
      green = changeHeight(document.getElementById("green"),green); 
      yellow = changeHeight(document.getElementById("yellow"),yellow); 
      orange = changeHeight(document.getElementById("orange"),orange); 
      red = changeHeight(document.getElementById("red"),red); 
      violet = changeHeight(document.getElementById("violet"), violet);
      
      
      setTimeout(animate, 50);
    }
  }
  animate();
  
