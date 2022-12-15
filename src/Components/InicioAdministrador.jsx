import React from 'react'
import './Css Files/InicioAdministrador.css'
import { EmpleadoInfo } from './EmpleadoInfo/EmpleadoInfo'
import { HeaderFiczeria } from './Header/HeaderFiczeria'
import Fondo from './img/portada.jpg'
export const InicioAdministrador = () => {
    /*const empleadolist=[{Nombre:"luis gerardo",Telefono:"667858211",Correo:"lg.carrillo20@info.uas.edu.mx",Password:"12345678",Puesto:"Programador/Diseñador"},
    {Nombre:"luis gerardo",Telefono:"667858211",Correo:"lg.carrillo20@info.uas.edu.mx",Password:"12345678",Puesto:"Programador/Diseñador"}]*/
    const empleadolist=[
      {
        "id": 1,
        "nombre": "juan",
        "apellidos": "perex",
        "telefono": "5557552   ",
        "correo": "juan@gmail.com",
        "contraseña": "123456",
        "puesto": "mesero"
      },
      {
        "id": 2,
        "nombre": "Luis Gerardo",
        "apellidos": "Carrillo López",
        "telefono": "6674528339",
        "correo": "lg.carrillo20@info.uas.edu.mx",
        "contraseña": "12345678",
        "puesto": "Programador"
      },
      {
        "id": 3,
        "nombre": "luis gerardo",
        "apellidos": "carrillo lopez",
        "telefono": "6674528339",
        "correo": "lg.carrillo20@info.uas.edu.mx",
        "contraseña": "12345678",
        "puesto": "programador"
      },
      {
        "id": 4,
        "nombre": "felizardo manuel",
        "apellidos": "verdugo gaxiola",
        "telefono": "6672221441",
        "correo": "fm.verdugo20@info.uas.edu.mx",
        "contraseña": "12345678",
        "puesto": "analista"
      },
      {
        "id": 5,
        "nombre": "jose alberto",
        "apellidos": "rodriguez hernandez",
        "telefono": "6672226401",
        "correo": "ja.rodriguez20@info.uas.edu.mx",
        "contraseña": "12345678",
        "puesto": "tester"
      },
      {
        "id": 6,
        "nombre": "miguel angel karim",
        "apellidos": "beltran martinez",
        "telefono": "6672536384",
        "correo": "mak.beltran20@info.uas.edu.mx",
        "contraseña": "12345678",
        "puesto": "analista"
      }
    ];
  return (
    <>
    <HeaderFiczeria/>
    <section className="wrap" style={{top:"100%"}}>
    <div className="wrap-title-section" id="pizzas">
        <h2>
            Empleados
        </h2>
        {empleadolist.map(empleado=>(
         <EmpleadoInfo NombreEmpleado={empleado.nombre+" "+empleado.apellidos} Telefono={empleado.telefono} Correo={empleado.correo} Password={empleado.contraseña} Puesto={empleado.puesto}/>

        ))}
        <div>
                        <button className="btn btn-primary btnNewEmpleado" type="submit"> <a className='linkadmin' href="">Nuevo empleado</a></button>
        
                        </div>
            </div>
    
    </section>
    <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
    <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
    </>
    
  )
}
