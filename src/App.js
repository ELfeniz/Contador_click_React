
import './App.css';
import flogo from './imagenes/freecodecamp-logo.jpg';  // importar una imagen, con un nombre especifico
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState }  from 'react';   // Hooks paquete, para ver los estados


import 'materialize-css/dist/css/materialize.min.css';  // importar materialice

function App() {

  const [numClics, setNumClis] = useState(0);    // set significa asignar y luego el estado
                                                 // useState, va hacer el estado inicial

  const manejarClic = () => {  // función flecha sirve para retornar lo que esta dentro de las llaves
      console.log('Clic');
      setNumClis(numClics + 1);
  };

  const reiniciarContador = () => { 
    setNumClis(0);
    console.log('Reiniciar');
  };

  return (
    <div className="App">

      <div className="freecodecamp-logo-contenerdor">
        <img
          className="freecodecamp-logo"
          src={flogo}
          alt="logo de freeCodeCamp"/>
      </div>
      <div className="contenedor-principal">
      <Contador numClics= {numClics} />
      <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>  
      <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>

      </div>
      <div className="materialice">
        
      <a class="btn-floating btn-large pulse"><i class="material-icons">brightness_high</i></a>
      <a class="btn-floating btn-large pulse"><i class="material-icons">brightness_high</i></a>
      <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

  <div class="progress">
      <div class="indeterminate"></div>
  </div>
        


  <form action="#">
    <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file" />
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" />
      </div>
    </div>
  </form>



      </div>

      
    </div>
  );
}

export default App;


