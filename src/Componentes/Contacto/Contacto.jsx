import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Grid,
  ThemeProvider,
  createTheme,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";
import axios from "axios";
import "./Contacto.css";

function Contacto() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!isSending) {
      setIsSending(true);
      setOpenSnackbar(true);

      const postData = {
        destino: "Casaotono",
        email: data.input2,
        message: data.input4,
        name: data.input1,
        phone: data.input3,
      };
      const url =
        "https://us-central1-tvn-api.cloudfunctions.net/app/send-email-casaotono";

      axios
        .post(url, postData)
        .then((response) => {
          console.log("Respuesta exitosa:", response);
          reset(); // Resetear el formulario
          setIsSent(true);
          setTimeout(() => {
            setIsSending(false);
            setIsSent(false);
          }, 10000); // Cambiar el estado del botón después de 20 segundos
        })
        .catch((error) => {
          console.error("Error en la petición:", error);
          setIsSending(false);
        });
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#582114",
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {},
        styleOverrides: {
          root: {},
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#582114",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D45F35",
            },
          },
          notchedOutline: {
            borderWidth: "1px",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: "#582114",
            },
          },
        },
      },
    },
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div id="contacto" className="Contacto">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box>
            <div className="nuestroObjetivo">Contacto</div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",

                width: "100%",
              }}
            >
              {" "}
              <div
                id="obCont"
                className="descObjetivo"
                style={{
                  width: "auto",
                  display: "flex",
                  gap: "4%",
                  marginBottom: "30px",
                }}
              >
                <div className="textoCont">
                  En Casa Otoño, nos encantaría resolver todas tus preguntas. No
                  dudes en ponerte en contacto con nosotros.
                </div>
              </div>
              <div className="cale123">
                <div
                  className="textoIcono"
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "2.92%",
                    marginLeft: "80px",
                    marginBottom: "34px",
                  }}
                >
                  <img
                    className="iconoCon"
                    src=".././images/Contacto/Mail.svg"
                    alt=""
                  />
                  <div className="textoCont" style={{ marginTop: "4px" }}>
                    servicios.casaotono@hotmail.com
                  </div>
                </div>
                <div
                  className="textoIcono"
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "80px",
                    marginBottom: "34px",
                    gap: "2.92%",
                  }}
                >
                  <img
                    id="telefonos"
                    className="iconoCon"
                    style={{ marginTop: "4px" }}
                    src=".././images/Contacto/Telefono.svg"
                    alt=""
                  />
                  <div className="textoCont" style={{ marginTop: "4px" }}>
                    {" "}
                    667-721-52-03 <br /> 667-721-52-28
                  </div>
                </div>
                <div
                  className="textoIcono"
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "2.92%",
                    marginLeft: "80px",
                    marginBottom: "34px",
                  }}
                >
                  <img
                    id="whatsapp"
                    className="iconoCon"
                    src=".././images/whatapp.svg"
                    alt=""
                  />
                  <div
                    id="textoWhats"
                    className="textoCont"
                    style={{ marginTop: "6px" }}
                  >
                    667 502 13 61
                  </div>
                </div>
                <div
                  className="textoIcono"
                  style={{
                    width: "auto",
                    display: "flex",
                    gap: "3.4%",
                    marginBottom: "34px",
                    marginLeft: "80px",
                  }}
                >
                  <img
                    id="ubicacion"
                    style={{ marginTop: "8px" }}
                    className="iconoCon"
                    src=".././images/Contacto/Ubicacion.svg"
                    alt=""
                  />
                  <div
                    className="textoCont"
                    style={{ marginTop: "4px", maxWidth: "80%" }}
                  >
                    Blvd. Pedro Infante 3002, Gasolinera del Valle, Las Flores,
                    80104 Culiacán Rosales, Sin.
                  </div>
                </div>

                <div className="cajaComoLlegar">
                  <a
                    href="https://maps.app.goo.gl/8Ur6vmqnfXkhAJk97"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                        marginLeft: "80px",
                        marginTop: "30px",
                        fontWeight: 400,
                        width: "343px",
                        height: "44px",
                        fontFamily: "League Spartan",
                      }}
                      className="formuButton"
                    >
                      <img src=".././images/Contacto/Ubicacion 2.svg" alt="" />
                      <div
                        className="textoCont"
                        id="btn_enviar"
                        style={{ marginTop: "4px" }}
                      >
                        Como llegar a casa Otoño
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            className="Formulario"
            style={{ padding: 20, textAlign: "center" }}
          >
            <ThemeProvider theme={theme}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  className="CajaForm"
                  sx={{
                    paddingTop: "30px",
                    display: "flex",
                  }}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  maxWidth={740}
                  maxheight={400}
                >
                  <TextField
                    fullWidth
                    label="Nombre"
                    {...register("input1", { required: true, maxLength: 30 })}
                    error={!!errors.input1}
                    helperText={
                      errors.input1?.type === "maxLength"
                        ? "Máximo 30 caracteres"
                        : "Introduzca su nombre completo"
                    }
                  />
                  <TextField
                    fullWidth
                    label="Correo electrónico"
                    {...register("input2", { required: true, maxLength: 45 })}
                    error={!!errors.input2}
                    helperText={
                      errors.input2?.type === "maxLength"
                        ? "Máximo 45 caracteres"
                        : "Ingrese su correo electronico"
                    }
                  />
                  <TextField
                    fullWidth
                    label="Teléfono"
                    {...register("input3", { required: true, maxLength: 10 })}
                    error={!!errors.input3}
                    helperText={
                      errors.input3?.type === "maxLength"
                        ? "Máximo 10 caracteres"
                        : "Ingrese su numero de contacto"
                    }
                  />
                  <TextField
                    fullWidth
                    sx={{ height: "fit-content" }}
                    label="Mensaje"
                    {...register("input4", { required: true, maxLength: 350 })}
                    error={!!errors.input4}
                    helperText={
                      errors.input4?.type === "maxLength"
                        ? "Máximo 350 caracteres"
                        : "Dejenos un mensaje con sus comentarios"
                    }
                  />
                  <button
                    style={{
                      marginTop: "41px",
                      height: "44px",
                      fontFamily: "League Spartan",
                      fontWeight: "400",
                    }}
                    className="formuButton"
                    id="enviar"
                    type="submit"
                    disabled={isSending}
                  >
                    <div
                      style={{ marginTop: "4px", fontFamily: "League Spartan" }}
                    >
                      {isSending ? "Enviando..." : "Enviar"}
                    </div>
                  </button>
                </Box>
              </form>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Enviando mensaje...
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contacto;
