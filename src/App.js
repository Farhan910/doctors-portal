import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Appointment from './Pages/Appointment';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Reviews from './Pages/Reviews';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
