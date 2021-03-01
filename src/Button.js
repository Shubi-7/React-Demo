import React,{useState} from 'react'

const Button=()=> {

//    const [state,setstate]=useState("green")
//    console.log("i am nitan")

        const [state,setstate]=useState(false)
    

    return (
        <div>

        {/* <button onMouseEnter={(e)=>{e.currentTarget.style.backgroundColor="red"}} onMouseLeave={(e)=>{e.currentTarget.style.backgroundColor="green"}} style={{backgroundColor:"green"}}>clickme</button> */}
        
        {/* <button onMouseOut={()=>{setstate("green")}} onMouseOver={()=>{setstate("red")}} style={{backgroundColor:state}}>Click Me</button>     */}
          
          

           <button onClick={(e)=>{setstate(!state)}}>

           {
              
              (state)?"like":"unlike"
          }
           </button>

           <br/>
           <br/>

        </div>

        


    )
}



export default Button
