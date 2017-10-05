import React, { Component } from 'react';
// import './App.css';

class Clock extends Component {
  tick(){
    this.setState((prevState,props) => {
      return ({
      date:new Date(prevState.date.setSeconds(prevState.date.getSeconds()+1))
    })})
  }
  constructor(props) {
    super(props); //baseconstructor call
    console.log(props)
    this.state = {date: props.date};
  }
  componentDidMount(){
    console.log('Mounted')
    this.timerId =setInterval(
      ()=>{this.tick();
      console.log('HEre')}
    ,1000
  );
  }
  componentWillUnmount(){
    console.log('Unmounted')
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;