import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuetros alumnos de Nuestros Servicios</h1>
        <Testimonio 
        nombre='Eduardo Gonzalez' 
        pais='Venezuela y Val' 
        imagen='1' 
        cargo='Ingeniero Industrial' 
        empresa='La tienda' 
        testimonio='Amo de manera exagerada mi vida, pero pronto ella cambiara, espero poder adaptarme a mi nueva vida'
        />

        <Testimonio 
        nombre='Rosa Echeverria' 
        pais='Venezuela y Bqto' 
        imagen='2' 
        cargo='Contador Publico' 
        empresa='En Casa' 
        testimonio='Deseo tener mucho dinero, y me gusta lograr ubicar buenas cantidades paa ser feliz'
        />
      </div>
    </div>
  );
}

export default App;
