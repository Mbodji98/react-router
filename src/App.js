import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import NotFound from "./Components/NotFound/NotFound";
import NavBar from "./Components/NavBar/NavBar";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Development from "./Components/Service/Development/Development";
import CyberSecurity from "./Components/Service/CyberSecurity/CyberSecurity";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />}>
          <Route path="/services/developpement" element={<Development/>} />
          <Route path="/services/cybersecurite" element={<CyberSecurity/>} />
        </Route>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
