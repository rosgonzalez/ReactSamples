import React from 'react';
import '../hojas-de-estilos/Testimonio.css';

function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../imagenes/Imag${props.imagen}.jpg`)} alt='Primera Foto'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombreypais-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>

            </div>
        </div>
    );
}

export default Testimonio;