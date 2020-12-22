import React,{useState} from 'react';
import TaskList from './TaskList';
import TaskItemForm from './TaskItemForm';

const MainComponent = (props) =>
{
    const [form,setForm] = useState(null);

    const addForm = (data) =>{
        setForm(<TaskItemForm task={data} removeFunc={removeForm} />);
    }

    const removeForm = () =>{
        setForm(null);
    }

    return (
        <div className="main-component row">
            <TaskList func={addForm} />
            {form?form:""}
        </div>
    );
}

export default MainComponent;