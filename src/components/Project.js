import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from './subcomponents/Hpcomponents';
import "../stylesheets/cstyles/Project.css";

function Project() {
    const { pid } = useParams();
    const [projectDetails, setProjectDetails] = useState(null);
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await fetch(`https://sci-api.onrender.com/api/projects?PID=${pid}`);
                const data = await response.json();
                setProjectDetails(data.data[0].attributes);
                
                const previewResponse = await fetch(`https://sci-api.onrender.com/api/projectpreviews?PID=${pid}`);
                const previewData = await previewResponse.json();
                if (previewData.data.length > 0) {
                    const projectPreviewId = previewData.data[0].id; 

                    const response2 = await fetch(`https://sci-api.onrender.com/api/projectpreviews/${projectPreviewId}`, {
                        method: 'PUT', 
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            data: {
                                Views: previewData.data[0].attributes.Views + 1, 
                            }
                        })
                    });
                }
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };

        const fetchProjectImages = async () => {
            try {
                const response = await fetch(`https://sci-api.onrender.com/api/carousels?PID=${pid}&populate=*`);
                const data = await response.json();
        
                const imageUrls = data.data.flatMap(item =>
                    item.attributes.content.data.map(contentItem => {
                        const imageUrl = contentItem.attributes.formats.small ? contentItem.attributes.formats.small.url : contentItem.attributes.url;
                        return imageUrl;
                    })
                );
        
                setImages(imageUrls);
            } catch (error) {
                console.error("Error fetching project images:", error);
            }
        };

        fetchProjectDetails();
        fetchProjectImages();
    }, [pid]);

    if (!projectDetails) return <div>Loading...</div>; 

    const displayFields = ['Titulo', 'Resumen', 'Planteamiento', 'Antecedentes', 'Objetivo', 'Justificacion', 'Hipotesis', 'Metodo', 'Discusion', 'Conclusiones', 'Bibliografia'];

    const goPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="Gcontainer">
            <Navbar />
            <div className="project-article">
                <h1 className="project-title">{projectDetails.Titulo}</h1>
                {displayFields.slice(1).map(field => (
                    projectDetails[field] && (
                        <div key={field} className="project-section">
                            <h2 className="section-title">{field}</h2>
                            <p className="section-content">{projectDetails[field]}</p>
                        </div>
                    )
                ))}
                <div className="carousel-container">
                    <div className="arrow-button left" onClick={goPrevious}>
                        <span className="material-icons">chevron_left</span>
                    </div>
                    <div className="carousel-photo">
                        {images.length > 0 && (
                            <img src={images[currentIndex]} alt={`Project Image ${currentIndex + 1}`} className="carousel-image"/>
                        )}
                    </div>
                    <div className="arrow-button right" onClick={goNext}>
                        <span className="material-icons">chevron_right</span>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Project;
