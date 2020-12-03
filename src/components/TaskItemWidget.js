import React,{useState,useEffect} from 'react';

const TaskItemWidget = (props) =>{

    const [tick,setTick] = useState(false);

    useEffect( ()=> {
        fetch("http://localhost:8000/todo/task/"+props.data.id)
        .then(res => res.json())
        .then(res => {
            const result = res;
            setTick(result.isComplete);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleTick = (id) => {
        if(tick){
            fetch("http://localhost:8000/todo/undo/"+props.data.id)
            .then(res => res.json())
            .then(result =>{
                setTick(false);
            })
            .catch(err => {
                console.log(err);
            })
        }
        else{
            fetch("http://localhost:8000/todo/do/"+props.data.id)
            .then(res => res.json())
            .then(result =>{
                setTick(true);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <div className="task-widget-card">
            <div className="task-widget-head" onClick={()=> props.formFunc(props.data)}>
                {props.data.name}
            </div> 
            <input className="task-completed" type="checkbox" checked={tick} onChange={handleTick} />
            <div className="task-description">
                <p>{props.data.description.substring(0,20)+"..."}</p>
            </div>
        </div>
    );
}

export default TaskItemWidget;