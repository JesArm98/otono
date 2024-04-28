import "./App.css";
import Actividades from "./Componentes/Actividades/Actividades";
import Contacto from "./Componentes/Contacto/Contacto";
import Estancias from "./Componentes/Estancias/Estancias";
import Eventos from "./Componentes/Eventos/Eventos";
import Footer from "./Componentes/Footer/Footer";
import Habitaciones from "./Componentes/Habitaciones/Habitaciones";
import Header from "./Componentes/Header/Header";
import Instalaciones from "./Componentes/Instalaciones/Instalaciones";
import Navbar from "./Componentes/Navbar";
import Objetivo from "./Componentes/Objetivo/Objetivo";
import CarruselEstancias from "./Componentes/Estancias/CarruselEstancias";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarruselActividades from "./Componentes/Actividades/CarruselActividades";

const theme = createTheme({
  typography: {
    fontFamily: ["League Spartan"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Header />
        <Objetivo />
        <Estancias />
        <CarruselEstancias />
        <Habitaciones />
        <Instalaciones />
        <Actividades />
        <CarruselActividades />
        <Eventos />
        <Contacto />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
