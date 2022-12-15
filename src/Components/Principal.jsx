import React from 'react'
import { HeaderFiczeria } from './Header/HeaderFiczeria'
import Fondo from './img/portada.jpg'
import Pizza from './img/pizza_recortada.png'
import './Css Files/Principal.css'

export const Principal = () => {
  return (
   <>
    <HeaderFiczeria/>
    <img srcSet={Pizza} style={{position:"absolute",top:"15%",height: "600px"}} className="img-fluid " alt="Fondo"/>

        <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
        
   </>
  )
}
