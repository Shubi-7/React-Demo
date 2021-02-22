import React from 'react'
import Demo from '../test/Demo';
import gallerydata from './gallerydata';




const Gallery=()=>{
    return(
        <>
        {gallerydata.map(item=> <Demo key={item.id} imgURL={item.imgURL} Title={item.Title} detail={item.detail}/>
)}
        </>
    )
}

export default Gallery
