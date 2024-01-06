import React from "react";
import { Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About_us } from "./pages/About_us";
import { Find_doctor } from "./pages/Find_doctor";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";

const navLinks = [
  {
    path: "Home",
    display: <Home />,
  },
  {
    path: "About_us",
    display: <About_us />,
  },
  {
    path: "Find_doctor",
    display: <Find_doctor />,
  },
  {
    path: "Contact",
    display: <Contact />,
  },
  {
    path: "Login",
    display: <Login />,
  },
];
export const NavBar = () => {
  return (
    <>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-blue-400 font-bold">
                <strong>Doctor</strong> Appointment
              </h1>
              <img
                src="https://i.ibb.co/714F2qr/photo-2024-01-04-16-02-50.jpg"
                alt="Logo Image"
                className="mt-2 h-20 w-20 rounded-full"
              />
            </div>
            <div className="navigations">
              <ul className="flex items-center gap-10">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white hover:text-blue-400 font-medium"
                    >
                      {link.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
