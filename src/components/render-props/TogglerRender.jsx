import React, { Component } from 'react';

class TogglerRender extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            toggler : props.initialValue
        } 
        this.Toggle = this.Toggle.bind(this) ;
        
    }

    Toggle() {
        this.setState(prevState => ({
            toggler: !prevState.toggler
          }));
    }
    render() {
        return  this.props.children(this.state.toggler ,this.Toggle)
    }
}

export default TogglerRender;
