import { useEffect, useRef, useState } from "react";
import { data2 } from "../../assets/data2";
import "./CarruselEstancias.css";

function CarruselEstancias() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextos, setCurrentTextos] = useState({});
  const [touchStartX, setTouchStartX] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const imgNode = listRef.current.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    setCurrentTextos(data2[currentIndex].textos2);
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    const threshold = 50;

    if (diffX > threshold) {
      const nextIndex = (currentIndex + 1) % data2.length;
      setCurrentIndex(nextIndex);
    } else if (diffX < -threshold) {
      const prevIndex = (currentIndex - 1 + data2.length) % data2.length;
      setCurrentIndex(prevIndex);
    }
  };

  const handleButtonClick = (idx) => {
    setCurrentIndex(idx);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
    const textosCard = document.querySelector(".textos-card2");
    if (!showMore) {
      textosCard.classList.add("opacidad-alternativa");
    } else {
      textosCard.classList.remove("opacidad-alternativa");
    }
  };

  return (
    <div
      id="estancias2"
      className="main-container2"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="tituloEstancias2">Estancias</h1>
      <p className="subtituloEstancias2">
        Contamos con tres modalidades de estancias, cada una diseñada para
        adaptarse a tus necesidades y proporcionar el máximo bienestar a
        nuestros residentes.
      </p>

      <div className="container-images2">
        <ul ref={listRef}>
          {data2.map((item, index) => (
            <li key={index}>
              <img src={item.imgUrl2} alt={`Estancia2 ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="textos-card2">
        {!showMore && (
          <div>
            <div className="original-text2">{currentTextos.originalText2}</div>
            <div className="hola1232">{currentTextos.hola1232Text}</div>
          </div>
        )}
        {showMore && (
          <div className="nuevo-texto2">
            <div className={`textoImagenText2 ${showMore ? "" : "hidden"}`}>
              <ul>
                <div id="h123">Servicios que incluye:</div>
                {currentTextos.textoImagenText2 &&
                  currentTextos.textoImagenText2
                    .split("\n")
                    .map((servicio, index) => <li key={index}>{servicio}</li>)}
              </ul>
            </div>
          </div>
        )}
        <button className="saber-mas2" onClick={handleShowMore}>
          {showMore ? "Mostrar menos" : "Saber más"}
        </button>
      </div>
      <div className="dots-container2">
        {data2.map((_, idx) => (
          <div
            key={idx}
            className={`dot-container-item2 ${
              idx === currentIndex ? "active" : ""
            }`}
            onClick={() => handleButtonClick(idx)}
          >
            <button className="boton2"></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarruselEstancias;
