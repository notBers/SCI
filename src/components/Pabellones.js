import { Navbar } from './subcomponents/Hpcomponents'; 
import "../stylesheets/cstyles/Pabellones.css"

function PavilionSection({ image, children, first }) {
    return (
        <div className={`pavilion-section  ${first == "true" ? "first-section": ""}`}>
            <img src={image} alt="Pavilion" className="pavilion-image" />
            <div className="pavilion-text">{children}</div>
        </div>
    );
}

function Pabellones() {
    return (
        <div className="g-container">
            <Navbar/>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169864/sci-resources/dinosaurios_iztjql.png"} first="true">
                <p><strong>Sumérgete en el mundo prehistórico</strong> y descubre la fascinante historia de los dinosaurios. Explora réplicas a escala, fósiles y exhibiciones interactivas que te transportarán a la era de los gigantes reptiles.</p>
            </PavilionSection>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169869/sci-resources/evolucion_jv1una.png"}>
                <p>Desde los primeros organismos hasta la diversidad de la vida en la Tierra hoy en día, este pabellón te lleva en un <strong>viaje a través del tiempo</strong> para explorar cómo las especies han evolucionado y se han adaptado a su entorno.</p>
            </PavilionSection>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710170661/sci-resources/plantas_mxwhty.png"}>
                <p><strong>Sumérgete en el fascinante mundo</strong> de los seres vivos que producen su propio alimento. Explora cómo las plantas, algas y otras formas de vida autótrofa sustentan los ecosistemas y juegan un papel fundamental en la cadena alimentaria.</p>
            </PavilionSection>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169877/sci-resources/mente_syifwj.png"}>
                <p><strong>Pon a prueba tu mente</strong> y explora los misterios del cerebro en este pabellón interactivo. Descubre juegos mentales, ilusiones ópticas y actividades que desafiarán tus sentidos y te harán reflexionar sobre la complejidad de la mente humana.</p>
            </PavilionSection>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169866/sci-resources/electricidad_ejsmzn.png"}>
                <p><strong>Descubre los secretos de la energía eléctrica</strong> en este pabellón emocionante. Explora circuitos, experimenta con magnetismo y aprende sobre las aplicaciones de la electricidad en la tecnología moderna y la vida cotidiana.</p>
            </PavilionSection>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169865/sci-resources/arquitectura_lzuw4p.png"}>
                <p><strong>Explora el arte y la ciencia</strong> detrás de los edificios y estructuras en este pabellón inspirador. Descubre diferentes estilos arquitectónicos, aprende sobre los materiales de construcción y participa en actividades creativas de diseño y construcción.</p>
            </PavilionSection>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169878/sci-resources/oceano_v7isbk.png"}>
                <p><strong>Sumérgete en las profundidades del océano</strong> y descubre la increíble diversidad de vida marina en este pabellón emocionante. Explora ecosistemas acuáticos, aprende sobre la importancia de la conservación marina y participa en actividades interactivas relacionadas con el mundo submarino.</p>
            </PavilionSection>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710169865/sci-resources/deportes_k7pxrq.png"}>
                <p><strong>Únete a la aventura de vivir una vida saludable y activa</strong> en este pabellón dinámico. Descubre la importancia de la nutrición, el ejercicio y el bienestar emocional a través de actividades interactivas, talleres prácticos y charlas educativas.</p>
            </PavilionSection>
            <PavilionSection image={"https://res.cloudinary.com/dfrjfuchi/image/upload/v1710170604/sci-resources/espacio_k3e7q8.png"}>
                <p><strong>Embárcate en un viaje hacia las estrellas y más allá</strong> en este pabellón que explora los misterios del cosmos. Descubre planetas distantes, galaxias lejanas y los avances más recientes en la exploración espacial a través de exposiciones interactivas, talleres y experiencias inmersivas.</p>
            </PavilionSection>
            
        </div>
    );
}

export default Pabellones;