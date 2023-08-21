import React, { useState } from "react";

const Cine = ({ onToggleContent }) => {
  const [isContentVisible, setContentVisible] = useState(true);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  
    if (isContentVisible) {
      setTimeout(() => {
        onToggleContent("cine");
      }, 50); 
    }else{window.scrollTo(0, 0)
    }
  };
  return (
    <>
      <div id="cine" className="row actividades">
        <div
          onClick={toggleContent}
          className={`${isContentVisible ? "d-flex wrap mostrar" : "d-none"}`}
        >
          <div className="btnEspacio sombra">CINE DEL ESPACIO &gt;</div>
          <img
            src="/Cine/cine (1).jpg"
            alt="cine"
            className="img-fluid d-none d-md-flex col-6 col-md-4 m-0 p-0"
          />
          <img
            src="/Cine/cine (2).jpg"
            alt="cine"
            className="img-fluid d-none d-md-flex col-6 col-md-4 m-0 p-0"
          />
          <img
            src="/Cine/cine (3).jpg"
            alt="cine"
            className="img-fluid col-12 col-md-4 m-0 p-0"
          />
        </div>
        <div
          onClick={toggleContent}
          className={` ${isContentVisible ? "d-none" : "d-flex wrap "}`}
        >
          <div className="btnEspacio">
            CINE DEL ESPACIO <br />
            En el Cine del Espacio proyectamos películas como forma de sostener
            los vínculos con aquellas personas que no se encuentran actualmente
            tomando talleres pero que son parte del laboratorio por venir a
            revelar y copiar. Es una apuesta a realizar un clima de sociabilidad
            ameno y, además, propicio para el desarrollo de procesos creativos
            colectivos.
          </div>
          <img
            src="/Cine/cine (1).jpg"
            alt="cine"
            className="img-fluid col-12 col-md-6 m-0 p-0"
          />
          {/* <img
            src="/Cine/cine (2).jpg"
            alt="cine"
            className="img-fluid col-6 col-md-4 m-0 p-0"
          /> */}
          <img
            src="/Cine/cine (3).jpg"
            alt="cine"
            className="img-fluid col-12 col-md-6 m-0 p-0"
          />
        </div>
      </div>
    </>
  );
};

export default Cine;
