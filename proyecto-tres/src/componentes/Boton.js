import React from "react";
import '../hojas-de-estilo/Boton.css';


function Boton(props){
  
  const esOperador=valor=>{
    return isNaN(valor) &&(valor!=='.')&& (valor !== '='); //No es el numero, ni punto, ni =, es decir es un operador
  };
  
  return(
      <div className={ `boton-contenedor ${esOperador(props.children)? 'operador': ''}`.trimEnd()} onClick={() => props.manejarClic(props.children)}> {props.children}</div>
      //<div></div>
  );

}
export default Boton;