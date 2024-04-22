import "./Actividades.css";

function Actividades() {
  return (
    <div id="actividades" className="seccionActividades">
      <h1 className="tituloActividades">Actividades</h1>
      <p className="subtituloActividades">
        Descubre cómo enriquecemos la vida de nuestros residentes a través de
        diferentes actividades diseñadas para estimular la mente, fomentar la
        socialización y promover un envejecimiento activo y pleno.
      </p>
      <div className="imagenesRow">
        <div className="imagenActividades" id="imagenActividades1">
          <img src=".././images/terapia_fisica.webp" alt="Logo" />
          <div className="original-text">
            Terapias Fisicas (Individuales y grupales)
          </div>
          <div className="hola123">
            Nuestras terapias físicas son más que simples sesiones; son
            experiencias que unen a nuestros residentes en un ambiente lleno de
            energía positiva y compañerismo.{" "}
          </div>
        </div>
        <div className="imagenActividades" id="imagenActividades2">
          <img src=".././images/terapia_cognitiva.webp" alt="Logo" />
          <div className="original-text">
            Terapias Cognitivas (Personalizadas por residente)
          </div>
          <div className="hola123">
            Adaptamos cada sesión a las necesidades únicas de nuestros
            residentes, estimulando mentes de manera personalizada promoviendo
            agilidad mental y bienestar emocional.{" "}
          </div>
        </div>
        <div className="imagenActividades" id="imagenActividades3">
          <img src=".././images/buffet_familiar.webp" alt="Logo" />
          <div className="original-text">Sábado buffet desayuno familiar</div>
          <div className="hola123">
            Una actividad diseñada para que los familiares de nuestros
            residentes compartan momentos especiales en un ambiente acogedor
            creando recuerdos significativos para ellos.{" "}
          </div>
        </div>
        <div className="imagenActividades" id="imagenActividades4">
          <img src=".././images/eventos.webp" alt="Logo" />
          <div className="original-text">Eventos</div>
          <div className="hola123">
            Transformamos cada efeméride en un evento especial para nuestros
            residentes, organizando actividades temáticas que les brindan
            experiencias únicas y memorables.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actividades;
