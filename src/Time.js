import React,{useState} from 'react'

const Time=()=> {

    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        
        return function cleanup() {
        clearInterval(timerID);
        };
        
        });
        
        function tick() {
        setDate(new Date());
        }

    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    )
}

export default Time
