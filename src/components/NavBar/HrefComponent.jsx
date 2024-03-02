import React from 'react'


export default function HrefComponent ({menu, texto}) {
 
    //retornamos cada item con el nombre recibido como props al igual que un mensaje a mostrar al usuario.
    const mensaje = () => {
        alert(texto);
      };
  
    return (
      
       <a className="nav-link active" onClick={mensaje} href="#">{menu}</a>
      
    )
  }

