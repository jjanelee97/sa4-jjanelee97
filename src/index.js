import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => {
  return <div className="test">All the React are belong to us!</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));
//
// let seconds = 0;
// function countSeconds() {
//   console.log(seconds);
//   $('#main').html(`You've been on this page for ${seconds} seconds`);
//   seconds += 1;
// }
// setInterval(countSeconds, 1000);
