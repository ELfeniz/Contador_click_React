import React from "react";

import '../estilos/style.css';


function Boton({ texto, esBotonDeClic, manejarClic }){
    
    return(

        <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}   /* función para decidir si es un boton de clic o de reiniciar */
        onClick={manejarClic}>   
        {texto}
        </button>
    );


}


export default Boton;   /* exportacio de elemento, sirve para exportar un elemento por función */

