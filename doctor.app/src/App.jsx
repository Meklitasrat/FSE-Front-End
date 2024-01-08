import React from "react";
import "./app.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { About_us } from "./components/pages/About_us";
import { Find_doctor } from "./components/pages/Find_doctor";
import { Login } from "./components/pages/Login";
import { Signup } from "./components/pages/Signup";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/pages/Contact";
import { Get_appointment } from "./components/pages/Get_appointment";

const App = () => (
  <>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/Find_doctor" element={<Find_doctor />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Get_appointment" element={<Get_appointment />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
