import "./Estancias.css";

function Estancias() {
  return (
    <div id="estancias" className="Estancias">
      <div className="textos">
        <h1 className="tituloEstanciass">Estancias</h1>
        <p className="subtituloEstanciass">
          Contamos con tres modalidades de estancias, cada una diseñada para
          adaptarse a tus necesidades y proporcionar el máximo bienestar a
          nuestros residentes.
        </p>
      </div>
      <div className="estanciasFotos">
        <div className="imagenes-row">
          <div className="imagenesEstancia">
            <div className="imagenHover">
              <div className="imagen-estancia">
                <img src="\images\estancia1 1.webp" alt="Logo" />
                <div className="cardText">
                  <h2 className="cardTitle">Temporal</h2>
                  <p className="cardDesc">
                    Tu decides los dias de estancia, sin dejar de disfrutar los
                    servicios.
                  </p>
                </div>
                <div className="texto-imagen-contenedor" id="estancia1">
                  <h3>Servicios que incluye:</h3>
                  <ul style={{ padding: 0 }}>
                    <li>
                      - Habitaciones con baño privado y televisión con cable.
                    </li>
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
            </div>
            <div className="imagen-estancia">
              <img src="\images\estancia2 1.webp" alt="Logo" />
              <div className="cardText">
                <h2 className="cardTitle">Casa de Día</h2>
                <p className="cardDesc">
                  Estancia de 4 a 12 horas con horario abierto de entrada y
                  salida.
                </p>
              </div>
              <div className="texto-imagen-contenedor" id="estancia2">
                <h3>Servicios que incluye:</h3>
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
            <div className="imagen-estancia">
              <img src="\images\estancia3 1.webp" alt="Logo" />
              <div className="cardText">
                <h2 className="cardTitle">Permanente</h2>
                <p className="cardDesc">
                  Descubre la calidad de vida plena para adultos mayores con
                  cuidado integral.
                </p>
              </div>
              <div className="texto-imagen-contenedor" id="estancia3">
                <h3>Servicios que incluye:</h3>
                <ul style={{ padding: 0 }}>
                  <li>
                    - Habitaciones con baño privado y televisión con cable.
                  </li>
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
    </div>
  );
}

export default Estancias;
