import React,{useState,useEffect} from 'react';
import '../css/Widget.css';

const TaskItemWidget = (props) =>{

    const [tick,setTick] = useState(false);
    const [color, setColor] = useState(["#22af00","#41d81d","#f00000","#d01d1d","#c9a800","#e5ef00"]);

    var outerStyle = {
        backgroundColor : color[1],
        borderColor : color[0],
    }

    var innerStyle = {
        borderColor : color[0],
        backgroundColor : "#fff"
    }

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
        <div className="task-widget-card" style={outerStyle}>
            <div className="task-widget-card-block" style={innerStyle}>
                <div className="check">
                    <span>
                    <input className="task-completed" type="checkbox" checked={tick} onChange={handleTick} />
                    </span>
                </div>
                <div className="task-widget-head" onClick={()=> props.formFunc(props.data)}>
                    <strong>{props.data.name}</strong>
                </div> 
            </div>
        </div>
    );
}

export default TaskItemWidget;