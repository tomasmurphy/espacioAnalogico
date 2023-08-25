import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../firebaseConfig";
import Modal from "react-bootstrap/Modal";
import ImagenUpload from "./ImageUpload";
import SelectCategoria from "./SelectCategoria";
import { Editor } from "./MostrarImagen";

const Create = () => {
  const [precio, setprecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState(1);
  const [imagenes, setImagenes] = useState([]);
  const global = "Recetados";

  const productsCollection = collection(dataBase, "items");

  const subirImagenes = (img, borrar) => {
    if (borrar === 1) {
      const borrarUnaImagen = imagenes.filter((imagen) => imagen.name !== img);
      console.log(borrarUnaImagen);
      setImagenes(borrarUnaImagen);
    } else {
      setImagenes([...imagenes, img]);
    }
  };
  const store = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, {
      categoria: categoria,
      titulo: titulo,
      descripcion: descripcion,
      global: global,
      stock: stock,
      imagenes: imagenes,
      precio: precio,
      estado: imagenes.length === 0 || stock === 0 ? "pausado" : "activo",
    });
    setCategoria("");
    setDescripcion("");
    setTitulo("");
    setprecio(0);
    setImagenes([]);
    setStock(1);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cargarCategoria = (categoria) => {
    setCategoria(categoria);
  };
  const handleCategoriaChange = (value) => {
    setCategoria(value);
    cargarCategoria(value);
  };
  const handleDescripcionChange = (value) => {
    setDescripcion(value);
  };

  return (
    <>
      <div className="boton" onClick={handleShow}>
        Cargar nuevo producto
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cargar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="mb-3 row cajaUpload">
                  <div className="col-4 text-center ">
                    <ImagenUpload subirImagenes={subirImagenes}></ImagenUpload>
                  </div>
                  <div className="col-4 text-center">
                    <ImagenUpload subirImagenes={subirImagenes}></ImagenUpload>
                  </div>
                  <div className="col-4 text-center">
                    <ImagenUpload subirImagenes={subirImagenes}></ImagenUpload>
                  </div>{" "}
                </div>
                <form onSubmit={store} className="row">
                  <div className="d-flex mb-3 col-12">
                    <label className="form-label col-4">Categoria</label>
                    <SelectCategoria
                      categoria={categoria}
                      cargarCategoria={handleCategoriaChange}
                    />
                  </div>
                  <div className="d-flex mb-3 col-12">
                    <label className="form-label col-4">Titulo</label>
                    <input
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-12">
                    <label className="form-label">Descripcion</label>
                    <Editor
                      descripcion={descripcion}
                      cargarDescripcion={handleDescripcionChange}
                    ></Editor>
                  </div>
                  <div className="mb-3 col-4 me-2 me-md-5">
                    <label className="form-label col-4 ">Precio</label>
                    <input
                      value={precio}
                      onChange={(e) => setprecio(parseInt(e.target.value))}
                      type="number"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-6 text-center">
                    <label className="form-label">Stock</label>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setStock(stock - 1)}
                      >
                        -
                      </button>
                      <input
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type="number"
                        className="form-control text-center"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setStock(stock + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    onClick={handleClose}
                    className="btn btn-primary"
                  >
                    Crear
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Create;
