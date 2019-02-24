var startTime;
var i = 5;
var greenCounter;

function startTimer() {
    changeIcon();
}

var countDown = setInterval(function() {
  chrome.browserAction.setBadgeText({text:String(i) + 's'});
  if (i <= 0){
      clearInterval(countDown);
      playMusic();
      chrome.browserAction.setBadgeText({text: ''})
      notifyMe();
  }
  i--; 
}, 1000);

function notifyMe() {
    chrome.notifications.create('some id for this notification', chromeOptions);
}

var chromeOptions = {
    type: "basic",
    title: "Test notificaiton.",
    message: "A Message",
    iconUrl: "test.png",
};

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

chrome.browserAction.onClicked.addListener(startTimer);
