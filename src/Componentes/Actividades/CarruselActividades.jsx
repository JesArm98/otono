import React, { useEffect, useRef, useState } from "react";
import { data } from "../../assets/data";
import "./CarruselActividades.css";

const CarruselActividades = () => {
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

    setCurrentTextos(data[currentIndex].textos);
  }, [currentIndex]);

  const handleButtonClick = (idx) => {
    setActiveButton(idx);
    setShowMore(false);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
    const textosCard = document.querySelector(".textos-card");
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
      const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
      setActiveButton(nextIndex);
    } else if (touchEndX - touchStartX > 50) {
      const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
      setActiveButton(prevIndex);
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div
      id="actividades2"
      className="main-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="tituloEstancias">Actividades</h1>
      <p className="subtituloEstancias">
        Descubre cómo enriquecemos la vida de nuestros residentes a través de
        diferentes actividades diseñadas para estimular la mente, fomentar la
        socialización y promover un envejecimiento activo y pleno.
      </p>

      <div className="slider-container">
        <div className="container-images">
          <ul ref={listRef}>
            {data.map((item, index) => (
              <li key={index}>
                <img src={item.imgUrl} alt={item.imgUrl} />
              </li>
            ))}
          </ul>
        </div>
        <div className="textos-card">
          {!showMore && (
            <div>
              <div className="original-text">{currentTextos.originalText}</div>
            </div>
          )}
          {showMore && (
            <div className="nuevo-texto">
              <div className={`textoImagenText ${showMore ? "" : "hidden"}`}>
                {currentTextos.textoImagenText}
              </div>
            </div>
          )}
          <button
            className={`saber-mas2 ${showMore ? "saber-mas-activo" : ""}`}
            onClick={handleShowMore}
          >
            {showMore ? "Mostrar menos" : "Saber más"}
          </button>
        </div>
        <div className="dots-container">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${
                idx === activeButton ? "active" : ""
              }`}
              onClick={() => handleButtonClick(idx)}
            >
              <button className="boton"></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarruselActividades;
