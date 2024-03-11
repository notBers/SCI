import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Pabellones from './Pabellones';
import { Projects } from './Projects';
import Project from './Project';
import Xolotl from './Xolotl';
import '../stylesheets/App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/proyectos" element={<Projects/>}/>
      <Route path="/proyectos/:id" element={<Project/>}/>
      <Route path="/pabellones" element={<Pabellones/>}/>
      <Route path="/xolotl" element={<Xolotl/>}/>
    </Routes>
  );
}

export default App;
