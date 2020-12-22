import React,{useRef, useState} from 'react';
import TaskList from './TaskList';
import TaskItemForm from './TaskItemForm';

const MainComponent = (props) =>
{
    const [form,setForm] = useState(null);
    const listRef = useRef();

    const addForm = (data) =>{
        setForm(<TaskItemForm task={data} removeFunc={removeForm} listRef={listRef} />);
    }

    const removeForm = () =>{
        setForm(null);
    }

    return (
        <div className="main-component row">
            <TaskList func={addForm} ref={listRef} />
            {form?form:""}
        </div>
    );
}

export default MainComponent;