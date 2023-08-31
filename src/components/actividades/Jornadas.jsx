import React, { useState } from "react";

const Jornadas = ({ onToggleContent }) => {
  const [isContentVisible, setContentVisible] = useState(true);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  
    if (isContentVisible) {
      setTimeout(() => {
        onToggleContent("jornadas");
      }, 50); 
    }else{window.scrollTo(0, 0)
    }
  };
  return (
    <>
      <div id="jornadas" className="row actividades">
        <div
          onClick={toggleContent}
          className={`${isContentVisible ? "d-flex wrap mostrar" : "d-none"}`}
        >
          <div className="btnEspacio sombra">
            JORNADAS AL AIRE LIBRE &gt;
          </div>
          <img
            src="/Jornadas/jornadas (2).jpg"
            alt="Jornadas"
            className="img-fluid col-12 col-md-6 m-0 p-0"
          />
          <img
            src="/Jornadas/jornadas (3).jpg"
            alt="Jornadas"
            className="img-fluid col-6 col-md-6 m-0 p-0"
          />
        </div>
        <div
          onClick={toggleContent}
          className={` ${isContentVisible ? "d-none" : "d-flex wrap "}`}
        >
          <div className="btnEspacio">
            JORNADAS AL AIRE LIBRE &lt;<br />
            Realizamos salidas a diferentes puntos de la ciudad como parques, la
            costa del río o a las islas del río Paraná. Es un momento de puesta
            en práctica de diferentes técnicas para quienes ya hayan tomado
            trayectos de formación en los talleres anuales o intensivos.
          </div>
          <img
            src="/Jornadas/jornadas (2).jpg"
            alt="Jornadas"
            className="img-fluid col-12 col-md-6 m-0 p-0"
          />
          <img
            src="/Jornadas/jornadas (3).jpg"
            alt="Jornadas"
            className="img-fluid col-12 col-md-6 m-0 p-0"
          />
        </div>
      </div>
    </>
  );
};

export default Jornadas;
