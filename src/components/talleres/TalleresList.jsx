import React from 'react'
import { Taller } from './Taller'

export const TalleresList = ({ items }) => {

   return (
      <>
         {
            items.map(item =>
               <div key={item.id} className='card col-12 col-md-4'>
               <Taller
               
                  id={item.id}
                  imagenes={item.imagenes}
                  titulo={item.titulo}
                  precio={item.precio}
                  />
                  </div>
            )
         }
      </>
   )
};