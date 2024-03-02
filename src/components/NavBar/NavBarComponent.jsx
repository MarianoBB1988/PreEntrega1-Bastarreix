import React from 'react'
//import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidgetComponent'

import Href from './HrefComponent';

export default function NavBarComponent({cantArticulos}) {

  const imgEstilo = {
    width:'110px',
    height:'50px',
    
    margin: '10px'
  }
  
//const [cont, setCont] = useState(0);

/*const devolverCantidad = () => {
  setCont(cont+valor);
  
};*/



  return (
    <>

    <header className="fixed-top ">
      
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img style={imgEstilo} src='../../src/assets/logo.png' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Href menu='Inicio' texto='Aquí se muestra la página principal'/>
        </li>
        <li className="nav-item">
          <Href menu='Juegos 3D' texto='Listado de juego 2D'/>
        </li>
        <li className="nav-item">
           <Href menu='Juegos 2D' texto='Listado de juegos 3D'/>
        </li>
        <li className="nav-item">
           <Href menu='Emuladores'texto='Emuladores para juegos retro de consolas y arcade'/>
        </li>
        <li className="nav-item">
           <Href menu='ROMs' texto='ROMs de los juegos para ejecutar en los emuladores'/>
        </li>
    
        <li className="nav-item">
           <Href menu='Acerca de nosotros...' texto='Información sobre la página y sus creadores, redes sociales, etc.'/>
        </li>
       
      </ul>

       <CartWidget/>
       <strong> <p className='text-white '> {cantArticulos}</p></strong>
    </div>
  </div>

</nav>
    </header>


  

     

    </>
  
  )
}
