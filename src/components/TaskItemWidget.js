import React from 'react';

const TaskItemWidget = (props) =>{
    return (
        <div className="task-widget-card">
            {props.data.name}
        </div>
    );
}

export default TaskItemWidget;