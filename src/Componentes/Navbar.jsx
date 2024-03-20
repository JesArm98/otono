import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [background, setBackground] = useState("transparent");
  const [color, setColor] = useState("white");
  const [shadow, setShadow] = useState("none"); // Estado inicial para la sombra

  const interpolateColor = (scrollY, start, end, maxScroll) => {
    const percent = Math.min(scrollY / maxScroll, 1); // Asegura que el valor esté entre 0 y 1
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
        setShadow("0px 4px 6px rgba(0, 0, 0, 0.1)");
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
    const offset = 144; // Ajusta este valor según necesites
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

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }); // Asegúrate de incluir las dependencias apropiadas aquí si las hay

  return (
    <div
      className="navbar"
      style={{ backgroundColor: background, color: color, boxShadow: shadow }}
    >
      <ul
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
        <li>
          <a
            href="#Header"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img
              src="public/logo casa otno.png"
              alt="Logo"
              className="navbarLogo"
            />
          </a>
        </li>
        <li>
          <a
            href="#instalaciones"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Instalaciones
          </a>
        </li>
        <li>
          <a
            href="#actividades"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Actividades
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
