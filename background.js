
function startTimer() {
    var settingIcon = chrome.browserAction.setIcon({path: "icon2.png"});
    var addText = chrome.browserAction.setBadgeText({text: "25m"}); // We have 10+ unread items.
    var t = setTimeout(function(){ alert("Time is up!"); }, 3000);
    
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();
    var s = d.getSeconds();
    if (s == 03){
        var timerSound = new Audio("sound/boom.wav");
        timerSound.Play();
    }
}

chrome.browserAction.onClicked.addListener(startTimer);