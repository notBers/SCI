import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/cstyles/Navbar.css";
import "../../stylesheets/cstyles/FSection.css";
import "../../stylesheets/cstyles/DynamicInfo.css";

export function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img className="itjlogo" src={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169880/sci-resources/itjlogo_kjbt5a.png"} alt="Logo 1" />
                <img className="sflogo" src={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710172508/sci-resources/sflogo_q6gzvf.png"} alt="Logo 2" />
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
    const photos = ["https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169925/sci-resources/photo1_wibe95.jpg", "https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169924/sci-resources/photo3_ltn7px.jpg", "https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169923/sci-resources/photo2_imzlao.jpg", "https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169879/sci-resources/photo10_uy4gla.jpg"]; 

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


