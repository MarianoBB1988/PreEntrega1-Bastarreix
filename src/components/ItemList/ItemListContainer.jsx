import React from 'react'
import { useState } from 'react';
//import NavBar from '../NavBar/NavBarComponent'
//implemento contador aprendido en la clase-4
export default function ItemListContainer({agregar}) {
  const [contador, setContador] = useState(0);

  //incrementamos el contador
  const incrementar = () => {
    setContador(contador + 1);
  };
  //decrementamos el contador
  const decrementar = () => {
    setContador(contador - 1);
  };

  //inicializamos el contador
  const reset = () => {
    setContador(0);
    agregar(0);
  };



  return (
    <>
    <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
    <div className='container'>

        <div className="row align-items-start">
        <div className="col-3"><h6>Cantidad de articulos a comprar: </h6></div>
          <div className="col-3"><button className="btn btn-danger" disabled={contador <=0} onClick={decrementar}>  -  </button></div>
          <div className="col-3"> <h5>{contador}</h5></div>
          <div className="col-3">  <button className="btn btn-success" onClick={incrementar}> + </button></div>
        </div>
        <br></br>

        <div class="row align-items-center">
            <div className="row justify-content-center justify-content-md-start"><button className="btn btn-success" disabled={contador <=0} onClick={()=> agregar(contador)}> Agregar al carrito </button></div>
            
            <div className="row justify-content-center justify-content-md-start"><button className="btn btn-warning" onClick={reset}> Resetear compras </button></div>
      </div> 
   </div>  
      

      </>
  );
}
