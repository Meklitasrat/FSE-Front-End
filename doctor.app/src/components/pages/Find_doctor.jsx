import React from "react";
import { Link } from "react-router-dom";

export const Find_doctor = () => {
  const doctors = [
    {
      image: "https://ibb.co/gr74djw",
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna et pharetra aliquet.",
    },
    {
      image: "https://example.com/doctor2.jpg",
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Pediatrician",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna et pharetra aliquet.",
    },
    {
      image: "https://example.com/doctor3.jpg",
      id: 3,
      name: "Dr. Michael Johnson",
      specialty: "Dermatologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna et pharetra aliquet.",
    },
    {
      image: "https://example.com/doctor4.jpg",
      id: 4,
      name: "Dr. Emily Williams",
      specialty: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna et pharetra aliquet.",
    },
  ];

  const handleGetAppointment = (doctorId) => {
    console.log(`Appointment booked with doctor ID: ${doctorId}`);
  };

  const handleSignUp = () => {
    console.log("Redirecting to sign-up page");
  };

  return (
    <div
      className="bg-gray-100 py-10"
      style={{
        backgroundImage: `url("https://example.com/medical-background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Find a Doctor</h1>

        {/* Doctors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-6 rounded-md shadow-md">
              <img
                src={doctor.image}
                alt={`Dr. ${doctor.name}`}
                className="w-full mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-700 mb-4">{doctor.specialty}</p>
              <p className="text-gray-800 mb-4">{doctor.description}</p>
              <Link to="/Get_appointment">
                <button
                  onClick={() => handleGetAppointment(doctor.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mr-2"
                >
                  Get Appointment
                </button>
              </Link>
              <Link to="/Signup">
                <button
                  onClick={handleSignUp}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Sign up
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
