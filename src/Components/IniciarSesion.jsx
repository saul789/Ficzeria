import React from 'react'
import { HeaderFiczeria } from './Header/HeaderFiczeria'
//import './Css Files/iniciarSesion.css'
import Fondo from './img/portada.jpg'

export const IniciarSesion = () => {
    const ruta={
        registro:"/Registro",
        olvidar:"/OlvidoContraseña",
        iniciar:"/InicioAdministrador"
      
      }
  return (
    <>
    <HeaderFiczeria/>
    
    <div className="formulario">
                <h1>
                    Inicio de sesión
                </h1>
                <form method="get" action={ruta.iniciar}>
                    <div className="username">
                        <i className="fa-solid fa-user icon"></i>
                        <input type="text" name="name" id="nombre" placeholder="Ingresa tu nombre" required/>
                    </div>
                    <div className="username">
                        <i className="fa-solid fa-key icon"></i>
                        <input type="password" name="password" id="pass" placeholder="Ingresa tu contraseña" required/>
                    </div>
                    <div className="recordar">
                        <a href={ruta.olvidar}>¿Olvidó su contraseña?</a>
                    </div>
                    <input type="submit" value="Iniciar"/>
                    <div className="registrarse">
                        Quiero hacer el <a href={ruta.registro}>registro</a>
                    </div>
                </form>
            </div>
            <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
            
    </>
    
  )
}
