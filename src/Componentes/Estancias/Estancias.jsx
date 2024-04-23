import "./Estancias.css";

function Estancias() {
  // Función para manejar el hover en la imagen
  const handleHover = (event) => {
    const imageElement = event.target.closest(".imagen-estancia");
    if (imageElement) {
      imageElement.classList.toggle("hover-text-visible");
    }
  };

  return (
    <div id="estancias" className="Estancias">
      <h1 className="tituloEstancias">Estancias</h1>
      <p className="subtituloEstancias">
        Contamos con tres modalidades de estancias, cada una diseñada para
        adaptarse a tus necesidades y proporcionar el máximo bienestar a
        nuestros residentes.
      </p>
      <div className="estanciasFotos">
        <div className="imagenes-row">
          <div
            className="imagen-estancia"
            id="imagen-estancia1"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ width: "calc(20%)" }}
          >
            <img src=".././images/estancia1 1.webp" alt="" alt="Logo" />
            <div className="original-text">Temporal</div>
            <div className="hola123">
              Tu decides los dias de estancia, sin dejar de disfrutar los
              servicios.
            </div>
            <div className="texto-imagen-contenedor">
              Servicios que incluye:
              <ul style={{ padding: 0 }}>
                <li>- Habitaciones con baño privado y televisión con cable.</li>
                <li>- Servicio de lavandería</li>
                <li>- Servicio de limpieza</li>
                <li>
                  - Cámaras de vigilancia las 24 horas, con acceso de los
                  familiares a través de una app
                </li>
                <li>- Enfermería 24 horas</li>
                <li>- Alimentación</li>
                <li>- Valoración médica</li>
                <li>- Terapias físicas, cognitiva y ocupacional</li>
              </ul>
            </div>
          </div>
          <div
            className="imagen-estancia"
            id="imagen-estancia2"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ width: "calc(20%)" }}
          >
            <img src=".././images/estancia2 1.webp" alt="" alt="Logo" />
            <div className="original-text">Casa de Dia</div>
            <div className="hola123">
              Estancia de 4 a 12 horas con horario abierto de entrada y salida.
            </div>
            <div className="texto-imagen-contenedor">
              Servicios que incluye:
              <ul style={{ padding: 0 }}>
                <li>- Servicio de vigilancia de enfermeria las 24 hrs</li>
                <li>
                  - Cámaras de vigilancia las 24 horas, con acceso de los
                  familiares a través de una app
                </li>
                <li>- Alimentación</li>
                <li>- Terapias físicas (grupales o personalizadas)</li>
              </ul>
            </div>
          </div>
          <div
            className="imagen-estancia"
            id="imagen-estancia3"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ width: "calc(22.5%)" }}
          >
            <img src=".././images/estancia3 1.webp" alt="" alt="Logo" />
            <div className="original-text">Permanente</div>
            <div className="hola123">
              Descubre la calidad de vida plena para adultos mayores con cuidado
              integral.
            </div>
            <div className="texto-imagen-contenedor">
              Servicios que incluye:
              <ul style={{ padding: 0 }}>
                <li>- Habitaciones con baño privado y televisión con cable.</li>
                <li>- Servicio de lavandería</li>
                <li>- Servicio de limpieza</li>
                <li>
                  - Cámaras de vigilancia las 24 horas, con acceso de los
                  familiares a través de una app
                </li>
                <li>- Enfermería 24 horas</li>
                <li>- Alimentación</li>
                <li>- Valoración médica</li>
                <li>- Sabado de Buffet desayuno familiar</li>
                <li>- Terapias físicas (grupales o personalizadas)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estancias;
