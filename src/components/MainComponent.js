import React,{useState} from 'react';
import TaskList from './TaskList';
import TaskItemForm from './TaskItemForm';

const MainComponent = (props) =>
{
    const [form,setForm] = useState(null);

    const addForm = () =>{
        setForm(<TaskItemForm/>);
    }

    const removeForm = () =>{
        setForm(null);
    }

    return (
        <div className="main-component">
            <TaskList func1={addForm} func2={removeForm} />
            {form?form:""}
        </div>
    );
}

export default MainComponent;