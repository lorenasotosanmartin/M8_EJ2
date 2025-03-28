import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoutes';
import { AuthProvider } from './Context/AuthContext';
import Home from './views/Home';
import Login from './views/login';
import Contact from './views/Contact';
import Services from './views/Services'
import RegisterAppointment from './views/RegisterAppointment'
import AppointmentDoctor from './views/AppointmentDoctor'
import Appointment from './views/Appointment';



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />

          <Route path="/register-appointment" element={
            <ProtectedRoute role={['administrador']}>
              <RegisterAppointment />
            </ProtectedRoute>} />

          <Route path="/appointment-doctor" element={
            <ProtectedRoute role={['doctor']}>
              <AppointmentDoctor />
            </ProtectedRoute>} />

          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/appointment' element={<Appointment />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;