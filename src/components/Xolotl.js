import { useState } from 'react';
import { Navbar } from './subcomponents/Hpcomponents.js'; 
import "../stylesheets/cstyles/Xolotl.css";

function CarouselXolotl() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const photos = ["https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169889/sci-resources/xolotl3_yolyxr.png", "https://res.cloudinary.com/dfrjfuchi/image/upload/v1710170954/sci-resources/xolotl2_sa2u9c.png", "https://res.cloudinary.com/dfrjfuchi/image/upload/v1710170943/sci-resources/xolotl1_zv8oxh.png"]; 

    const goPrevious = () => {
        const isFirstPhoto = currentIndex === 0;
        const newIndex = isFirstPhoto ? photos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goNext = () => {
        const isLastPhoto = currentIndex === photos.length - 1;
        const newIndex = isLastPhoto ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel-container">
            <div className="arrow-button left" onClick={goPrevious}>
                <span className="material-icons">chevron_left</span>
            </div>
            <div className="carousel-photo">
                <img src={photos[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <div className="arrow-button right" onClick={goNext}>
                <span className="material-icons">chevron_right</span>
            </div>
        </div>
    );
}

function Xolotl() {
    return (
        <div className="p-container">
            <Navbar/>
            <div className="xolotl-main-content">
                <img src={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169887/sci-resources/xolotlLogo_sw9dma.png"} alt="Xólotl Logo" className="xolotl-logo"/>
                <div className="xolotl-description">
                    <p><strong>Imagínate un proyecto que despierte la curiosidad,</strong> fomente el aprendizaje práctico y promueva la conservación del medio ambiente, todo al mismo tiempo. <strong>El Proyecto Xólotl</strong> es una iniciativa innovadora de la Academia de Ciencias del ITJ-ZE que te invita a adentrarte en el fascinante mundo de una especie única: el ajolote.</p>
                    <p>Con un enfoque multidisciplinario, este proyecto promete llevarte más allá de las aulas tradicionales y sumergirte en un viaje de descubrimiento científico, cultural y ambiental. <strong>¿Estás listo para embarcarte en esta emocionante aventura?</strong></p>
                </div>
                <div className="xolotl-footer">
                <CarouselXolotl /> 
            </div>
            </div>
        </div>
    );
}


export default Xolotl;