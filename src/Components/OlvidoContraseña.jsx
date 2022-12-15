import React from 'react'
import './Css Files/Olvidar.css'
import Fondo from './img/portada.jpg'
import { HeaderFiczeria } from './Header/HeaderFiczeria'
export const OlvidoContraseña = () => {
    const ruta={
        IniciarSesion:"/IniciarSesion"
    }
  return (
    <>
    <HeaderFiczeria/>
    <div className="formulario">
                <h1>
                    Restablecer contraseña
                </h1>
                <form method="post">
                    <div className="username">
                        <i className="fa-solid fa-envelope icon"></i>
                        <input type="email" name="mail" id="email" placeholder="Ingresa tu correo electrónico" required/>
                    </div>
                    <input type="submit" value="Enviar"/>
                    <div className="registrarse">
                        Volver a <a href={ruta.IniciarSesion}>inicio de sesión</a>
                    </div>
                </form>
            </div>
            <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
    </>
  )
}
