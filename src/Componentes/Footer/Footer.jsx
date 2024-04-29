import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import "./Footer.css";
import { Dialog } from "@mui/material";

function Footer() {
  const phoneNumber = "526675021361";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  const [openDialog, setOpenDialog] = useState(false);
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

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
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
        <button onClick={handleDialogOpen}>
          Aviso de privacidad - © 2024 CASA OTOÑO
        </button>
      </div>
      {/* Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="xl">
        {/* Aquí puedes colocar el contenido del aviso de privacidad */}
        <div
          className="dialogPrivacidad"
          style={{ padding: "60px", textAlign: "justify" }}
        >
          <p id="avisoPrivacidad">AVISO DE PRIVACIDAD CASA OTOÑO</p>
          <br></br>
          <p>Información general</p>
          <br></br> El presente aviso de privacidad celebrado entre Estancia
          Bella A.C (Casa otoño) y el titular de la información, establece la
          manera en que será tratada su información por parte de CASA OTOÑO, así
          como la finalidad para la que fue recabada, lo anterior de conformidad
          con los artículos 15 u 16 de la Ley Federal de Protección de Datos
          Personales en Posesión de los particulares (la "Ley").<br></br>
          <br></br> CASA OTOÑO respeta su derecho a la privacidad y protección
          de sus datos personales, los cuales son amparados por la ley. La base
          de datos en donde se guarda su información es responsabilidad de CASA
          OTOÑO cuya oficina matriz está ubicada en calle Blvd. Pedro Infante
          3002, colonia Las flores, ciudad Culiacán, C.P. 80104, en la entidad
          de Sinaloa, México asimismo su información se encuentra debidamente
          resguardada conforme a las disposiciones de seguridad administrativa,
          técnica y física, establecidad en la Ley de la materia, para
          protegerla de los posibles daños, perdidas, alteración o acceso no
          autorizado.<br></br>
          <br></br>
          <br></br> <p>Información que recolectamos</p>
          <br></br>
          <br></br> Los datos personales que recabamos, cuando así aplique,
          están dentro de las siguientes categorías: Identificación (nombre,
          domicilio, teléfono, correo electrónico, firma, RFC, CURP, Fecha de
          nacimiento, edad, nacionalidad, estado civil, etc); laborales (puesto,
          domicilio, correo electrónico y teléfono del trabajo); patrimoniales
          (información fiscal, historial crediticio, cuentas bancarias, ingresos
          y egresos, etc).<br></br>
          <br></br> De manera adicional, utilizaremos su información personal
          para las siguientes finalidades secundarias que no son necesarias para
          el servicio solicitado, pero que nos permiten y facilitan brindarle
          una mejor atención:<br></br>
          <br></br> - Nombre
          <br></br> - Teléfono
          <br></br> - Correo electrónico<br></br>
          <br></br> En caso de que no desee que sus datos personales sean
          tratados para estos fines secundarios, desde este momento usted nos
          puede comunicar lo anterior a través del siguiente mecanismo:
          <br></br>
          <br></br> La negativa para el uso de sus datos personales para estas
          finalidades no podrá ser un motivo para que le neguemos los servicios
          y productos que solicita o contrata con nosotros.<br></br>
          <br></br>{" "}
          <p>Derechos de acceso, rectificación, cancelación u oposición</p>
          <br></br>
          <br></br>
          El titular podrá ejercer los derechos de acceso, rectificación,
          cancelación u oposición, respecto a los datos personales que le
          concierne, enviando una solicitud a Casa Otoño al correo
          servicios.casaotono@hotmail.com será necesario que indique su nombre y
          domicilio completo y un documento que permita su identificación, así
          como el objetivo de su solicitud y/o tramite a efectuar. Lo anterior
          se deberá realizar en base a la Ley y su reglamento. Transferencia de
          datos El titular entiende y acepta que CASA OTOÑO y/o cualquier de sus
          subsidiarias y/o filiales, podrá transferir sus datos personales a
          terceros que han sido contratados por CASA OTOÑO para que realicen en
          su nombre y representación ciertas tareas relacionadas con las
          actividades comerciales y de promoción de sus productos y/o servicios.
          Estas terceras partes pueden tratar los datos en cumplimiento de las
          instrucciones de CASA OTOÑO, tomar decisiones sobre ellos como parte
          de la presentación de sus servicios, en cualquiera de los dos casos,
          Casa Otoño seleccionará proveedores que considere confiables y que se
          comprometan mediante un contrato u otros medios legales aplicables, a
          implementar las medidas de seguridad necesarias para garantizar un
          nivel de producción adecuado a sus datos personales. Derivado de lo
          anterior, CASA OTOÑO exigirá a sus proveedores que cumplan con medidas
          de seguridad que garantice los mismos niveles de protección que CASA
          OTOÑO implementa durante el tratamiento de sus datos como cliente DE
          CASA OTOÑO. <br></br>
          <br></br>Si el titular, ya no acepta la transmisión de sus datos
          personales de conformidad con lo estipulado en el párrafo anterior,
          puede ponerse en contacto con CASA OTOÑO, por cualquiera de los medios
          establecidos en el presente Aviso de Privacidad.<br></br>
          <br></br>
          Adicionalmente y de conformidad con lo estipulado en los artículos 10,
          37 y demás relativos de la Ley y Reglamento, CASA OTOÑO quedará
          exceptuado de las obligaciones referentes al consentimiento para el
          tratamiento y trasferencia de sus datos, cuando:<br></br>
          <br></br> - Este previsto en la Ley
          <br></br> - Los datos figuren en fuentes de acceso público
          <br></br> - Los datos personales se someterá a un procedimiento previo
          de disociación
          <br></br> - Tenga el propósito de cumplir obligaciones derivadas de
          una relación jurídica entre el titular y el responsable
          <br></br> - Exista una situación de emergencia que potencialmente
          puede dañar a un individuo en su persona o en sus bienes.
          <br></br> - Sean indispensables para la atención médica, la
          prevención, diagnóstico, la presentación de asistencia sanitaria,
          tratamientos médicos o la gestión de servicios sanintarios.
          <br></br> - Se dice resolución de autoridad competente
          <br></br> - Cuando la transferencia sea precisa para el
          reconocimiento, ejercicio o defensa de un derecho en proceso judicial
          <br></br> - Cuando la transferencia sea precisa para el mantenimiento
          o cumplimiento de una relación jurídica entre el responsable y el
          titular.<br></br>
          <br></br>
          <p>Cambios en el aviso de privacidad</p>
          <br></br> Ambas partes, en este instrumento, acuerdan de manera
          irrevocable, que en caso de que se requiera alguna modificación en lo
          estipulado en el presente aviso de privacidad, CASA OTOÑO se obliga a
          hacer del conocimiento los cambios que en su caso se requiera, por
          cualquier medio, incluido los electrónicos , previo aviso que se le dé
          a usted para que se manifieste por su parte, lo que a su derecho
          convenga, ya que de no recibir negativa expresa y por escrito de su
          parte, o bien respuesta alguna, se entenderá que usted acepta de
          conformidad los cambios realizados.
        </div>
      </Dialog>
    </div>
  );
}

export default Footer;
