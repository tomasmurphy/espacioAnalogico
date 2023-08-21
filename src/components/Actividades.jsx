import Seo from "./Head";
import Laboratorio from "./avtividades/Laboratorio";
import Cine from "./actividades/Cine";
import Jornadas from "./actividades/Jornadas";
import Tertulias from "./actividades/Tertulias";

const Actividades = () => {
  const handleScrollToSection = (sectionId, isVisible) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 143;
      const offsetTop = section.offsetTop - offset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Seo
        title={"Actividades"}
        description={"Actividades del espacio"}
        pathSlug={window.location.href}
      />

      <div>
        <Laboratorio onToggleContent={handleScrollToSection} />
        <Cine onToggleContent={handleScrollToSection} />
        <Jornadas onToggleContent={handleScrollToSection} />
        <Tertulias onToggleContent={handleScrollToSection} />
      </div>
    </>
  );
};

export default Actividades;
