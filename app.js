const timerTextElement = document.querySelector('[data-timer]');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const resetButton = document.querySelector('[data-reset]');

let hour = 0,minute = 0,second = 0, millisecond = 0;
let timeInterval;

startButton.addEventListener('click', () => {
  clearInterval(timeInterval);
  timeInterval = setInterval(() => {
    millisecond++;
    if(millisecond < 10) millisecond = '0' + millisecond;
    if(millisecond == 100){
      millisecond = 0;
      second++;
      if(second < 10) second = '0' + second;
      if(second == 60){
        second = 0;
        minute++;
        if(minute < 10) minute = '0' + minute;
        if(minute == 60){
          minute = 0;
          hour++;
          if(hour < 10) hour = '0' + hour;
          if(hour == 24){
            timerTextElement.innerHTML = "maximum reached";
            clearInterval(timerInterval);
          }
        }
      }
    }


  timerTextElement.innerHTML = `${hour} : ${minute} : ${second} : ${millisecond}`;
  }, 10);
})

stopButton.addEventListener('click', () => {
  clearInterval(timeInterval);
})

resetButton.addEventListener('click', () => {
  clearInterval(timeInterval);
  hour = 0; minute = 0; second = 0; millisecond = 0;
  timerTextElement.innerHTML = '0 : 0 : 0 : 00';
})