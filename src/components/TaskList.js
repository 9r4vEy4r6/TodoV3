import React, {useState, useEffect} from 'react';
import TaskItemWidget from './TaskItemWidget';

import '../css/List.css';

const TaskList = (props) => {

    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/todo/tasks")
        .then(res => res.json())
        .then(result => {
            const res = result;
            setList(res);
        })
        .catch(err=>{
            console.log(err);
        }); 
    }, []);

    if(list.length>0){
        const listitems = list.map(item=> <TaskItemWidget  key={item.id} data={item} formFunc={props.func} />);
        return(
            <div className="col-lg-6 col-md-12">
                <div className = "task-list-main">
                    {[listitems]}
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="task-list-main">
            </div>
        );
    }
}

export default TaskList;