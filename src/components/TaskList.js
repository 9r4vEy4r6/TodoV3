import React, {useState, useEffect} from 'react';

const TaskList = () => {

    const [list, setList] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:8000/todo/tasks")
        .then(res => res.json())
        .then(result => {
            setList(result);
        })
        .catch(err=>{
            console.log(err);
        });
    },[]);
    
    if(list){
        return(
            <div className="task-list-main">
                Hello
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