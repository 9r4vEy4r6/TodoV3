import React,{useState,useEffect} from 'react';
import '../css/Widget.css';

const TaskItemWidget = (props) =>{

    const [tick,setTick] = useState(false);
    const color = ["#22af00","#41d81d","#f00000","#d01d1d","#c9a800","#e5ef00"];

    const [outerStyle, setOuter] = useState({
        backgroundColor : color[1],
        borderColor : color[0],
    });

    const [innerStyle, setInner] = useState({
        borderColor : color[0],
        backgroundColor : "#fff"
    });

    useEffect( ()=> {
        // fetch("http://localhost:8000/todo/task/"+props.data.id)
        // .then(res => res.json())
        // .then(res => {
        //     const result = res;
        //     setTick(result.isComplete);
        //     if(res.priority===1)
        //     {
        //         setOuter({
        //             backgroundColor : color[3],
        //             borderColor : color[2],
        //         })
            
        //         setInner({
        //             borderColor : color[2],
        //             backgroundColor : "#fff"
        //         })
        //     }
        //     else if(res.priority===2)
        //     {
        //         setOuter({
        //             backgroundColor : color[5],
        //             borderColor : color[4],
        //         })
            
        //         setInner({
        //             borderColor : color[4],
        //             backgroundColor : "#fff"
        //         })
        //     }
        //     else
        //     {
        //         setOuter({
        //             backgroundColor : color[1],
        //             borderColor : color[0],
        //         })
            
        //         setInner({
        //             borderColor : color[0],
        //             backgroundColor : "#fff"
        //         })
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // })

        const res = props.data;
        setTick(res.isComplete);
        if(res.priority===1)
        {
            setOuter({
                backgroundColor : color[3],
                borderColor : color[2],
            })
        
            setInner({
                borderColor : color[2],
                backgroundColor : "#fff"
            })
        }
        else if(res.priority===2)
        {
            setOuter({
                backgroundColor : color[5],
                borderColor : color[4],
            })
        
            setInner({
                borderColor : color[4],
                backgroundColor : "#fff"
            })
        }
        else
        {
            setOuter({
                backgroundColor : color[1],
                borderColor : color[0],
            })
        
            setInner({
                borderColor : color[0],
                backgroundColor : "#fff"
            })
        }
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