//import './App.css';


import { useState } from 'react';
import NavBarComponent from './components/NavBar/NavBarComponent';
import ItemList from './components/ItemList/ItemListContainer';


function App() {
  const [cont, setCont] = useState(0);
  
  //En la función agregar, recibe cero, valor enviado como parametro desde el botón reset, inicializamos la variable contador.
  const agregar=(contador)=>{
    if (contador ==0){
        setCont(0);
    }else{
        console.log('contador recibido ' + contador);
       setCont(contador + cont);
    }
    

  }

  return (
    <>
   <NavBarComponent cantArticulos={cont}/>
   
   <ItemList agregar={agregar}/>
     
    </>
  )
}

export default App
