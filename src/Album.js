import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Album=()=> {

    const [photo, setPhoto]=useState([])

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            console.log(res.data)
            setPhoto(res.data)
        })
        .catch(err=>console.log(err))
    },[])


    return (
        <>
            <div className="container">
            <div style={{display:"flex",flexWrap:"wrap"}}>
            {photo.map(e=><img src={e.thumbnailUrl} alt="..." height="150px" width="150px"/>)}
            </div>
            </div>
            {/* <div className="card-body">
                {photo.map(e=><h5 className="card-title">{e.title}</h5>)}
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div> */}
            
        </>
    )
}

export default Album
