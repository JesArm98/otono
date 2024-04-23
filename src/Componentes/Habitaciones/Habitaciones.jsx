import { useState } from "react";
import "./Habitaciones.css";
import { Box, Container, Typography, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Habitaciones() {
  const [imagenes, setImagenes] = useState({
    principal: ".././images/estandar1.webp",
    secundaria1: ".././images/estandar2.webp",
    secundaria2: ".././images/estandar3.webp",
  });
  const [seleccionado, setSeleccionado] = useState("Estandar");
  const [label, setLabel] = useState("Estandar");
  const [texto, setTexto] = useState(
    "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado, sala recibidor"
  );

  // Función para cambiar las imágenes cuando se hace clic en una secundaria
  const cambiarImagenes = (principalSrc, secundaria1Src, secundaria2Src) => {
    setImagenes({
      principal: principalSrc,
      secundaria1: secundaria1Src,
      secundaria2: secundaria2Src,
    });
  };

  // Función para manejar el click en un elemento
  const manejarClick = (item) => {
    setSeleccionado(item);
    const seleccion = images.find((img) => img.label === item);
    if (seleccion) {
      setLabel(seleccion.label);
      setTexto(seleccion.textoImagen);
      cambiarImagenes(
        seleccion.principal,
        seleccion.secundaria1,
        seleccion.secundaria2
      );
    }
  };

  const images = [
    {
      label: "Estandar",
      principal: ".././images/estandar1.webp",
      secundaria1: ".././images/estandar2.webp",
      secundaria2: ".././images/estandar3.webp",
      textoImagen:
        "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado.",
    },
    {
      label: "Mini suite",
      principal: ".././images/minisuite1.webp",
      secundaria1: ".././images/minisuite2.webp",
      secundaria2: ".././images/minisuite3.webp",
      textoImagen:
        "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado, sala recibidor",
    },
    {
      label: "Duplex",
      principal: ".././images/duplex1.webp",
      secundaria1: ".././images/duplex2.webp",
      secundaria2: ".././images/duplex3.webp",
      textoImagen:
        "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado, sala recibidor (compartida)",
    },
  ];

  return (
    <div
      id="habitaciones"
      className="Habitaciones"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="TitulosCentrados">Habitaciones</h1>

        <h2 style={{ height: "auto" }} className="descCentrada" id="desHab">
          Cada espacio refleja nuestro compromiso con la comodidad, seguridad y
          bienestar, por ellos contamos con 3 tipos de habitaciones.
        </h2>

        <h3
          style={{
            fontSize: "36px",
            color: "#D45F35",
            fontFamily: "League Spartan",
            fontStyle: "normal",
            fontWeight: "500",
            margin: "0",
            marginBottom: "28px",
            marginTop: "30px",
          }}
          className="TitulosCentradosMovile"
        >
          {label}
        </h3>

        <Box
          className="cajaCompleta"
          sx={{
            display: "flex",
            width: "100%",
            height: "600px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container className="Menu" sx={{ width: "20%" }}>
            {" "}
            <ul
              style={{
                marginRight: "25%",
                color: "#DD927A",
                fontSize: "5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "500px",
                alignItems: "flex-end",
              }}
            >
              {images.map((item) => (
                <li
                  key={item.label}
                  style={{
                    cursor: "pointer",
                    borderRight:
                      seleccionado === item.label
                        ? "5px solid rgba(99, 48, 27, 1)"
                        : "5px solid rgba(99, 48, 27, 0.19)",
                    paddingRight: "20px",
                    height: "135px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    transition: "border-right 0.5s ease",
                  }}
                  onClick={() => manejarClick(item.label)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </Container>

          <Grid container spacing={2} className="ImagenContainer">
            {/* Imagen principal grande a la izquierda */}
            <Grid item xs={12} lg={6} xl={6.15}>
              <LazyLoadImage
                className="ImagenHabitacion"
                id="principal"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                src={imagenes.principal}
                alt=""
              />
            </Grid>

            {/* Dos imágenes más pequeñas a la derecha en dispositivos medianos y grandes */}
            <Grid item xs={12} lg={5} xl={3}>
              <Grid container spacing={2}>
                <Grid item xs={6} lg={7} xl={12}>
                  <LazyLoadImage
                    className="ImagenHabitacion"
                    id="secundaria1"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={imagenes.secundaria1}
                    alt=""
                    onClick={() =>
                      cambiarImagenes(
                        imagenes.secundaria1,
                        imagenes.principal,
                        imagenes.secundaria2
                      )
                    }
                  />
                </Grid>
                <Grid item xs={6} lg={7} xl={12}>
                  <LazyLoadImage
                    className="ImagenHabitacion"
                    id="secundaria2"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={imagenes.secundaria2}
                    alt=""
                    onClick={() =>
                      cambiarImagenes(
                        imagenes.secundaria2,
                        imagenes.secundaria1,
                        imagenes.principal
                      )
                    }
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Descripción */}
            <Grid item xs={12}>
              <Typography
                className="Incluye"
                variant="h6"
                sx={{ marginTop: "20px" }}
              >
                {texto}
              </Typography>
            </Grid>
          </Grid>

          <ul
            className="MenuMovil"
            style={{
              color: "#DD927A",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {images.map((item) => (
              <li
                key={item.label}
                style={{
                  borderTop:
                    seleccionado === item.label
                      ? "10.5px solid rgba(99, 48, 27, 1)"
                      : "10.5px solid rgba(99, 48, 27, 0.19)",
                  width: "92px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "55px",
                  transition: "border-right 0.5s ease",
                }}
                onClick={() => manejarClick(item.label)}
              ></li>
            ))}
          </ul>
        </Box>
      </Box>

      <Box
        sx={{ marginTop: "24px" }}
        className="custom-shape-divider-bottom-1710877318"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill2"
          ></path>
        </svg>
      </Box>
    </div>
  );
}

export default Habitaciones;
