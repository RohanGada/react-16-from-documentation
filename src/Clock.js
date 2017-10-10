import React, {Component} from 'react';
// import './App.css'; function Component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
//function Component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
//function Component
function SayHello(props) {
  if (!props.name) {
    return <h1>Hello Jon Doe!</h1>
  }
  return <h1>Hello {props.name}!</h1>
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
      numbers: [1],
      name: ''
    };
    this.bindValue = this
      .bindValue
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  bindValue = (property, e) => {
    this.setState({[property]: e.target.value});
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

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    // const isLoggedIn = this.state.isLoggedIn;
    // console.log(isLoggedIn,this.state.isLoggedIn) console.count();
    let button = null;
    const name=this.state.name;
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
        <SayHello name={name}/>
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
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={(e) => this.bindValue('name', e)}/>
          </label>
          < input type="submit" value="Submit"/>
        </form>
        <fieldset >
          <legend>
            tryinf this
          </legend>

        </fieldset>
      </div>
    );
  }
}

export default Clock;