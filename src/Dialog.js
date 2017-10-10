import React, {Component} from 'react';
import FancyBorder from './FancyBorder'
// import Clock from './Clock'

// function SayHello(props) {
//     if (!props.name) {
//         return <h1>Hello Jon Doe!</h1>
//     }
//     return <h1>Hello {props.name}!</h1>
// }

class Dialog extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <FancyBorder color='blue'>
                <h1 className = "Dialog-title" > {this.props.title} </h1>
                <h1 className="Dialog-message">
                    {this.props.message}
                </h1 >
                {this.props.children}
            </FancyBorder>
        );
    };
}
export default Dialog;
