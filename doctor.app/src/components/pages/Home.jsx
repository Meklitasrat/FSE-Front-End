import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-cover"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?medical')",
        }}
      >
        <Link to="/Signup">
          <button className="bg-blue-500 p-5 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};
