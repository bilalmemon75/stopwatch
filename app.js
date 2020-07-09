var min = 0;
var sec = 0;
var msec = 0;
var minH = document .getElementById("min");
var secH = document .getElementById("sec");
var msecH = document .getElementById("msec");
var interval ;



function timer(){
    msec++
    msecH.innerHTML = msec ;
    if(msec >= 1000){
    sec++
    secH.innerHTML = sec;
    msec = 0; 
     } else if (sec >= 60){
         min++
         minH.innerHTML = min
         sec = 0
        }
        
    }


function start() {
interval = setInterval(timer,10)

}

function stop() {
   clearInterval(interval)
 
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minH.innerHTML = min
    secH.innerHTML = sec
    msecH.innerHTML = msec
    clearInterval(interval)
}
function disable(){
  document.getElementById("st").disabled = true;
  

}
