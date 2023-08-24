import React from "react";
import { Link } from "react-router-dom";

export const Taller = ({
  id = "",
  titulo = "",
  imagenes = "",
  precio = "",
}) => {
  const tituloId = titulo.replace(/_|#| |@|<>/g, "_");

  return (
    <div className="talleres cajaDeCajas" key={id}>
      <Link to={`/talleres/${id}#${tituloId}`} >
       <div className="cajaDeCajas">
       <div className="imgMedida caja">
          <div className="prueba img-container">
          <img
            src={imagenes[0].url}
            alt={`Foto de ${titulo}`}
            className="img-fluid mx-0 px-0"
          />
          </div>
          

         
        </div>
        
        <h4 className='text-center negrita mt-2'>{titulo}</h4>
        <p className='text-center pb-3'><span className='letraGris btnConsultar me-2'>
        {precio === 0
              ? "consultar próximo comienzo >"
              : "inscripciones abiertas >"}
           </span>

     

          </p>
       </div>
        
      </Link>
    </div>
  );
};
