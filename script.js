const minuteInput = document.getElementById('minutes');
const startbutton = document.getElementById('start');
const resetbutton = document.getElementById('reset');
const countdownDisplay = document.getElementById('display');
const alarmSound = new Audio('https://www.image2url.com/r2/default/audio/1783731884967-6ac11c7d-eb4a-4329-b22e-8724cf1bf569.wav')
document.querySelector('p');
let countdowninterval; //to store interval ID
//start countdown
startbutton.addEventListener("click", () => {
  clearInterval(countdowninterval);
  const minutes = Number(minuteInput.value)
  //validate the input
  if(isNaN(minutes) || minutes <= 0){
    alert('Please enter a valid number');
    return;
  }
  //convert min to sec
  let timeLeft = minutes * 60;
  //update the countdown every second
  countdowninterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    //display the time in mm:seconds format
    countdownDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ""}${seconds}`;
    timeLeft--;
    //stop the countdown when timeleft is 0
    if(timeLeft < 0){
      clearInterval(countdowninterval);
      alarmSound.play();
      countdownDisplay.textContent = "time's up!";
    }
  }, 1000);
  });
//reset countdown
resetbutton.addEventListener("click", () => {
  clearInterval(countdowninterval);//stop countdown
  countdownDisplay.textContent = "00:00" //Reset Display
  minuteInput.value = ""; //clear input field
});
