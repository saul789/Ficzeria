import React from 'react'
import './Css Files/Registro.css'
import Fondo from './img/portada.jpg'
import { HeaderFiczeria } from './Header/HeaderFiczeria'
export const Registro = () => {
    const ruta={
        InicioSesion:"/IniciarSesion"
    }
  return (
    <>
    <HeaderFiczeria/>
    <div className="formularioregistro">
    <h1>
        Regístrate
    </h1>
    <form method="post">
        <div className="username">
            <i className="fa-solid fa-user icon"></i>
            <input type="text" name="name" id="nombre" placeholder="Ingresa tu nombre" required/>
        </div>
        <div className="username">
            <i className="fa-solid fa-user icon"></i>
            <input type="text" name="apellidos" id="apellidos" placeholder="Ingresa tus apellidos" required/>
        </div>
        <div className="username">
            <i className="fa-solid fa-phone icon"></i>
            <input type="tel" name="tel" id="phone" placeholder="Ingresa tu teléfono" required/>
        </div>
        <div className="username">
            <i className="fa-solid fa-envelope icon"></i>
            <input type="email" name="mail" id="email" placeholder="Ingresa tu correo" required/>
        </div>
        <div className="username">
            <i className="fa-solid fa-key icon"></i>
            <input type="password" name="password" id="pass" placeholder="Ingresa tu contraseña" required/>
        </div>
        <div className="button">
            <input type="submit" value="Registrate"/>
        </div>
        <br></br>
        <p>¿Ya tienes una cuenta? <a href={ruta.InicioSesion}>Iniciar sesión</a></p>
        <br></br>
    </form>
    <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
</div>
    </>
  )
}
