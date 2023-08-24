import React from "react";
import Carousel from "../Carousel";
import Seo from "../Head";
import FormContactoContainer from '../FormContactoContainer'

export const TallerDetail = ({ itemDetail, onHandleCartModal }) => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <>
      <Seo
        title={itemDetail.titulo}
        description={itemDetail.precio}
        image={`${itemDetail.imagenes[0].url}`}
        pathSlug={window.location.href}
      />

      <div className="row">
      <div className="col-12 text-center">
<h1>{itemDetail.titulo}</h1>
            
            <p className="text-end arancel letraGris me-2">
            {itemDetail.precio === 0
              ? "consultar próximo comienzo "
              : <>arancel: <span className="negrita">
              ${itemDetail.precio.toLocaleString()}{" "}
            </span></> }
            
            </p>
  
</div>
        <div
          className="d-md-none card col-12 col-md-6 ps-md-5 pe-md-5 mt-md-3"
          key={itemDetail.id}
        >
          <div >
          <Carousel settings={settings}>
            {itemDetail.imagenes.map((img) => (
              <div key={itemDetail.id}>
                <img
                  src={img.url}
                  alt={itemDetail.titulo}
                  className="img-fluid"
                />
              </div>
            ))}
          </Carousel>
          </div>
        </div>


        <div className="card pe-3 ps-3  mt-3 col-12">
          
          <div>
          <div className="d-none d-md-block imgDesktop">
          <Carousel settings={settings}>
            {itemDetail.imagenes.map((img) => (
              <div key={itemDetail.id} className="slick-slide">
                <img
                  src={img.url}
                  alt={itemDetail.titulo}
                  className="img-fluid centered-image"
                />
              </div>
            ))}
          </Carousel>
          </div>
            
           
          
          <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: itemDetail.descripcion }}
            />
        
        </div>
        <FormContactoContainer taller={itemDetail.titulo}/>
        </div>
      </div>
    </>
  );
};
