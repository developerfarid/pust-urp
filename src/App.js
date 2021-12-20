import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from "./Pages/About/About";
import Admin from "./Pages/Admin/Admin";
import Bcs from "./Pages/Bcs/Bcs";
import Contact from './Pages/Contact/Contact';
import DetialsPage from "./Pages/DetialsPage/DetialsPage";
import Higher from './Pages/Higher/Higher';

import Home from './Pages/Home/Home/Home';
import Semester11 from "./Pages/Home/Year/Semester11";
import Login from "./Pages/Login/Login";
import AppBer1 from './Share/AppBer1';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBer1 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/higherStudy' element={<Higher />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bcs' element={<Bcs />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/semesterData/:id' element={<Semester11 />} />
          <Route path='home/semesterData/:id' element={<Semester11 />} />
          <Route path='/semesterData/:id/data/:idd' element={<DetialsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
