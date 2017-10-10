import React, {Component} from 'react';
import FancyBorder from './FancyBorder'
import Clock from './Clock'

function SayHello(props) {
    if (!props.name) {
        return <h1>Hello Jon Doe!</h1>
    }
    return <h1>Hello {props.name}!</h1>
}

class WelcomeDialog extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FancyBorder color='blue'>
                <SayHello/>
                I am a child prop
            </FancyBorder>
        );
    };
}
export default WelcomeDialog;