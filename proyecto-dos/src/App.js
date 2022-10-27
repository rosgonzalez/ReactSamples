
import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import camplogo from './imagenes/cumple38.jpg';
import {useState} from 'react';

function App() {

  const [numClicsprops, setNumClicsprops]= useState(0);


  const manejarClicFun= ()=>{
    console.log("Clic");
    setNumClicsprops (numClicsprops+1);
  };

  const reiniciarContador = () =>{
    console.log("Reiniciar");
    setNumClicsprops(0);
  };


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo' src={camplogo} alt='El Logo'/>
      </div>
      
      <div className='contenedor-principal'>
        <Contador numClics={numClicsprops} />
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClicFun}/>
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
