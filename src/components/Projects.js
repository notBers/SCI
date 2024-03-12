import { useState, useEffect } from "react";
import { Filterform, ProjectContainer, Pagination } from "./subcomponents/Projectscomponents";
import { Navbar } from "./subcomponents/Hpcomponents";

export function Projects() {
    const [allProjects, setAllProjects] = useState([]); 
    const [filterData, setFilterData] = useState({ filterBy: 'todos' });
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState([]);
    const itemsPerPage = window.innerWidth <= 768 ? 10 : 20;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://sci-api.onrender.com/api/projectpreviews?pagination[start]=0&pagination[limit]=100");
                const content = await response.json();
                const projects = content.data.map(item => ({...item.attributes, pid: item.attributes.PID }));
                setAllProjects(projects); 
                setResults(projects); 
            } catch (error) {
                alert("INTERNAL ERROR, RELOAD PAGE");
            }
        };

        fetchData();
    }, []);

    const handleFilterSubmit = (data) => {
        setFilterData(data);
        setCurrentPage(1); 

        let filteredProjects = [...allProjects]; 

        if (data.filterBy === 'título' && data.title) {
            filteredProjects = filteredProjects.filter(project =>
                project.Pname.toLowerCase().includes(data.title.toLowerCase())
            );
        } else if (data.filterBy === 'área' && data.area) {
            filteredProjects = filteredProjects.filter(project =>
                project.Area.toLowerCase() === data.area.toLowerCase()
            );
        } else if (data.filterBy === 'participantes' && data.participants) {
            filteredProjects = filteredProjects.filter(project =>
                project.Participants.toLowerCase().includes(data.participants.toLowerCase())
            );
        }

        setResults(filteredProjects); 
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        const startIndex = (newPage - 1) * itemsPerPage;
        setResults(allProjects.slice(startIndex, startIndex + itemsPerPage));
    };

    const totalPages = Math.ceil(allProjects.length / itemsPerPage);

    return (
        <div className="p-container">
            <Navbar />
            <Filterform onFilterSubmit={handleFilterSubmit} />
            <ProjectContainer projects={results} />
            {totalPages > 1 && (
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            )}
        </div>
    );
}