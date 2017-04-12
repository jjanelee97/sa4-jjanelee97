import $ from 'jquery';
import './style.scss';

let seconds = 0;
function countSeconds() {
  console.log(seconds);
  $('#main').html(`You've been on this page for ${seconds} seconds`);
  seconds += 1;
}
setInterval(countSeconds, 1000);
