import React, { useState } from "react";
import Loader from "./Loader";

const Form = ({ cart, handleModal, clearCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const celu = window.innerWidth < 990 ? "api" : "web";
    const mensaje =
      cart.length !== 1
        ? cart.reduce(
            (acc, prod, index) =>
              `${acc}${index === 0 ? "Me interesan estos productos:" : ""} ${
                capitalize(prod.categoria)
              } ${
                prod.titulo
              } $${prod.precio}${index !== cart.length - 1 ? " /" : ""}`,
            ""
          )
        : `Me interesa este producto ${capitalize(cart[0].categoria)} ${cart[0].titulo} $${cart[0].precio}`;

    const whatsapp =
      cart.length === 0
        ? "Hola *Espacio Analógico!* 📷"
        : `Hola *Espacio Analógico!* 📷. ${mensaje}`;
    const linkCompra = `https://${celu}.whatsapp.com/send?phone=5493415155579&text=${whatsapp}`;

    setIsLoading(true);

    window.open(linkCompra, "_blank");

    clearCart();
    handleModal();
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="">
          <form className="form" action="" onSubmit={handleSubmit}>
            <button className="boton btnWhat">
              Consultar <i className="bi bi-whatsapp"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
