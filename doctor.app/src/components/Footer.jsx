import React from "react";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { useState } from "react";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/About_us",
    display: "About Us",
  },
  // Add more items as needed
];

const recentBlogPosts = [
  {
    title: "Ways Of Improving Our Healthy",
    date: "January 5, 2024",
    url: "/blog/ways-to-improve-healthy",
  },
  {
    title: "Exploring the Benefits of Meditation",
    date: "December 20, 2023",
    url: "/blog/benefits-of-meditation",
  },
  // Add more blog posts as needed
];

const quickLinks03 = [
  // ... (similarly define quickLinks03)
];

// Assuming quickLinks01, quickLinks02, quickLinks03 are defined similarly

export const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState(""); // Adding useState here for demonstration

  const handleSubscription = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail(""); // Clear the email input after subscription
  };

  return (
    <footer className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div>
            <div className="flex items-center mb-8">
              <img
                src="https://i.ibb.co/714F2qr/photo-2024-01-04-16-02-50.jpg"
                alt="Logo Image"
                className="h-20 w-20 rounded-full"
              />
              <h1 className="text-2xl text-blue-400 font-bold pl-5">
                <strong>Efoyta</strong> Doctor
                <br /> Appointment
              </h1>
            </div>
            <p className="text-sm leading-7 text-gray-600">
              &copy; {year} developed by Section 2 group-4 Students. All rights
              reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#1811AE] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="text-sm text-gray-600">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-headingColor">
                Quick Links
              </h2>
              <ul>
                {quickLinks01.map((item, index) => (
                  <li key={index} className="mb-3">
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add more Quick Links sections similarly */}
          </div>

          <div className="text-sm text-gray-600">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-headingColor">
                Recent Blog Posts
              </h2>
              <ul>
                {recentBlogPosts.map((post, index) => (
                  <li key={index} className="mb-3">
                    <Link to={post.url}>
                      <strong>{post.title}</strong>
                    </Link>
                    <p className="text-gray-500 text-xs">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-sm text-gray-600">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-headingColor">
                Support
              </h2>
              <ul>
                {quickLinks03.map((item, index) => (
                  <li key={index} className="mb-3">
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
