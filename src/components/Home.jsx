import React from "react";
import Seo from "./Head";
import ModalesPromo from "./ModalesPromo";

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Seo
        title={"Espacio Analógico"}
        description={
          "laboratorio-taller de imágenes e ideas en torno a la fotografía analógica y experimental"
        }
        image={`${window.location.origin}/static/media/LogoNuevo.c219d0bf4f0348ebfdc3.png`}
        pathSlug={window.location.href}
      />

      <div className="home sinBorde">
        <ModalesPromo />
      </div>
    </>
  );
};

export default Home;
