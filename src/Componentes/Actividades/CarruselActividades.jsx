import React, { useEffect, useRef, useState } from "react";
import { data } from "../../assets/data";
import "./CarruselActividades.css";

const CarruselActividades = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextos, setCurrentTextos] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const [startTouch, setStartTouch] = useState({ x: null, y: null });

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }

    setCurrentTextos(data[currentIndex].textos);
  }, [currentIndex]);

  const handleButtonClick = (idx) => {
    setActiveButton(idx);
    setCurrentIndex(idx);
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
    const touch = e.touches[0];
    setStartTouch({
      x: touch.clientX,
      y: touch.clientY,
    });
  };

  const handleTouchMove = (e) => {
    if (!startTouch.x || !startTouch.y) {
      return;
    }

    const touch = e.touches[0];
    const deltaX = touch.clientX - startTouch.x;
    const deltaY = touch.clientY - startTouch.y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (deltaX < 0 && currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    setStartTouch({ x: null, y: null });
  };

  return (
    <div id="actividades2" className="main-container">
      <h1 className="tituloEstancias">Actividades</h1>
      <p className="subtituloEstancias">
        Descubre cómo enriquecemos la vida de nuestros residentes a través de
        diferentes actividades diseñadas para estimular la mente, fomentar la
        socialización y promover un envejecimiento activo y pleno.
      </p>

      <div
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
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
              <div className={`textoImagenText${showMore ? "" : "hidden"}`}>
                {currentTextos.textoImagenText}
              </div>
            </div>
          )}
          <button className="saber-mas2" onClick={handleShowMore}>
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
