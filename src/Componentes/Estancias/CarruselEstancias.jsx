import { useEffect, useRef, useState } from "react";
import { data2 } from "../../assets/data2";
import "./CarruselEstancias.css";

function CarruselEstancias() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextos, setCurrentTextos] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    setCurrentTextos(data2[currentIndex].textos2);
  }, [currentIndex]);

  const handleButtonClick = (idx) => {
    setActiveButton(idx);
    setCurrentIndex(idx);
    setShowMore(false);
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

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      const nextIndex =
        currentIndex === data2.length - 1 ? 0 : currentIndex + 1;
      handleButtonClick(nextIndex);
    } else if (touchEndX - touchStartX > 50) {
      const prevIndex =
        currentIndex === 0 ? data2.length - 1 : currentIndex - 1;
      handleButtonClick(prevIndex);
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div
      id="estancias2"
      className="main-container2"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
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
              idx === activeButton ? "active" : ""
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
