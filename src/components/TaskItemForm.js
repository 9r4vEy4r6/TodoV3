import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import '../css/Form.css';

const TaskItemForm = (props) =>{

    const {register, handleSubmit, setValue}  = useForm();
    
    useEffect( ()=> {
        setValue("name", props.task.name);
        setValue("description", props.task.description);
    });

    const submitForm = (data) => {
        data["isComplete"] = false;
        console.log(data);
    };

    return(
        <div className="task-item-form">
            <hr />
            <button className="remove-button" onClick={props.removeFunc}>Remove</button>
            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" className="task-name"  ref={register} name="name"></input>
                <input type="text" className="task-description" ref={register} name="description"></input>
                <select type="select" name="priority" ref={register}>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default TaskItemForm;