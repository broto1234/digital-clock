function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ammPm = 'AM';
  let x = document.getElementById('wholeBody');
  let y = document.querySelector('.clock');

  if (hours >= 5 && hours <= 8) {
    x.style.background = "url('morning.jpg') no-repeat center";
    y.style.background = "transparent";
  } else if (hours > 8 && hours < 16) {
    x.style.background = "url('day.jpg') no-repeat center";
    y.style.background = "#f0932b";
  } else if (hours >= 16 && hours < 18) {
    x.style.background = "url('sunset.jpg') no-repeat center";
    y.style.background = "#ffda79";
  } else {
    x.style.background = "url('night.jpg') no-repeat center";
    y.style.background = "rgba(0, 0, 255, 0.3)";
  }

  hours = (hours === 0) ? hours = 12 : hours;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  if (hours > 12) {
    hours = hours - 12;
    hours = hours < 10 ? '0' + hours : hours;
    ammPm = "PM";
  }
  
  let presentTime = `${hours}:${minutes}:${seconds}`;

  document.getElementById('time').innerHTML = presentTime;
  document.querySelector(".ammPm").innerHTML = ammPm;

 setInterval(digitalClock, 1000);
}

digitalClock();