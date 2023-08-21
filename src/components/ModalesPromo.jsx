import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ModalesPromo = () => {
  const [show, setShow] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);

  const handleClose = () => {
    setShow(false);
    setBtnVisible(true);
  };
  const handleShow = () => {
    setShow(true);
    setBtnVisible(false);
  };
  return (
    <>
      {btnVisible && (
        <div onClick={handleShow}>
          <p className="btnEspacio text-center">
            ¿Qué es <br />
            Espacio Analógico? <br />
            <img src="../../eant.png" alt="" width="80" className="img-fluid" />
          </p>
        </div>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={true}
        keyboard={true}
        size="xl"
        // centered
        style={{
          borderRadius: "0",
        }}
        dialogClassName="modal-dialog-index"
        backdropClassName="modal-backdrop-index"
        contentClassName="modal-content-index"
      >
        <Modal.Header closeButton>
          <Modal.Title>Espacio Analógico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <p>
              Es un laboratorio-taller de imágenes e ideas en torno a la
              fotografía analógica y experimental. Se trata de un espacio de
              formación en fotografía química y experimentos naturales que tiene
              como objetivo continuar la práctica fotográfica analógica
              considerando un aspecto fundamental que tiene que ver con el
              cuidado del medioambiente.
            </p>
            <p>
              Desde el año 2015 venimos trabajando de manera sostenida y por
              ello a lo largo de los años hemos consolidado una comunidad
              analógica con gran potencial creativo que se reúne de manera
              periódica para llevar adelante actividades culturales específicas
              en la ciudad.
            </p>
          </div>

          <div className="row pt-3">
            <div className="col-2 text-center">
              <img
                src="../../icono1.png"
                alt="icono"
                className="m-0 p-0 img-fluid"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="col-2 text-center">
              <img
                src="../../icono2.png"
                alt="icono"
                className="m-0 p-0 img-fluid"
              />
            </div>
            <div className="col-2 text-center">
              <img
                src="../../icono3.png"
                alt="icono"
                className="m-0 p-0 img-fluid"
              />
            </div>
            <div className="col-2 text-center">
              <img
                src="../../icono4.png"
                alt="icono"
                className="m-0 p-0 img-fluid"
              />
            </div>
            <div className="col-2 text-center">
              <img src="../../icono5.png" alt="icono" className=" img-fluid" />
            </div>
            <div className="col-2 text-center">
              <img src="../../icono6.png" alt="icono" className="m-0 p-0 " />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalesPromo;
