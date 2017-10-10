import React,{Component} from 'react'
const temperatureUnit = {
    c:'Celcius',
    f:'Fahrenheit'
}
class TemperatureInput extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        console.log('TemperatureInput mounted')
    }
    handleChange(e){
        console.log(e.target.value);
        
    }
    render(){
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
           <fieldset>
               <legend>Enter temperature in {temperatureUnit[scale]}</legend>
                <input type="number" min='0' value={temperature} onChange={this.props.onChange}/>
           </fieldset>
        )
    }
}
export default TemperatureInput;