import React from 'react'

export const Product = (props) => {

    const {linkimagen,Nombre,Tamaño,Precio}=props;
  return (
    <div className=".wrap column-2 carta">
                  <div className="plato-carta">
                      <div className="img-plato-carta">
                          <img srcSet={linkimagen}  alt="bebida"/>
                      </div>
                      <div className="title-plato-carta">
                          <h4>
                              {Nombre}
                          </h4>
                          <p>
                              {Tamaño}
                          </p>
                      </div>
                      <div className="precio-plato-carta">
                          <span>
                              ${Precio}
                          </span>
                      </div>
                  </div>
              </div>
  )
}
