import React, {Component} from 'react';
// import './App.css';
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class Clock extends Component {

  constructor(props) {
    super(props); //baseconstructor call
    // console.log(props)
    let {warn, date} = props;
    this.state = {
      warn,
      date,
      isToggleOn: true,
      isLoggedIn: false,
      numbers: [1]
    };
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }

  handleLoginClick(e) {
    let numbers = this.state.numbers;

    numbers.push(this.state.numbers[this.state.numbers.length - 1] + 1);
    this.setState({numbers, isLoggedIn: false})
  }

  handleLogoutClick(e) {
    this.setState({isLoggedIn: true})
  }

  tick() {
    this.setState((prevState, props) => {
      //  console.log(prevState)
      return ({
        date: new Date(prevState.date.setSeconds(prevState.date.getSeconds() + 1))
      })
    })
  }

  componentDidMount() {
    // console.log('Mounted')
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUpdate() {
    // console.log('componentWillUpdate')
  }

  activateLasers() {
    this.setState((prevState) => {
      return ({
        isToggleOn: !prevState.isToggleOn
      })
    })
  }

  componentWillUnmount() {
    // console.log('Unmounted')
    clearInterval(this.timerId);
  }

  handleClick(e) {
    // console.log(e);

    e.preventDefault();
  }

  render() {
    // const isLoggedIn = this.state.isLoggedIn;
    // console.log(isLoggedIn,this.state.isLoggedIn) console.count();
    let button = null;
    if (this.state.isLoggedIn) {
      button = <LoginButton onClick={this
        .handleLoginClick
        .bind(this)}/>
    } else {
      button = <LogoutButton onClick={this
        .handleLogoutClick
        .bind(this)}/>
    }
    if (this.state.warn) {
      return null;
    }
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this
            .state
            .date
            .toLocaleTimeString()}.</h2>
        <button onClick={this
          .activateLasers
          .bind(this)}>
          {this.state.isToggleOn
            ? "YES"
            : "NO"}
        </button>
        <a href='' onClick={this.handleClick}>
          Click me
        </a>
        {button}
        <ul>
          {this
            .state
            .numbers
            .map((number) => <li key={number.toString()}>{number}
            </li>)
}
          {/*
  Key added to remove the array repeat DOM issue
  */}
        </ul>
      </div>
    );
  }
}

export default Clock;