import React, { useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Form = ({ cart, handleModal, clearCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");

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
              `${acc}${
                index === 0 ? "_Me interesan estos productos:_\n" : ""
              } ${capitalize(prod.categoria)} ${prod.titulo} $${prod.precio}${
                index !== cart.length - 1 ? "\n" : ""
              }`,
            ""
          )
        : `Me interesa este producto ${capitalize(cart[0].categoria)} ${
            cart[0].titulo
          } $${cart[0].precio}`;

    const envio = `Envíos a todo el país por medio de Correo Argentino\nEn Rosario cadetería o retiro en zona Corrientes y Jujuy`;
    const pago = `Pago por transferencia al alias *espacio.analogico*`;
    const customerInfo = `*Nombre:* ${name}\n*Código Postal:* ${postalCode}\n*Mensaje:* ${message}\n\n*Envío:* ${envio}\n*Concretar venta:* ${pago}`;

    const whatsapp = `*Espacio Analógico!* 📷\n${mensaje}\n${customerInfo}`;

    const linkCompra = `https://${celu}.whatsapp.com/send?phone=5493415155579&text=${encodeURIComponent(
      whatsapp
    )}`;

    setIsLoading(true);

    window.open(linkCompra, "_blank");

    clearCart();
    handleModal();
    setIsLoading(false);
  };

  const handleFinish = () => {
    setShowForm(true);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {showForm ? (
            <form className="form" action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Código Postal"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />

              <textarea
                placeholder="Mensaje opcional"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button type="submit" className="boton btnWhat">
                Consultar <i className="bi bi-whatsapp"></i>
              </button>
            </form>
          ) : (
            <div className="botonera">
              <Link
                to="/categoria/todos"
                onClick={handleModal}
                className="boton"
              >
                Agregar más productos
              </Link>
              <div className="boton" onClick={handleFinish}>
                Finalizar
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Form;
