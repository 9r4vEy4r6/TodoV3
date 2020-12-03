import React,{useState} from 'react';
import TaskList from './TaskList';
import TaskItemForm from './TaskItemForm';

const MainComponent = (props) =>
{
    const [form,setForm] = useState(null);

    const addForm = (name) =>{
        setForm(<TaskItemForm name={name} removeFunc={removeForm} />);
    }

    const removeForm = () =>{
        setForm(null);
    }

    return (
        <div className="main-component">
            <TaskList func={addForm} />
            {form?form:""}
        </div>
    );
}

export default MainComponent;