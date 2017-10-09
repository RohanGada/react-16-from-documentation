import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <Clock date={new Date(new Date().setMinutes(20))}/>
        <Clock warn={true} date={new Date(new Date().setMinutes(20))}/>

        {/* < form >
          <label>
            Name:
            <input type="text" value={this.state.name} name="name" onChange={this.handleClick}/>
          </label>
          < input type="submit" value="Submit"/>
        </form> */}
      </div>
    );
  }
}

export default App;
