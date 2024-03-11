import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/cstyles/Navbar.css";
import "../../stylesheets/cstyles/FSection.css";
import "../../stylesheets/cstyles/DynamicInfo.css";
import itjlogo from "../../resources/itjlogo.png";
import sflogo from "../../resources/sflogo.png";

import photo1 from "../../resources/photo1.jpg";
import photo2 from "../../resources/photo2.jpg";
import photo3 from "../../resources/photo3.jpg";
import photo4 from "../../resources/photo4.jpg";
import photo5 from "../../resources/photo5.jpg";
import photo6 from "../../resources/photo6.jpg";
import photo7 from "../../resources/photo7.jpg";
import photo8 from "../../resources/photo8.jpg";
import photo9 from "../../resources/photo9.jpg";
import photo10 from "../../resources/photo10.jpg";

export function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img className="itjlogo" src={itjlogo} alt="Logo 1" />
                <img className="sflogo" src={sflogo} alt="Logo 2" />
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/pabellones">Pabellones</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/xolotl">Xolotl</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export function FSection(){
    const calculateTimeLeft = () => {
        const countDownDate = new Date("March 20, 2024 07:00:00").getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(timer);
            return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
        }

        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
            expired: false
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    let timer;

    useEffect(() => {
        timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="content-container">
            <div className="event-box">
                <h1>Sci-Fest</h1>
                <Link to="/proyectos" className="event-button">Proyectos</Link>
            </div>
            <div className="countdown-box">
                <div id="countdown">
                    {timeLeft.expired ? (
                        <span>Evento en progreso</span>
                    ) : (
                        <>
                            <div className="time-segment">
                                <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                                <div className="label">Días</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="time-segment">
                                <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                                <div className="label">Horas</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="time-segment">
                                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                                <div className="label">Minutos</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="time-segment">
                                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                                <div className="label">Segundos</div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

function People() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10]; 

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

export function Sci() {
    return (
        <div className="sci-container">
            <h2 className="sci-title">Celebremos juntos a la ciencia y a la tecnología</h2>
            <p className="sci-intro">en el <strong>Festival de Ingeniería, Ciencia y Tecnología</strong> en el Instituto Thomas Jefferson Campus Zona Esmeralda.</p>
            <p><strong>SciFEST</strong> es un evento diseñado para fomentar el pensamiento científico en estudiantes de Primaria, Secundaria y Preparatoria, desarrollando sus habilidades de investigación, de pensamiento y de comunicación.</p>
            <p>El evento se realiza con el fin de promover la participación de jóvenes a través de proyectos científicos y tecnológicos, de investigación, innovación y divulgación.</p>
            <p>En este documento encontrarás todo lo necesario para hacer de ésta, una experiencia única y enriquecedora.</p>
            <p className="last-p">Lee con atención cada punto de esta guía y prepárate para dar lo mejor de ti, recuerda que los mejores proyectos son elegidos por el <strong>Comité Evaluador</strong> para obtener su acreditación para participar en la <strong>ExpoCiencias Estado de México</strong> representando al ITJ-ZE como parte del equipo oficial del instituto.</p>
            <p>Click: <a href="https://docs.google.com/document/d/1kibQBn473mGDyGesek2pauND1AkJMbOF7-E4f-MRghc/edit?usp=drive_link" className="event-button">Guía</a> </p>
        </div>
    );
}

export function DynamicInfo(){

    const [active, setActive] = useState('scifest');

    const handleClick = (button) => {
        setActive(button);
    }

    return (
        <div className="section">
            <div className="dnav">
                <button 
                    className={`nav-button ${active === 'people' ? 'active' : ''}`} 
                    onClick={() => handleClick('people')}>
                    People
                </button>
                <button 
                    className={`nav-button ${active === 'scifest' ? 'active' : ''}`} 
                    onClick={() => handleClick('scifest')}>
                    Sci-fest
                </button>
            </div>
            <div className="info-display">
                {active === 'people' && <People/>}
                {active === 'scifest' && <Sci/>}
            </div>
        </div>
    );
}


