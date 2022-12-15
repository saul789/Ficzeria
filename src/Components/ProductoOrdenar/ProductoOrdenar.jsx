import React, { useContext, useState } from 'react'

export const ProductoOrdenar = (props) => {
    const {linkimagen,Nombre,Tamaño,Precio}=props;
    const [count,setCount]=useState(0);
    const [totalProducto,settotalProducto]=useState(0);
    const sumar=()=>{
        setCount(count+1);
        settotalProducto(calcularPrecio());
    }
    const restar=()=>{
        if(count===0){

        }else{
            setCount(count-1);
        }
        settotalProducto(calcularPrecio());

    }
    const calcularPrecio=()=>{
        return count*Precio;
    }
  return (
        <>
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
        <button type="button" className="btn btn-danger" onClick={restar}>-</button>
        <button type="button" className="btn btn-light" >{count}</button>
        <button type="button" className="btn btn-success" onClick={sumar}>+</button>
    </div>
    
</div>

        </>
  )
}
