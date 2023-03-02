import React, { Component } from 'react';
import TogglerRender from './TogglerRender';

class EditableRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : props.initialValue
        }

    }
    setValue(newValue){
        this.setState({
            value : newValue
        })
    }
    render() {
        return (
            <div>
                <TogglerRender initialValue={false} >
                   {(toggle , setIsToggle) => 
                    <div>
                        {
                            toggle ? 
                             <label>
                               {this.props.label}
                               <input value={this.state.value} onChange={(event)=> this.setValue(event.target.value) }  placeholder="Render Props" />
                             </label>  : (<span>{this.state.value}</span>)
                        }  
                        <button onClick={setIsToggle}>{toggle ? 'Done' : 'Edit'}</button>
                    </div>
                   
                   }
                </TogglerRender>
            </div>
        );
    }
}

export default EditableRender;
