import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }  

      handleChange(event) {
    
        this.setState({value : event.target.value })
       
      }
      
      handleSubmit(event) {
        window.alert('The Entered user details is ' + this.state.value)
        event.preventDefault();
      }
    render() {
        return (
            <div>
                <form>
                <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

                    <button onSubmit={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
