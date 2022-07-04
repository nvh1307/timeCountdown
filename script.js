const newYearTime = '1 Jan 2023';
const daysToNewYear = document.getElementById('days')
const hoursToNewYear = document.getElementById('hours')
const minsToNewYear = document.getElementById('minutes')
const secondsToNewYear = document.getElementById('second')

function Countdown(){
    const newYearDate = new Date(newYearTime);
    const currentTime = new Date();
    const totalSecond = (newYearDate - currentTime) /1000;
    
    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const mins = Math.floor(totalSecond / 60) %60;
    const seconds = Math.floor(totalSecond) % 60;
    daysToNewYear.innerHTML=days
    hoursToNewYear.innerHTML=hours
    minsToNewYear.innerHTML=mins
    secondsToNewYear.innerHTML=seconds

}
setInterval(Countdown,1000)