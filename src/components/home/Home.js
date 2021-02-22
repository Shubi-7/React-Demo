import React from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
import Gallery from '../gallery/Gallery'
import Arrow from '../Arrow'
import Counter from '../../Counter'


const Home=()=>{
    return(
        <>
        <Nav/>
        <Carousel/>
        <div className="row">
        <Gallery/>
        </div>
         <Arrow/>
         <Counter/>

    
    </>
    )
}

export default Home
