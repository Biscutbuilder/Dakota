function updateTime(){
    var currentTime = new Date().toLocaleString();
var timeText = document.querySelector("#timeElement");
timeText.innerhtml = currentTime;
}
setInterval(updateTime, 1000);
