import { useEffect, useState } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../firebaseConfig";
import Modal from "react-bootstrap/Modal";
import ImagenUpload from "./ImageUpload";
import SelectCategoria from "./SelectCategoria";
import { Editor } from "./MostrarImagen";

const Edit = ({ id }) => {
  const [categoria, setCategoria] = useState("");
  const [titulo, setTitulo] = useState("");
  const [precio, setprecio] = useState(0);
  const [imagenes, setImagenes] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState(0);

  const subirImagenes = (img, borrar) => {
    if (borrar === 1) {
      const borrarUnaImagen = imagenes.filter((imagen) => imagen.name !== img);
      console.log(borrarUnaImagen);
      setImagenes(borrarUnaImagen);
    } else {
      setImagenes([...imagenes, img]);
    }
  };
  const update = async (e) => {
    e.preventDefault();
    const product = doc(dataBase, "items", id);
    const data = {
      categoria: categoria,
      titulo: titulo,
      descripcion: descripcion,
      precio: precio,
      imagenes: imagenes,
      stock: stock,
      estado: imagenes.length === 0 || stock === 0 ? "pausado" : "activo",
    };
    await updateDoc(product, data);
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(dataBase, "items", id));

    if (product.exists()) {
      setCategoria(product.data().categoria);
      setTitulo(product.data().titulo);
      setDescripcion(product.data().descripcion);
      setImagenes(product.data().imagenes);
      setprecio(product.data().precio);
      setStock(product.data().stock);
    } else {
      console.log("El producto no existe");
    }
  };

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, []);
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
      <div className="" onClick={handleShow}>
        <i className="btnCant bi bi-pencil-square"></i>
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
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mb-3 row cajaUpload">
                  <div className="col-4 text-center ">
                    {imagenes[0] === undefined ? (
                      <ImagenUpload
                        updateFile={{ name: "", url: "" }}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    ) : (
                      <ImagenUpload
                        updateFile={imagenes[0]}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    )}
                  </div>
                  <div className="col-4 text-center ">
                    {imagenes[1] === undefined ? (
                      <ImagenUpload
                        updateFile={{ name: "", url: "" }}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    ) : (
                      <ImagenUpload
                        updateFile={imagenes[1]}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    )}
                  </div>
                  <div className="col-4 text-center ">
                    {imagenes[2] === undefined ? (
                      <ImagenUpload
                        updateFile={{ name: "", url: "" }}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    ) : (
                      <ImagenUpload
                        updateFile={imagenes[2]}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    )}
                  </div>
                </div>
                <form onSubmit={update} className="row">
                  <div className="mb-3 col-12 d-flex">
                    <label className="form-label col-4">Categoria</label>
                    <SelectCategoria
                      categoria={categoria}
                      cargarCategoria={handleCategoriaChange}
                    />
                  </div>
                  <div className="mb-3 col-12 d-flex">
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
                  <div className="mb-3 col-4  me-2 me-md-5">
                    <label className="form-label col-4">Precio</label>
                    <input
                      value={precio}
                      onChange={(e) => setprecio(e.target.value)}
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
                    Actualizar
                  </button>
                </form>
              </div>
            </div>
          </div>{" "}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Edit;
