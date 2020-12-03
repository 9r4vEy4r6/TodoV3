import React from 'react';

const TaskItemForm = (props) =>{
    return(
        <div className="task-item-form">
            <hr />
            <button onClick={props.removeFunc}>Remove</button>
            {props.name}
        </div>
    );
}

export default TaskItemForm;