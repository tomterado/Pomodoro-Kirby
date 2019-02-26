
var i = 5;
var clickCounter = 0;
var j = 3;

function startFirstTimer() {
    var countDown1 = setInterval(function() {
        chrome.browserAction.setBadgeText({text:String(i) + 's'});
        if (i <= 0){
            clearInterval(countDown1);
            audioPlay();
            chrome.browserAction.setBadgeText({text: ''})
            notifyMe();
            var settingIcon = chrome.browserAction.setIcon({path: "icon2.png"});
            clickCounter++;
        }
        i--;
      }, 1000);
}

function startSecondTimer(){
    var countDown2 = setInterval(function() {
        chrome.browserAction.setBadgeText({text:String(j) + 's'});
        if (j <= 0){
            clearInterval(countDown2);
            audioPlay();
            chrome.browserAction.setBadgeText({text: ''})
            notifyMe2();
            var settingIcon2 = chrome.browserAction.setIcon({path: "icon.png"});
            clickCounter++;
        }
        j--; 
      }, 1000);
}

function audioPlay(){
    var audio = new Audio("sounds/boom.wav");
    audio.play();
}

function notifyMe() {
    chrome.notifications.create("", chromeOptions);
    chrome.notifications.clear("");
}
function notifyMe2() {
    chrome.notifications.create("", chromeOptions2);
    chrome.notifications.clear("");
}

var chromeOptions = {
    type: "basic",
    title: "Your 25 minutes is up.",
    message: "Time to take a break",
    iconUrl: "test.png",
};

var chromeOptions2 = {
    type: "basic",
    title: "Your 5 minutes is up.",
    message: "Time to work again",
    iconUrl: "test.png",
};

chrome.browserAction.onClicked.addListener(function test(){
    if (clickCounter == 0){
        startFirstTimer();
    } else if (clickCounter == 1){
        startSecondTimer();
    } else if (clickCounter == 2){
        clickCounter = 0;
        i = 5;
        j = 3;
        startFirstTimer();
    }
});
