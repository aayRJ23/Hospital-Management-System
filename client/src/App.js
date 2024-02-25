import "bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import UserAuth from './components/UserAuth';
import AdminAuth from './components/AdminAuth';
import DoctorAuth from './components/DoctorAuth';
import ContactUsAuth from "./components/ContactUsAuth";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/userauth' element={<UserAuth/>}></Route>
          <Route path='/adminauth' element={<AdminAuth/>}></Route>
          <Route path='/doctorauth' element={<DoctorAuth/>}></Route>
          <Route path='/contactus' element={<ContactUsAuth/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
