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
import ServiceDetail from "./pages/ServiceDetail";
import HomeReview from "./pages/inc/HomeReview";
import { eevent, events } from "./components/Trainer";
import Doctor from "./inc/Doctor";
import Yoga_type from "./inc/Yoga_type";

export default function App() {
  const eventsId1 = eevent.flatMap((category) =>
    category.eventData.filter((event) => event.id === 1)
  );

  const eventsId2 = eevent.flatMap((category) =>
    category.eventData.filter((event) => event.id === 2)
  );
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />

          {eevent.map((v, i) => (
            <Route key={v.id} path={`/service/${v.id}`} element={<Online_Offline />} />
          ))}

          {eevent.map((v) =>
            v.eventData.map((c) => (
              <Route
                key={`${v.id}-${c.slug}`}
                path={`/service/${v.id}${c.slug}`}
                element={<ServiceDetail />}
              />
            ))
          )}
          {eevent.map((v, i) => (
            <Route key={v.id} path={`/service/${v.id}`} element={<Online_Offline />} />
          ))}

          {eevent.map((v, i) => (
            <Route key={v.id} path={`/service/${v.id}`} element={<Yoga_type />} />
          ))}
          <Route path="/service/doctor/:slug" element={<Doctor />} />
          {/* <Route
            path="/service/doctor/serviceDetail/"
            element={<ServiceDetail />}
          /> */}
          <Route path="/traine" element={<Teachers />} />
          <Route path="/about/traine/:id" element={<Teachers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/review" element={<HomeReview />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
