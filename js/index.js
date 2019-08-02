/* jshint esversion: 8 */


function updateClock ()

{

   const currentTime = new Date();
   let hours = currentTime.getHours();
   let minutes = currentTime.getMinutes();
   let seconds = currentTime.getSeconds();


  minutes = ( minutes < 10 ? "0" : "" ) + minutes;

  seconds = (seconds < 10 ? '0': '' ) + seconds;

  const timeOfDay = hours < 12  ? 'AM' : 'PM';


  hours = ( hours > 12 ) ? hours - 12 : hours;

  hours = (hours === 0)? 12 : hours;

  const currentTimeString = `${hours} : ${minutes} : ${seconds} ${timeOfDay}`;

  document.getElementById('clock').innerHTML = currentTimeString;

}

setInterval(updateClock, 0);
