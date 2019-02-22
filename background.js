var startTime;
var i = 10;
var greenCounter;

function startTimer() {
    changeIcon();
    tttt;
}

var countDown = setInterval(function() {
  chrome.browserAction.setBadgeText({text:String(i) + 's'});
  if (i <= 0){
      clearInterval(countDown);
      playMusic();
      chrome.browserAction.setBadgeText({text: ''})
  }
  i--; 
}, 1000);

function changeIcon() {
    var timeleft = 5;
    startTime = new Date();
    var s = startTime.getTime()/1000
    timeString = s.toString();
    
    var settingIcon = chrome.browserAction.setIcon({path: "icon2.png"});
    ///set the alarm...
    // var playMusic = setTimeout(function(){
    //     console.log("Time is up!");
    //     var audio = new Audio("sounds/boom.wav");
    //     audio.play();
    // }, 3000);
    
}

function playMusic(){
    var audio = new Audio("sounds/boom.wav");
    audio.play();
}


// function big(){
//     var measureT = setInterval(function(){
//         console.log("hello 1 second");
//     }, 1000);
// }

chrome.browserAction.onClicked.addListener(startTimer);
