import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";
import { getItems } from "./apiCrudRealTime";

function NavMenu() {
  const [categories, setCategories] = useState([]);
  let location = useLocation();
    var activo = ''
    location.pathname.includes('categoria') ? activo = 'active mx-0': activo="mx-0"
    
    useEffect(() => {
      getItems().then((categorias) => {
        const filtro = categorias.filter(item => item.hasOwnProperty("categoria")&& item.categoria !== "talleres");
        setCategories(filtro);
      }).catch((error) => {
        console.log(error);
      });
    }, []);
    

  return (
    <div className="navMenu">
      <div className="d-flex">
      <NavLink to={"/talleres"} className="">
          Talleres
        </NavLink>
        <NavLink to={"/actividades"} className="">
          Actividades
        </NavLink>
        <Dropdown className="d-inline">
          <Dropdown.Toggle as="div" className="" id="dropdown">
            <Link to="#" className={activo} >
              Tienda
            </Link>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categories.map((cat) => (
              <Dropdown.Item as="div" key={cat.id}>
                <NavLink
                  
                  to={`categoria/${cat.categoria}`}
                  className="categoria"
                >
                  {cat.categoria}
                </NavLink>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        
        
      </div>
    </div>
    
  );
}

export default NavMenu;
