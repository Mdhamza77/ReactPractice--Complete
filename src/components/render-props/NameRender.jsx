import React, { Component } from 'react';



class NameRender extends Component {
    state = {
        name : "Don't be Afraid of other's Negative thinking about you"
    }
    render() {
        return (
            <div>
                  {this.props.render(this.state.name)}
            </div>
        );
    }
}



export const Names = () => {
    return (
        <NameRender render = { name => <h2> {name}</h2> } />
    )
}
export default NameRender;
