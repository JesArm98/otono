import { useEffect, useRef, useState } from "react";
import { data } from "../../assets/data";
import "./CarruselActividades.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CarruselActividades = () => {
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
      });
    }

    setCurrentTextos(data[currentIndex].textos);
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    const threshold = 50;

    if (diffX > threshold) {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
    } else if (diffX < -threshold) {
      const prevIndex = (currentIndex - 1 + data.length) % data.length;
      setCurrentIndex(prevIndex);
    }
  };

  const handleButtonClick = (idx) => {
    setCurrentIndex(idx);
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

  return (
    <div
      id="actividades2"
      className="main-container"
      onTouchStart={handleTouchStart}
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
                <LazyLoadImage src={item.imgUrl} alt={item.imgUrl} />
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
                idx === currentIndex ? "active" : ""
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
