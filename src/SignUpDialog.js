import React, {Component} from 'react';
import Dialog from './Dialog'
// import Clock from './Clock' function SayHello(props) {     if (!props.name) {
//         return <h1>Hello Jon Doe!</h1>     }     return <h1>Hello
// {props.name}!</h1> }

class SignUpDialog extends Component {
    // constructor(props) {     super(props); }
    render() {
        return (
            <Dialog title='Mars Exploration Program' message="How should we refer to you?">
                {/* <h1 className="Dialog-title">
                    {this.props.title}
                </h1>
                <h1 className="Dialog-message">
                    {this.props.message}
                </h1> */}
                Hi
            </Dialog>
        );
    };
}
export default SignUpDialog;
