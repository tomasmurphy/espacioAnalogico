import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

export const FormContacto = ({ taller, handleClose }) => {
  const form = useRef();
  const [nov, setNov] = useState(true);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    try {
      const response = await fetch("send_email.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          text: "Gracias por contactarnos!",
          iconHtml: `<img src="/ean.jpg" alt="Icono personalizado" width="100"/>`,
          showConfirmButton: true,
          confirmButtonText: "Ok",
          customClass: {
            icon: "custom-icon-class",
          },
          confirmButtonClass: "boton",
        });
        handleClose();
        form.current.reset();
      } else {
        console.log("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleNovChange = (e) => {
    setNov(e.target.checked);
  };

  return (
    <>
      <form id="form" ref={form} onSubmit={sendEmail}>
      <div className="formulario2">
          <label>Nombre</label>
          <input type="text" name="name" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Dirección</label>
          <input type="text" name="direccion" required />
          <label>Teléfono</label>
          <input type="number" name="telefono" required />
          <label>Mensaje</label>
          <textarea name="message" rows={5} />
          <div className="d-flex mt-4 mb-2">
            <input type="hidden" name="taller" value={taller} />

            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="nov"
                checked={nov}
                onChange={handleNovChange}
              />
              <input
                type="hidden"
                name="nov_message"
                value={
                  nov
                    ? "Quiero recibir novedades Espacio Analógico"
                    : "No se suscribió"
                }
              />
              <span className="checkmark ms-2"></span>
              <span className="ms-4 labelCheck">
                Quiero recibir novedades de Espacio Analógico
              </span>
            </label>
          </div>
          <div className="col-12 text-center">
            <input className="boton" type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </>
  );
};





// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";

// export const FormContacto = ({ taller, handleClose }) => {
//   const form = useRef();
//   const [nov, setNov] = useState(true);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_0n5st72",
//         "template_b0v2x4p",
//         form.current,
//         "4Jc5CAc5mEdng1aue"
//       )
//       .then(
//         (result) => {
//           Swal.fire({
//             text: "Gracias por contactarnos!",
//             iconHtml: `<img src="/ean.jpg" alt="Icono personalizado" width="100"/>`,
//             showConfirmButton: true,
//             confirmButtonText: "Ok",
//             customClass: {
//               icon: "custom-icon-class",
//             },
//             confirmButtonClass: "boton",
//           });
//           handleClose();
//           form.current.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   const handleNovChange = (e) => {
//     setNov(e.target.checked);
//   };

//   return (
//     <>
//       <form id="form" ref={form} onSubmit={sendEmail}>
//         <div className="formulario2">
//           <label>Nombre</label>
//           <input type="text" name="name" required />
//           <label>Email</label>
//           <input type="email" name="email" required />
//           <label>Dirección</label>
//           <input type="text" name="direccion" required />
//           <label>Teléfono</label>
//           <input type="number" name="telefono" required />
//           <label>Mensaje</label>
//           <textarea name="message" rows={5} />
//           <div className="d-flex mt-4 mb-2">
//             <input type="hidden" name="taller" value={taller} />

//             <label className="custom-checkbox">
//               <input
//                 type="checkbox"
//                 name="nov"
//                 checked={nov}
//                 onChange={handleNovChange}
//               />
//               <input
//                 type="hidden"
//                 name="nov_message"
//                 value={
//                   nov
//                     ? "Quiero recibir novedades Espacio Analógico"
//                     : "No se suscribió"
//                 }
//               />
//               <span className="checkmark ms-2"></span>
//               <span className="ms-4 labelCheck">
//                 Quiero recibir novedades de Espacio Analógico
//               </span>
//             </label>
//           </div>
//           <div className="col-12 text-center">
//             <input className="boton" type="submit" value="Enviar" />
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };
