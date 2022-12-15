import React from 'react'
import PizzaRotando from './img/pizza_recortada.png'
import './Header.css'
export const HeaderFiczeria = () => {
    const rutas = {
        Index: '/',
        Menu: '/menu',
        Odenar: '/ordenar',
        Contacto: '/contacto',
        IniciarSesion:'/iniciarsesion'

    }
    
  return (
    <>
            <header className="header">
            <div className="container">
                <div className="logo">
                    <a href={rutas.Index}>
                        FICzería
                    </a>
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href={rutas.Menu}>
                                Menú
                            </a>
                        </li>
                        <li>
                            <a href={rutas.Odenar}>
                                Ordenar
                            </a>
                        </li>
                        <li>
                            <a href={rutas.Contacto}>
                                Contacto
                            </a>
                        </li>
                        <li>
                            <a href={rutas.IniciarSesion}>
                                Iniciar sesión
                            </a>
                        </li>
                    </ul>
                </nav>
               
            </div>
        </header>
    </>
  )
}
