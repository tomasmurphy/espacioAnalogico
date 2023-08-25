import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Form from "./Form";
import Modal from "react-bootstrap/Modal";

const Cart = (props) => {
  const { cart, clearCart, clearProducto } = useContext(CartContext);
  const celu = window.innerWidth < 990 ? "api" : "web";
  const whatsapp = "Hola *Espacio Analógico!* 📷"
  const linkCompra = `https://${celu}.whatsapp.com/send?phone=5493415155579&text=${whatsapp}`;

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleModal}
        backdrop={true}
        keyboard={false}
        size="md"
        style={{
          borderRadius: "0",
          zIndex:"100000"
        }}
        dialogClassName="modal-dialog-cart"
        backdropClassName="modal-backdrop-cart"
        contentClassName="modal-content-cart"
      >
        <Modal.Body>
          <div className="cart mt-3 link">
            {cart.length === 0 ? (
              <div>
                <Link to={"/talleres"} onClick={props.handleModal}>
                  <h1 className="text-center text-md-end me-md-3">
                    Info e incripción a talleres
                    <img
                      src="../../icono4.png"
                      width={40}
                      alt="icono"
                      className="ms-3 p-0 img-fluid"
                    />
                  </h1>
                </Link>
                <Link to={"/actividades"} onClick={props.handleModal}>
                  <h1 className="text-center text-md-end me-md-3">
                    Conocé nuestras actividades
                    <img
                      src="../../icono2.png"
                      width={40}
                      alt="icono"
                      className="ms-3 p-0 img-fluid"
                    />
                  </h1>
                </Link>
                <Link to={"/categoria/todos"} onClick={props.handleModal}>
                  <h1 className="text-center text-md-end me-md-3 ">
                    Mirá nuestra tienda online
                    <img
                      src="../../icono3.png"
                      width={40}
                      alt="icono"
                      className="ms-3 p-0 img-fluid"
                    />
                  </h1>
                </Link>
              </div>
            ) : (
              <h1 className="negrita"> Seleccionados para consulta: </h1>
            )}
            <div>
              {cart.map((producto) => (
                <div key={producto.id}>
                  <div>
                    {producto.titulo}/${producto.precio}
                    <button
                      className="btn"
                      onClick={() => clearProducto(producto.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="botonera mt-4">
              {cart.length === 0 ? (
                <div className="mb-3">
                <a
                  href={linkCompra}
                  className="boton btnWhat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  O mandanos un mensaje<i className="bi bi-whatsapp"></i>
                </a>
              </div>
              ) : (
                <>
                <Form
                cart={cart}
                handleModal={props.handleModal}
                clearCart={clearCart}
              ></Form></>
                
              )}
              
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Cart;
