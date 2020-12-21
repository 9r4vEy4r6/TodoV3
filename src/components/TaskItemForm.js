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
        <div className="task-item-form input-group">
            
            <div className="holder rem-holder text-right">
                <button className="remove-button btn btn-danger" onClick={props.removeFunc}>X</button>
            </div>
            <hr />
            <form onSubmit={handleSubmit(submitForm)} className="">
                <input type="text" className="task-name form-control"  ref={register} name="name"></input>
                <textarea className="task-description form-control" ref={register} name="description" ></textarea>
                <select type="select" name="priority" className="form-control" ref={register}>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <div className="holder save-holder text-center">
                    <input class="btn btn-success save-button" type="submit" value="Save Task"></input>
                </div>
            </form>
            <hr />
        </div>
    );
}

export default TaskItemForm;