import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// function Welcome(props) {
//   console.log(props);
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Rohan" here="Gada"/>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// function formatName(params) {
//   return params.firstName + ' '+ params.lastName; 
// }
// const user = {
//   firstName: 'Rohan',
//   lastName : 'Gada'
// }
//  let tick = () =>{
//    const element = (
//      <div className="padding-10">
//        <h1> Hello, {formatName(user)}!</h1>
//        <h2>It is {new Date().toLocaleTimeString()}.</h2>
//      </div>

//    );
//   ReactDOM.render(element, document.getElementById('root'));
// };
//  setInterval(tick,1000);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
