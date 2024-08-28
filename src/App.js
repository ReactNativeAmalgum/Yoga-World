import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./pages/inc/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Teachers from "./pages/Teachers";
import Events from "./pages/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./inc/Footer";
import Online_Offline from "./inc/Online_Offline";
import Doctor from "./inc/Doctor";
import ServiceDetail from "./pages/ServiceDetail";
export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service/offline_online" element={<Online_Offline />} />
          <Route path="/service/doctor" element={<Doctor />} />
          <Route path="/serviceDetail" element={<ServiceDetail />} />

          <Route path="/traine" element={<Teachers />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
