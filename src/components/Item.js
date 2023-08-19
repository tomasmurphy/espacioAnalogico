import React from 'react'
import { Link } from 'react-router-dom'
// import Anteojo from './Anteojo';

export const Item = (
  {
    id = "",
    titulo = '',
    imagenes = '',
    precio = "",
    
  }

) => {
  const tituloId = titulo.replace(/_|#| |@|<>/g, "_");

  return (
    <div className="" key={id}>
      <Link to={`/detalle/${id}#${tituloId}`} className='link'>



        <div className="imgMedida">
          <img src={imagenes[0].url} alt={`Foto de ${titulo}`} className='img-fluid mx-0 px-0' />
          <h4 className='text-center negrita mt-2'>{titulo}</h4>
        <p className='text-center negrita'><span className='negrita me-2'>${precio.toLocaleString()} </span>

          </p>

        </div>

      </Link>
    </div>)
}
