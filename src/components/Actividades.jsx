import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import Seo from "./Head";
import { CartContext } from "../context/CartContext";

const Actividades = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Seo
        title={"Actividades"}
        description={"Avtividades del espacio"}
        pathSlug={window.location.href}
      />
      <div className="item row">HOLA</div>
    </>
  );
};

export default Actividades;
