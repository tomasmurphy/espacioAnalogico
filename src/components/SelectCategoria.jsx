import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getItems } from "./apiCrudRealTime";

const SelectCategoria = ({ categoria, cargarCategoria }) => {
  const [categorias, setCategorias] = useState([]);
  const [value, setValue] = useState(""); // Inicializar con cadena vacía

  useEffect(() => {
    const fetchData = async () => {
      const items = await getItems();
      const categorias = items.filter((item) =>
        item.hasOwnProperty("categoria")
      );
      setCategorias(categorias);

      if (categorias.length > 0 && !categoria) {
        setValue(categorias[0].categoria); // Establecer la primera categoría si no hay valor en "categoria"
        cargarCategoria(categorias[0].categoria);
      }
    };
    fetchData();
  }, [categoria, cargarCategoria]);

  const handleCategoriaChange = (event) => {
    setValue(event.target.value);
    cargarCategoria(event.target.value);
  };

  return (
    <>
      <Form.Select
        id="select"
        value={value}
        onChange={handleCategoriaChange}
        aria-label="Default select"
      >
        {categorias.map((cat) => (
          <option value={cat.categoria} key={cat.id}>
            {cat.categoria}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectCategoria;
