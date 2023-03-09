import React, { Component } from 'react';
import Task2 from './task2';

class Task1 extends Component {
    render() {
        return (
            <div>
                <p>Welcome to {this.props.name}</p>
                <Task2 isloading={true} name ="Muhammed Hamza" />
            </div>
        );
    }
}

export default Task1;
