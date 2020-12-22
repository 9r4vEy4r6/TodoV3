import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import TaskItemWidget from './TaskItemWidget';

import '../css/List.css';

const TaskList = (props, ref) => {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, ()=> ({

        reload() {
            setCount(count+1);
            setList([]);
        }

    }));

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
    }, [count]);

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

export default forwardRef(TaskList);