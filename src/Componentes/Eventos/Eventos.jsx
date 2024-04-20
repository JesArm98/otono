import "./Eventos.css";

function Eventos() {
  const phoneNumber = "526675021361";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div id="eventos" className="Eventos">
      <div className="eventosh1">
        Casa Otoño, tu mejor elección para eventos
      </div>
      <div className="eventosh3">
        Eleva tus eventos a otro nivel con la renta de nuestro restaurante.
        Ideal para capacitaciones, diplomados y eventos privados. Además,
        consulta nuestras cotizaciones personalizadas de platillos y coffee
        breaks para añadir un toque delicioso a tu evento.
      </div>
      <a href="#Header">
        <button onClick={openWhatsApp} className="reserva">
          Solicita Cotización
        </button>
      </a>
    </div>
  );
}

export default Eventos;
