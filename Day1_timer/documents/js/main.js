let sec = 0;
let min = 0;
let hour = 0;
let timer;
let timer_element = document.getElementById("time");

let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");

start_btn.addEventListener("click", function(){
    timer = setInterval(timeHandler, 1000);
})

stop_btn.addEventListener("click", function(){
   timer = clearInterval(timer);
})


let reset_btn = document.getElementById("reset");

reset_btn.addEventListener("click", function(){
    console.log("hey");
   timer = clearInterval(timer);
   timer_element.innerHTML = "00:00:00";
})



function timeHandler() {


  sec++;

  if (sec == 60) {
    sec = 0;
    min++;
  }

  if (min == 60) {
    min = 0;
    hour++;
  }
  displayTimer();
}


function displayTimer(){

    let sec_pretty = sec;
    let min_pretty = min;
    let hour_pretty = hour;

    if (sec_pretty <10){
        sec_pretty = "0" + sec;
    }
    if (min_pretty <10){
        min_pretty = "0" + min;
    }

    if (hour_pretty <10){
        hour_pretty = "0" + hour;
    }
  
    let timer_element = document.getElementById("time");
    timer_element.innerHTML = hour_pretty + ":" + min_pretty + ":" + sec_pretty;
}