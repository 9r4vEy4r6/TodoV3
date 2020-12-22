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
        //console.log(data);

        var formData = JSON.stringify(data);
        var requestOptions = {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body : formData,
            redirect : 'follow'
        }

        fetch("http://localhost:8000/todo/task/"+props.task.id, requestOptions)
        .then(res => res.json())
        .then(res => {
            //console.log(res);
            setValue("name", data["name"]);
            setValue("description", data["description"]);
            setValue("priority", data["priority"]);
        })
        .catch(err => {
            console.log("Error!");
        })
    };

    return(
        <div className="task-item-form input-group">
            
            <div className="holder rem-holder text-right">
                <button className="remove-button btn btn-danger" onClick={props.removeFunc}>X</button>
            </div>
            <hr />
            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" className="task-name form-control"  ref={register} name="name"></input>
                <textarea className="task-description form-control" ref={register} name="description" ></textarea>
                <select type="select" name="priority" className="form-control" ref={register}>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <div className="holder save-holder text-center">
                    <input className="btn btn-success save-button" type="submit" value="Save Task"></input>
                </div>
            </form>
            <hr />
        </div>
    );
}

export default TaskItemForm;