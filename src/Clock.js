import React, {Component} from 'react';
// import './App.css';

class Clock extends Component {

  constructor(props) {
    super(props); //baseconstructor call
    console.log(props)
    this.state = {
      date: props.date,
      isToggleOn: true
    };
  }
  tick() {
    this.setState((prevState, props) => {
      // console.log(prevState)
      return ({
        date: new Date(prevState.date.setSeconds(prevState.date.getSeconds() + 1))
      })
    })
  }
  componentDidMount() {
    console.log('Mounted')
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  activateLasers() {
    console.log('clicked')
    this.setState((prevState) => {
      return ({
        isToggleOn: !prevState.isToggleOn
      })
    })
  }

  componentWillUnmount() {
    console.log('Unmounted')
    clearInterval(this.timerId);
  }

  handleClick(e) {
    console.log(e)
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this
            .state
            .date
            .toLocaleTimeString()}.</h2>
        <button onClick={this.activateLasers.bind(this)}>
          {this.state.isToggleOn
            ? "YES"
            : "NO"}
        </button>
        <a href='' onClick={this.handleClick}>
          Click me
        </a>
      </div>
    );
  }
}

export default Clock;