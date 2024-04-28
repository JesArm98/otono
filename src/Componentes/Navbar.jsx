import { useEffect, useState } from "react";
import "./Navbar.css";
import MobileMenu from "./MobileMenu";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Navbar() {
  const [background, setBackground] = useState("transparent");
  const [color, setColor] = useState("white");
  const [shadow, setShadow] = useState("none"); // Estado inicial para la sombra
  const [hideNavbar, setHideNavbar] = useState(false); // Nuevo estado para ocultar la barra de navegación

  const interpolateColor = (scrollY, start, end, maxScroll) => {
    const percent = Math.min(scrollY / maxScroll, 0.96); // Asegura que el valor esté entre 0 y 1
    const startRGB = parseInt(start.substring(1), 16); // Convierte el color inicial a RGB
    const endRGB = parseInt(end.substring(1), 16); // Convierte el color final a RGB
    const startR = (startRGB >> 16) & 0xff;
    const startG = (startRGB >> 8) & 0xff;
    const startB = startRGB & 0xff;
    const endR = (endRGB >> 16) & 0xff;
    const endG = (endRGB >> 8) & 0xff;
    const endB = endRGB & 0xff;
    const r = Math.round(startR + (endR - startR) * percent);
    const g = Math.round(startG + (endG - startG) * percent);
    const b = Math.round(startB + (endB - startB) * percent);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const listenScrollEvent = () => {
    const scrollY = window.scrollY;
    const opacity = Math.min(scrollY / 800, 1); // Ajusta para controlar la rapidez del cambio

    if (scrollY > 50) {
      setBackground(`rgba(255, 255, 255, ${opacity})`); // Cambia el fondo gradualmente
      setColor(interpolateColor(scrollY, "#FFFFFF", "#582114", 800)); // Interpola el color de las letras
      if (opacity === 1) {
        // Aplica sombra cuando alcanza la opacidad máxima
        setShadow("0px 4px 6px rgba(0, 0, 0, 0.3)");
      }
    } else {
      setBackground("transparent");
      setColor("#FFFFFF");
      setShadow("none"); // Quita la sombra
    }
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

  const handleIntersection = (entries) => {
    let showNavbar = true;

    entries.forEach((entry) => {
      // Si el elemento de contacto o footer está visible en un 60% o más
      if (
        (entry.target.id === "contacto" || entry.target.id === "footer") &&
        entry.intersectionRatio >= 0.6
      ) {
        showNavbar = false;
      }
    });

    setHideNavbar(!showNavbar);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6,
    });

    const contactElement = document.getElementById("contacto");
    const footerElement = document.getElementById("footer");

    if (contactElement) {
      observer.observe(contactElement);
    }
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      observer.disconnect();
    };
  }, []);

  return (
    !hideNavbar && (
      <div
        className="navbar"
        style={{
          backgroundColor: background,
          color: color,
          boxShadow: shadow,
          height: "fit-content",
          zIndex: "2000",
        }}
      >
        {/* NavbarWeb */}
        <ul
          className="NavbarWeb"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <li>
            <a
              href="#objetivo"
              onClick={handleNavLinkClick}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#estancias"
              onClick={handleNavLinkClick}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Estancia
            </a>
          </li>
          <li className="habitaciones">
            <a
              href="#habitaciones"
              onClick={handleNavLinkClick}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Habitaciones
            </a>
          </li>

          <a
            className="navOpciones"
            href="#Header"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <LazyLoadImage
              src="./images/logotipo_casaotono.svg"
              alt="Logo"
              className="navbarLogo"
            />
          </a>

          <li>
            <a
              className="navOpciones"
              href="#instalaciones"
              onClick={handleNavLinkClick}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Instalaciones
            </a>
          </li>
          <li>
            <a
              className="navOpciones"
              href="#actividades"
              onClick={handleNavLinkClick}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Actividades
            </a>
          </li>
          <li>
            <a
              className="navOpciones"
              href="#contacto"
              onClick={handleNavLinkClick}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Contacto
            </a>
          </li>
        </ul>
        <div
          className="cellDiv"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "14px",
          }}
        >
          <a href="#Header">
            {" "}
            <LazyLoadImage
              className="logoCell"
              src="./images/PNG Objetivo/LogoCell.svg"
              alt=""
            />
          </a>

          <MobileMenu></MobileMenu>
        </div>
      </div>
    )
  );
}

export default Navbar;
