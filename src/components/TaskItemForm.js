import React from 'react';
import '../css/Form.css';

const TaskItemForm = (props) =>{
    return(
        <div className="task-item-form">
            <hr />
            <button className="remove-button" onClick={props.removeFunc}>Remove</button>
            <div className="task-name">{props.task.name}</div>
        </div>
    );
}

export default TaskItemForm;