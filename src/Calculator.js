import React,{Component} from 'react';
import TemperatureInput from './TemperatureInput'

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state= {
            scale:'c',
            temperature:0
        };
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelciusChange(e){
        this.setState({
            scale:'f',
            temperature : e.target.value
        })
    }
    handleFahrenheitChange(e){
        this.setState({
            scale:'c',
            temperature:e.target.value
        })
    }
    // handleTemperatureChange (e){
    //     this.setState({
    //         temperature:e.target.value
    //     });
    // }
    render(){
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celcius = (scale === 'f') ? tryConvert(temperature,toFahrenheit):temperature;
        const fahrenheit = (scale === 'c') ? tryConvert(temperature,toCelsius):temperature;
        return (
            <div>
                <TemperatureInput scale='c' temperature={celcius} onChange={this.handleCelciusChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} onChange={this.handleFahrenheitChange}/>
            </div>
        );
    }
}
export default Calculator;