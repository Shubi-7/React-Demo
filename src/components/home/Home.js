import React from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
import Gallery from '../gallery/Gallery'
import Arrow from '../Arrow'


const Home=()=>{
    return(
        <>
        <Nav/>
        <Carousel/>
        <div className="row">
        <Gallery/>
        </div>
         <Arrow/>

    
    </>
    )
}

export default Home
