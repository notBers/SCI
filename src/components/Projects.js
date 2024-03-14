import { useState, useEffect } from "react";
import { Filterform, ProjectContainer, Pagination } from "./subcomponents/Projectscomponents";
import { Navbar } from "./subcomponents/Hpcomponents";

export function Projects() {
    const [allProjects, setAllProjects] = useState([]); 
    const [filterData, setFilterData] = useState({ filterBy: 'todos' });
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProjects, setFilteredProjects] = useState([]); 
    const [displayProjects, setDisplayProjects] = useState([]); 
    const itemsPerPage = window.innerWidth <= 768 ? 10 : 20;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://sci-api.onrender.com/api/projectpreviews?pagination[start]=0&pagination[limit]=150");
                const content = await response.json();
                const projects = content.data.map(item => ({...item.attributes, pid: item.attributes.PID }));
                setAllProjects(projects);
                setFilteredProjects(projects);
                setDisplayProjects(projects.slice(0, itemsPerPage)); 
            } catch (error) {
                alert("INTERNAL ERROR, RELOAD PAGE");
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        setDisplayProjects(filteredProjects.slice(startIndex, startIndex + itemsPerPage));
    }, [currentPage, filteredProjects]);

    const handleFilterSubmit = (data) => {
        setFilterData(data);
        setCurrentPage(1); 

        let tempFilteredProjects = [...allProjects]; 

        if (data.filterBy === 'título' && data.title) {
            tempFilteredProjects = tempFilteredProjects.filter(project =>
                project.Pname.toLowerCase().includes(data.title.toLowerCase())
            );
        } else if (data.filterBy === 'área' && data.area) {
            tempFilteredProjects = tempFilteredProjects.filter(project =>
                project.Area.toLowerCase() === data.area.toLowerCase()
            );
        } else if (data.filterBy === 'participantes' && data.participants) {
            tempFilteredProjects = tempFilteredProjects.filter(project =>
                project.Participants.toLowerCase().includes(data.participants.toLowerCase())
            );
        }

        setFilteredProjects(tempFilteredProjects); 
    };

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage); 

    return (
        <div className="p-container">
            <Navbar />
            <Filterform onFilterSubmit={handleFilterSubmit} />
            <ProjectContainer projects={displayProjects} />
            {totalPages > 1 && (
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            )}
        </div>
    );
}