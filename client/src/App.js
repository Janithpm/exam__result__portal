import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Students from './components/Students'
import Teachers from './components/Teachers'
import AdministrationStaff from './components/AdministrationStaff'
import Exams from './components/Exams'
import Results from './components/Results'
import Help from './components/Help'

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/students" element={<Students/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="/administration" element={<AdministrationStaff/>}/>
            <Route path="/exams" element={<Exams/>}/>
            <Route path="/results" element={<Results/>}/>
            <Route path="/help" element={<Help/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
