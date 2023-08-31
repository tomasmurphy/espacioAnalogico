import React, { useState } from "react";

const Tertulias = ({ onToggleContent }) => {
  const [isContentVisible, setContentVisible] = useState(true);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  
    if (isContentVisible) {
      setTimeout(() => {
        onToggleContent("tertulias");
      }, 50); 
    }else{window.scrollTo(0, 0)
    }
  };
  return (
    <>
      <div id="tertulias" className="row actividades">
      <div
          onClick={toggleContent}
          className={`${isContentVisible ? "d-flex wrap mostrar" : "d-none"}`}
        >
          <div className="btnEspacio sombra">
          TERTULIAS ANALÓGICAS &gt;
        </div>
        <img
          src="/Tertulias/tertulias (1).jpg"
          alt="Tertulias"
          className="img-fluid col-12 col-md-4 m-0 p-0"
        />
        {/* <img
          src="/Tertulias/tertulias (2).jpg"
          alt="Tertulias"
          className="img-fluid col-6 col-md-3 m-0 p-0"
        /> */}
        <img
          src="/Tertulias/tertulias (3).jpg"
          alt="Tertulias"
          className="img-fluid col-6 col-md-4 m-0 p-0"
        />
        <img
          src="/Tertulias/tertulias (5).jpg"
          alt="Tertulias"
          className="img-fluid col-6 col-md-4 m-0 p-0"
        />
        </div>
        <div
          onClick={toggleContent}
          className={` ${isContentVisible ? "d-none" : "d-flex wrap "}`}
        >
          <div   className="btnEspacio">
        
          TERTULIAS ANALÓGICAS &lt;<br />
          Al menos en dos momentos del año realizamos estos encuentros en los
          que se desarrollan diferentes actividades tales como: presentar los
          materiales editoriales nuevos que hayamos realizado, organizar
          muestras de los talleres que están activos y/o presentar libros
          vinculados a la fotografía de personas cercanas al Espacio. También
          hay proyecciones de imágenes y feria de libros y producciones
          artísticas y/o fotográficas. <br />
          Estos encuentros buscan sostener y fortalecer los ámbitos de
          sociabilidad del Espacio con la comunidad analógica de la ciudad.
        </div>
        <img
          src="/Tertulias/tertulias (1).jpg"
          alt="Tertulias"
          className="img-fluid d-none d-md-block col-md-3 m-0 p-0"
        />
        <img
          src="/Tertulias/tertulias (2).jpg"
          alt="Tertulias"
          className="img-fluid col-12 col-md-3 m-0 p-0"
        />
        <img
          src="/Tertulias/tertulias (3).jpg"
          alt="Tertulias"
          className="img-fluid col-6 col-md-3 m-0 p-0"
        />
        <img
          src="/Tertulias/tertulias (5).jpg"
          alt="Tertulias"
          className="img-fluid col-6 col-md-3 m-0 p-0"
        />
      </div>
      </div>
    </>
  );
};

export default Tertulias;
