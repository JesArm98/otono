import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Umbral de cambio en pixeles
  const threshold = 300;

  // Valores RGB para el color objetivo #6E5356
  const targetRed = 110;
  const targetGreen = 83;
  const targetBlue = 86;

  // Calcular la fracción del desplazamiento respecto al umbral
  const fraction = Math.min(scrollPosition / threshold, 1);

  // Interpolar los valores de color
  const colorValueRed = 255 + (targetRed - 255) * fraction;
  const colorValueGreen = 255 + (targetGreen - 255) * fraction;
  const colorValueBlue = 255 + (targetBlue - 255) * fraction;

  // Formatear el color como una cadena RGB
  const iconColor = `rgb(${Math.round(colorValueRed)}, ${Math.round(
    colorValueGreen
  )}, ${Math.round(colorValueBlue)})`;

  const toggleMenu = () => {
    if (isOpen) {
      setAnimation("slideOut 0.5s forwards");
    } else {
      setAnimation("slideIn 0.5s forwards");
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let animationTimer;
    if (isOpen) {
      setAnimation("slideIn 0.5s forwards");
    } else if (!isOpen && animation) {
      animationTimer = setTimeout(() => {
        setAnimation("");
      }, 500); // Coincide con la duración de la animación
    }
    return () => clearTimeout(animationTimer);
  }, [isOpen]);

  const handleMenuItemClick = (event, href) => {
    event.preventDefault();
    const offsetTop = document.querySelector(href).offsetTop;
    const offset = 82; // Ajusta este valor al alto de tu navbar
    window.scrollTo({
      top: offsetTop - offset,
      behavior: "smooth",
    });
    handleCloseMenu();
  };

  const menuItems = [
    { name: "Nosotros", href: "#objetivo" },
    { name: "Estancias", href: "#estancias2" },
    { name: "Habitaciones", href: "#habitaciones" },
    { name: "Instalaciones", href: "#instalaciones" },
    { name: "Actividades", href: "#actividades2" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleCloseMenu = () => {
    setAnimation("slideOut 0.5s forwards");
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // Esperar a que termine la animación para cambiar el estado
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={toggleMenu}
        size="large"
        sx={{ color: iconColor, position: "absolute", top: 6, right: 8 }}
      >
        <MenuIcon sx={{ fontSize: 52 }} />
      </IconButton>
      {(isOpen || animation) && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100vw",
            height: "100%",
            backgroundColor: "rgb(99, 48, 27, .95)",
            animation: animation,
            "@keyframes slideIn": {
              from: { opacity: 0, transform: "translateX(100%)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
            "@keyframes slideOut": {
              from: { opacity: 1, transform: "translateX(0)" },
              to: { opacity: 0, transform: "translateX(100%)" },
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={toggleMenu}
            sx={{ color: "white", position: "absolute", top: 8, left: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                onClick={(e) => handleMenuItemClick(e, item.href)}
                style={{
                  textDecoration: "none",
                  fontSize: "40px",
                  color: "white",
                  width: "100%",
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ style: { fontSize: "30px" } }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </React.Fragment>
  );
};

export default MobileMenu;
