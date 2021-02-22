import React,{useState} from 'react'


const Counter=()=>{


    const[count,updateCount]=useState(0)
    return(
        <>
        <p>{count}</p>
        <button onClick={()=>updateCount(count+1)}>Click Me</button>
        <button onClick={()=>count==0 ? 0:updateCount(count-1)}>Click Me</button>
        </>
    )
}



export default Counter
