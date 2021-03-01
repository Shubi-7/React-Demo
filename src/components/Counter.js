import React,{useState, useEffect} from 'react';


const Counter=()=>{

    const [value, setValue]=useState(0)
    useEffect(()=>{
        alert('button is clicked')
    },[])
    return(
        <>
        <p>{value}</p>
        <button onClick={()=>setValue(value+1)}>Click</button>
        </>

    )
}

export default Counter