import { useState, useEffect } from "react";
import { Filterform, ProjectContainer, Pagination } from "./subcomponents/Projectscomponents";
import { Navbar } from "./subcomponents/Hpcomponents";

export function Projects() {
    const [allProjects, setAllProjects] = useState([]);
    const [filterData, setFilterData] = useState({ filterBy: 'todos' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth <= 768 ? 10 : 20;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const urls = [
                    `https://sci-api.onrender.com/api/projectpreviews?pagination[start]=0&pagination[limit]=100`,
                    `https://sci-api.onrender.com/api/projectpreviews?pagination[start]=100&pagination[limit]=60`
                ];
                const requests = urls.map(url => fetch(url));
                const responses = await Promise.all(requests);
                const dataPromises = responses.map(response => response.json());
                const dataResults = await Promise.all(dataPromises);

                const combinedProjects = [...dataResults[0].data, ...dataResults[1].data].map(item => ({ ...item.attributes, pid: item.attributes.PID }));

                combinedProjects.sort((a, b) => b.Views - a.Views);

                setAllProjects(combinedProjects);
            } catch (error) {
                alert("INTERNAL ERROR, RELOAD PAGE");
            }
        };

        fetchProjects();
    }, []);

    const applyFilters = (projects, filters) => {
        return projects.filter(project => {
            if (filters.filterBy === 'título' && filters.title) {
                return project.Pname.toLowerCase().includes(filters.title.toLowerCase());
            } else if (filters.filterBy === 'área' && filters.area) {
                return project.Area.toLowerCase() === filters.area.toLowerCase();
            } else if (filters.filterBy === 'participantes' && filters.participants) {
                return project.Participants === filters.participants;
            }
            return true; 
        });
    };

    const handleFilterSubmit = (data) => {
        setFilterData(data);
        setCurrentPage(1);
    };

    const filteredProjects = applyFilters(allProjects, filterData);
    const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    return (
        <div className="p-container">
            <Navbar />
            <Filterform onFilterSubmit={handleFilterSubmit} />
            <ProjectContainer projects={paginatedProjects} />
            {totalPages > 1 && (
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            )}
        </div>
    );
}