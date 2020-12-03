import React from 'react';

const TaskItemWidget = (props) =>{

    return (
        <div className="task-widget-card">
            <button className="task-widget-head" onClick={()=> props.formFunc(props.data.name)}>
                {props.data.name}
            </button> 
        </div>
    );
}

export default TaskItemWidget;