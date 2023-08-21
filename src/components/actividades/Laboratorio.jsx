import React, { useState } from "react";

const Laboratorio = ({ onToggleContent }) => {
  const [isContentVisible, setContentVisible] = useState(true);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  
    if (isContentVisible) {
      setTimeout(() => {
        onToggleContent("laboratorio");
      }, 50); 
    }else{window.scrollTo(0, 0)
    }
  };
  return (
    <>
      <div id="laboratorio" className="actividades row">
        <div onClick={toggleContent} className={`${isContentVisible ? "d-flex wrap mostrar" : "d-none"}`}>
          <div className="btnEspacio sombra">
            LABORATORIO ABIERTO &gt;
          </div>
          <img
            src="/Laboratorio/laboratorio (1).jpg"
            alt="laboratorio"
            className="img-fluid d-none d-md-flex col-md-4 m-0 p-0"
          />
          <img
            src="/Laboratorio/laboratorio (2).jpg"
            alt="laboratorio"
            className="img-fluid col-12 col-md-4 m-0 p-0"
          />
          <img
            src="/Laboratorio/rojo.png"
            alt="laboratorio"
            className="img-fluid col-6 col-md-4 m-0 p-0"
          />
        </div>
        <div onClick={toggleContent} className={` ${isContentVisible ? "d-none" : "d-flex wrap "}`}>
          <div  className="btnEspacio">
            LABORATORIO ABIERTO por hora <br />
            Es una instancia de ingreso al laboratorio para todas aquellas
            personas que sostienen la práctica de revelado de negativos, o de toma
            fotográfica analógica pero que no han experimentado aún la copia al
            papel. Creemos que de este modo queda saldado el proceso de
            conocimiento sobre los tiempos de exposición y revelado y se completa
            la situación de aprendizaje técnico, necesario para poder confeccionar
            una foto de una manera más integral. Una vez que hayan aprendido el
            uso de los químicos y ampliadoras podrán hacer uso del laboratorio de
            manera particular de acuerdo a cada necesidad.
          </div>
          <img
            src="/Laboratorio/laboratorio (1).jpg"
            alt="laboratorio"
            className="img-fluid col-12 d-md-none m-0 p-0"
          />
          <img
            src="/Laboratorio/laboratorio (2).jpg"
            alt="laboratorio"
            className="img-fluid col-12 col-md-6 m-0 p-0"
          />
          <img
            src="/Laboratorio/rojo.png"
            alt="laboratorio"
            className="img-fluid col-12 col-md-6 m-0 p-0"
          />
        </div>
      </div>
    </>
  );
};

export default Laboratorio;
