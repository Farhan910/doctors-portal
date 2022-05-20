import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Appointment from './Pages/Appointments/Appointment';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import RequireAuth from './Pages/RequireAuth';
import Reviews from './Pages/Reviews';
import SignUp from './Pages/SignUp';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<RequireAuth><Appointment/></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
        <Route index element={<MyAppointments></MyAppointments>} />
        <Route path='review' element={<MyReview></MyReview>} />
        <Route path='history' element={<MyHistory></MyHistory>} />
        <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>} />
        <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>} />
        <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
        <Route path="contacts" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
