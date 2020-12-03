import React,{useState} from 'react';
import TaskItemForm from './TaskItemForm';

const TaskItemWidget = (props) =>{

    const [form,setForm] = useState(null);

    const renderform = (str) =>{
        setForm(<TaskItemForm name={str} />)
        console.log("fired");
    }

    return (
        <div className="task-widget-card">
            <button className="task-widget-head" onClick={()=> renderform(props.data.name)}>
                {props.data.name}
            </button> 
        </div>
    );
}

export default TaskItemWidget;