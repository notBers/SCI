import { Navbar } from './subcomponents/Hpcomponents'; 
import {useState} from "react"
import '../stylesheets/cstyles/Horarios.css'

let schedule_data = {
    "grupo1": {
        "team_numbers": [
            1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
            20, 22, 23, 25, 27, 29, 30, 32, 34, 36, 38,
            40, 42, 44, 46, 48, 50, 53, 55, 57, 59,
            63, 66, 67, 70, 72, 74, 76, 78, 81, 82, 83,
            90, 92, 94, 96, 98, 101, 102, 104, 105, 106, 107,
            114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
            126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139,
            140
        ],
        "times": "07:10 - 08:40 (MIDDLE/HIGH), 07:45 - 10:30 (KINDER/ELEMENTARY)"
    },
    "grupo2": {
        "team_numbers": [
            2, 4, 6, 8, 10, 12, 14, 16, 18,
            21, 24, 26, 28, 31, 33, 35, 37, 39,
            41, 43, 45, 47, 49, 51, 52, 54, 58, 60,
            61, 62, 64, 65, 68, 69, 71, 73, 75, 77, 79,
            80, 84, 85, 86, 87, 88, 89, 92, 93, 94, 95, 96, 98,
            100, 108, 109, 110, 111, 112, 113
        ],
        "times": "11:00 - 12:30 (MIDDLE/HIGH)"
    }
}

function HorariosSection() {
    const [teamNumber, setTeamNumber] = useState('');
    const [teamInfo, setTeamInfo] = useState(null);

    const findTeamSchedule = () => {
        let foundSchedule = null;
        Object.entries(schedule_data).forEach(([group, info]) => {
            if (info.team_numbers.includes(parseInt(teamNumber))) {
                foundSchedule = { group, ...info };
            }
        });
        return foundSchedule;
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const schedule = findTeamSchedule();
        if (schedule) {
            setTeamInfo(schedule);
        } else {
            setTeamInfo("No se encontró el horario para tu equipo. Verifica el número ingresado.");
        }
    };

    return (
        <div className="horarios-container">
            <Navbar />
            <div className="search-area">
                <div className="search-container">
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="number"
                            placeholder="Ingresa el número de tu equipo"
                            value={teamNumber}
                            onChange={(e) => setTeamNumber(e.target.value)}
                            className="search-input"
                        />
                        <button type="submit" className="search-button">Buscar</button>
                    </form>
                </div>
            </div>
            <div className="results-container">
                {teamInfo ? (
                    typeof teamInfo === 'string' ? (
                        <p className="not-found">{teamInfo}</p>
                    ) : (
                        <div className="team-info">
                            <p>Gracias por ser parte de esta celebración de la ciencia y la tecnología. Estamos encantados de tener al equipo número <strong>{teamNumber}</strong> en el <strong>{teamInfo.group}</strong>.</p>
                            <p>Tu presentación está programada para el horario <strong>{teamInfo.times}</strong>. Es tu momento para brillar, para mostrar tu pasión y tu conocimiento.</p>
                            <p>¡Mucho éxito, y que disfruten del ITJ-ZE SCIFEST 2024!</p>
                        </div>
                    )
                ) : (
                    <div className="initial-message">
                        <p>Encuentra aquí los horarios y grupos asignados para tu equipo en el ITJ-ZE SCIFEST 2024. Simplemente ingresa el número de tu equipo en el campo de búsqueda y descubre cuándo es tu turno para presentar.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HorariosSection;