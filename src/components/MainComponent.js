import React,{useRef, useState} from 'react';
import TaskList from './TaskList';
import TaskItemForm from './TaskItemForm';
import NewItemForm from './NewItemForm';
import Navbar from './Navbar';

const MainComponent = (props) =>
{
    const [form,setForm] = useState(null);
    const listRef = useRef();

    const addEmptyForm = () =>{
        setForm(<NewItemForm listRef={listRef}  removeFunc={removeForm}/>);
    }

    const addForm = (data) =>{
        setForm(<TaskItemForm task={data} removeFunc={removeForm} listRef={listRef} />);
    }

    const removeForm = () =>{
        setForm(null);
    }

    return (
        <div class="main">
            <Navbar add={addEmptyForm}/>
            <div className="main-component row">
                <TaskList func={addForm} ref={listRef} />
                {form?form:""}
            </div>
        </div>
    );
}

export default MainComponent;