import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Footer.css";

function Footer() {
  const phoneNumber = "526675021361";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleNavLinkClick = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    const href = e.currentTarget.getAttribute("href");
    const offset = 114; // Ajusta este valor según necesites
    const element = document.getElementById(href.substring(1));

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="footer-container" id="footer">
      <a href="#" style={{ textDecoration: "none" }}>
        <LazyLoadImage
          src=".././images/logotipo_casaotono.svg"
          alt=""
          className="footerLogo"
        />
      </a>
      <ul className="footerList1">
        <li>
          <a
            href="#objetivo"
            onClick={handleNavLinkClick}
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            href="#estancias"
            onClick={handleNavLinkClick}
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Estancia
          </a>
        </li>
        <li className="habitaciones">
          <a
            href="#habitaciones"
            onClick={handleNavLinkClick}
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Habitaciones
          </a>
        </li>
      </ul>
      <ul className="footerList2">
        <li>
          <a
            href="#instalaciones"
            onClick={handleNavLinkClick}
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Instalaciones
          </a>
        </li>
        <li>
          <a
            href="#actividades"
            onClick={handleNavLinkClick}
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Actividades
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            onClick={handleNavLinkClick}
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Contacto
          </a>
        </li>
      </ul>
      <div className="redes" style={{ marginRight: "3%" }}>
        <div>
          {" "}
          <a
            href="https://www.facebook.com/profile.php?id=100053023187509"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <LazyLoadImage
              src=".././images/facebook_icon.svg"
              alt=""
              className="facebook"
            />
          </a>
          <a
            href="https://maps.app.goo.gl/8Ur6vmqnfXkhAJk97"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <LazyLoadImage
              src=".././images/googlemaps_icon.svg"
              alt=""
              className="maps"
            />
          </a>
          <a href="" target="_blank" style={{ textDecoration: "none" }}>
            <LazyLoadImage
              onClick={openWhatsApp}
              src=".././images/whats_icon.svg"
              alt=""
              className="whatsapp"
            />
          </a>
          <a href="#eventos" style={{ textDecoration: "none" }}>
            <button
              style={{
                fontFamily: "League Spartan",
                fontWeight: 400,
                fontSize: "22px",
              }}
              className="footerbotones"
            >
              Solicita Cotización
            </button>
          </a>
        </div>
      </div>
      <div className="hola">
        <p>Aviso de privacidad - © 2024 CASA OTOÑO</p>
      </div>
    </div>
  );
}

export default Footer;
