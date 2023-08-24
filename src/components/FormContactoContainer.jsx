import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormContacto } from "./FormContacto";

const FormContactoContainer = ({taller}) => {
  const [show, setShow] = useState(false);
 

  const handleClose = () => {
    setShow(false);
    
  };
  const handleShow = () => {
    setShow(true);
    
  };
  return (
    <>
    
        <div onClick={handleShow}>
          <p className="boton text-center">
            Consultas e inscripcion
            </p>
        </div>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={true}
        keyboard={true}
        size="xl"
        // centered
        style={{
          borderRadius: "0",
          zIndex:"100000"
        }}
        dialogClassName="modal-dialog-form"
        backdropClassName="modal-backdrop-form"
        contentClassName="modal-content-form"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "16px" }}>{taller}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
              backgroundImage: `url('/blanco2.png')`, // Reemplaza con la ruta correcta a tu imagen
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
          <div className="">
          <FormContacto taller={taller} handleClose={handleClose}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormContactoContainer;
