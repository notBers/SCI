import React, { useState } from 'react';
import "../../stylesheets/cstyles/Pform.css"
import "../../stylesheets/cstyles/ProjectContainer.css"
import "../../stylesheets/cstyles/ProjectSquare.css"
import "../../stylesheets/cstyles/Pagination.css"
import { Link } from 'react-router-dom';

export function Filterform({ onFilterSubmit }) {
    const [filterBy, setFilterBy] = useState('todos');
    const [title, setTitle] = useState('');
    const [area, setArea] = useState('');
    const [participants, setParticipants] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const filterData = {
            filterBy,
            title: filterBy === 'título' ? title : '',
            area: filterBy === 'área' ? area : '',
            participants: filterBy === 'participantes' ? participants : '',
        };
        onFilterSubmit(filterData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <select className="form-select" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                    <option value="todos">Todos</option>
                    <option value="título">Título</option>
                    <option value="área">Área</option>
                    <option value="participantes">Número de equipo</option>
                </select>

                {filterBy === 'título' && (
                    <input
                        type="text"
                        placeholder="Ingrese el título"
                        className="form-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                )}

                {filterBy === 'área' && (
                    <select className="form-select" value={area} onChange={(e) => setArea(e.target.value)}>
                        <option value="agropecuarias-y-de-alimentos">Agropecuarias y de alimentos</option>
                        <option value="ciencias-de-la-ingenieria">Ciencias de la Ingeniería</option>
                        <option value="ciencias-de-los-materiales">Ciencias de los Materiales</option>
                        <option value="divulgacion-cientifica">Divulgación Científica</option>
                        <option value="exactas-y-naturales">Exactas y Naturales</option>
                        <option value="sociales-y-humanidades">Sociales y Humanidades</option>
                        <option value="biologia">Biología</option>
                        <option value="medio-ambiente">Medio Ambiente</option>
                        <option value="computacion-y-software">Computación y Software</option>
                        <option value="medicina-y-salud">Medicina y Salud</option>
                        <option value="mecatronica">Mecatrónica</option>
                    </select>
                )}

                {filterBy === 'participantes' && (
                    <input
                    type="text"
                    placeholder="Ingrese número de equipo"
                    className="form-input"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                />
                )}

                <button type="submit" className="form-submit">Buscar</button>
            </form>
        </div>
    );
}

export function ProjectSquare({ project }) {
    const icons = {
        Pname: "title",
        Participants: "group",
        Area: "category",
        Views: "visibility"
    };

    const renderParameterRow = (parameter, value, icon) => {
        return (
            <div className="project-parameter-row" key={parameter}>
                <span className="material-icons">{icon}</span>
                <span>{value}</span>
            </div>
        );
    };

    return (
        <Link to={`${project.pid}`} className="project-square-link">
            <div className="project-square">
                {renderParameterRow("Title", project.Pname, icons.Pname)}
                {renderParameterRow("Participants", project.Participants, icons.Participants)}
                {renderParameterRow("Area", project.Area, icons.Area)}
                {renderParameterRow("Views", project.Views, icons.Views)}
            </div>
        </Link>
    );
}

export function ProjectContainer({ projects }) {
    return (
        <div className="project-container">
            {projects.map((project) => (
                <ProjectSquare key={project.id} project={project} />
            ))}
        </div>
    );
}

export function Pagination({ totalPages, currentPage, onPageChange }) {
    return (
        <div className="pagination-buttons">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    disabled={currentPage === index + 1}
                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

