import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from '../src/hooks/useAuth.js'; // Import du hook
import Home from "../pages/Home.jsx";
import Jouer from "../pages/Jouer.jsx";
import Login from "../pages/Login.jsx";
import Contact from "../pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  const isAuthenticated = useAuth();  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jouer" element={<Jouer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
           
           <Route
          path="/admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

