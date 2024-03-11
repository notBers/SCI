import { useState } from 'react';
import { Navbar } from './subcomponents/Hpcomponents.js'; 
import xolotlLogo from '../resources/xolotlLogo.png'; 
import "../stylesheets/cstyles/Xolotl.css";
import xolotl1 from '../resources/xolotl1.jpg'; 
import xolotl2 from '../resources/xolotl2.jpg'; 
import xolotl3 from '../resources/xolotl3.jpg'; 

function CarouselXolotl() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const photos = [xolotl3, xolotl1, xolotl2]; 

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
                <img src={xolotlLogo} alt="Xólotl Logo" className="xolotl-logo"/>
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