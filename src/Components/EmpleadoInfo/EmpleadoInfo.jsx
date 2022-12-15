import React from 'react'

export const EmpleadoInfo = (props) => {
    const {NombreEmpleado,Telefono,Correo,Password,Puesto}=props;
  return (
    <div className=".wrap column-2 carta">
            <div className="plato-carta">
                <div className="title-plato-carta">
                    <br></br>
                    <h4>
                        Nombre: {NombreEmpleado}
                    </h4>
                    <br></br>
                    <p>
                        Teléfono: {Telefono}
                    </p>
                    <p>
                        Correo: {Correo}
                    </p>
                    <p>
                        Contraseña: {Password}
                    </p>
                    <p>
                        Puesto: {Puesto}
                    </p>
                    <br></br>
                    </div>
                        <button className="btn btn-primary btns" type="submit"><a className='linkadmin' href="">Editar</a></button>
                        <button className="btn btn-danger btns" type="submit"><a className='linkadmin' href="">Eliminar</a></button>
                    </div>
                    
                </div>
  )
}
