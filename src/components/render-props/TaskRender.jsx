import React, { Component } from 'react';

class TaskRender extends Component {
    constructor(props) {
        super(props);
        this.state ={
            x : 20 ,
            y : 10
        }

        this.MouseTracker = this.MouseTracker.bind(this)

    
    }
    

    MouseTracker(e) {
         this.setState({
           x : e.x ,
           y:  e.y
         })
    } 

    
    render() {
        return (
            <div onMouseMove={this.MouseTracker}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class CarTracker  extends React.Component {
    render() {
    const track = this.props.track ;
    return(
        <div>
            <img  
              src='https://www.indiacarnews.com/wp-content/uploads/2015/11/BMW-G310R-3.jpg'
              alt=''
              style={{position : 'relative' , left : track.x , right : track.y  }}
              width='450'
            />
        </div>
    ) }
}

export const PositionTracker = () => {
    return (
        <div>
            <TaskRender render={ track => ( <CarTracker track={track} />) } />
        </div>
    )
}
export default TaskRender;
