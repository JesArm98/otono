import { useEffect, useRef, useState } from "react";
import { Swipeable } from "react-swipeable";
import { data } from "../../assets/data";
import "./CarruselActividades.css";

const CarruselActividades = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextos, setCurrentTextos] = useState({});
  const [showMore, setShowMore] = useState(false);

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
    <div id="actividades2" className="main-container">
      <h1 className="tituloEstancias">Actividades</h1>
      <p className="subtituloEstancias">
        Descubre cómo enriquecemos la vida de nuestros residentes a través de
        diferentes actividades diseñadas para estimular la mente, fomentar la
        socialización y promover un envejecimiento activo y pleno.
      </p>

      <Swipeable
        onSwipedLeft={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
          )
        }
        onSwipedRight={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          )
        }
      >
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
                <div className="original-text">
                  {currentTextos.originalText}
                </div>
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
        </div>
      </Swipeable>
      <div className="dots-container">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`dot-container-item ${
              idx === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(idx)}
          >
            <button className="boton"></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselActividades;
