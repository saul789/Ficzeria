import React from 'react'
import { IniciarSesion } from './Components/IniciarSesion';
import { Ordenar } from './Components/Ordenar';
import { Contacto } from './Components/Contacto';
import { Route, Routes } from 'react-router-dom'
import { Principal } from './Components/Principal';
import { Menu } from './Components/Menu';
import { Registro } from './Components/Registro';
import { OlvidoContraseña } from './Components/OlvidoContraseña';
import { InicioAdministrador } from './Components';

export const Ficzeria = () => {
  return (
    <Routes>
    <Route path='/' element= { <Principal/> } />
    <Route path='/IniciarSesion' element={<IniciarSesion/>}/>
    <Route path='/Ordenar' element={<Ordenar/>}/>
    <Route path='/Contacto' element={<Contacto/>}/>
    <Route path='/Menu' element={<Menu/>}/>
    <Route path='/Registro' element={<Registro/>}/>
    <Route path='/OlvidoContraseña' element={<OlvidoContraseña/>}/>
    <Route path='/InicioAdministrador' element={<InicioAdministrador/>}/>

  </Routes>
  )
}
