# Pomodoro Kirby
- Recreate the concept of the Pomodoro Timer (25 mins working block and 5 minute break)
- [More info on Pomodoro Technique here.](https://en.wikipedia.org/wiki/Pomodoro_Technique)
- [Example Chrome Extension](https://chrome.google.com/webstore/detail/strict-workflow/cgmnfnmlficgeijcalkgnnkigkefkbhd?hl=en)
- Have tested the 25minutes in a 5 second module and 5 minute break in a 3 second module
- Timeline: ~~Ship in 5 days~~ Finished in 6 days.

<br>

### Coding Process:

1.Figure out the main components needed for Google Chrome extension.
- Simple HTML / CSS / JS 

<br>

2.Download the Manifest.json file.
- This is where the information is read.
- JSON file is a data format to store simple JS Data. Quite common in previous projects
- Set up the template

<br>

3.Link the Popup html Template.
- Did not need to use much of this.

<br>

4.Test onClick function()
- The tutorial here was a simple example that I could replicate()
- Used the browser UpdateIcon button.
- Have to turn it back to the other timer..?

<br>

5.Structure for the two main functions startFirstTimer and startSecondTimer.
- Change icon
- Have a time mechanism
- Change the strings for the timer and reset them once complete
- Add audio 

<br>

Future to do:
- Change the seconds to real minutes
- Change the audio 
- Record history and create a database to analyse one's productivity
- Interact with FB Messenger bot 

<br>
To test this Extension:
1. Clone this repo
2. Go to Chrome --> More Tools --> Extensions
3. Toggle Developer Mode
4. Load unpacked with the cloned repo
