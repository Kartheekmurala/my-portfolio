import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { certifications } from "../data/certifications";
import { positions } from "../data/positions";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaCode, FaLaptopCode } from "react-icons/fa";

export default function Portfolio() {
  const cardStyle = "bg-white rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-gray-300";

  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 min-h-screen flex flex-col items-center text-center px-6 bg-gradient-to-b from-indigo-50 via-white to-white">
        <img 
          src="/profile.jpg" 
          alt="Profile" 
          className="w-43 h-44 rounded-full shadow-2xl border-4 border-white mb-6 object-cover" 
        />
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-2">{profile.name}</h1>
        <p className="text-2xl text-indigo-500 mb-4">{profile.title}</p>
        <p className="max-w-3xl text-gray-700 mb-6">{profile.summary}</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a 
            href="/Resume.pdf" 
            download 
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-7 py-3 rounded-xl shadow-md transform hover:scale-105 transition duration-300 font-semibold"
          >
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-7 py-3 rounded-xl shadow-md transform hover:scale-105 transition duration-300 font-semibold"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-10 tracking-wide">About Me</h2>
        <div className={cardStyle + " space-y-6"}>
          <p className="text-lg text-gray-700 leading-relaxed">{profile.summary}</p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-10 tracking-wide">Education</h2>
        <div className={cardStyle}>
          <p className="text-gray-700 text-lg">{profile.education}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-10 tracking-wide">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {profile.skills.map((skill, i) => (
            <div key={i} className={`${cardStyle} flex items-center gap-2 px-5 py-3 text-sm font-semibold cursor-pointer`}>
              <FaLaptopCode className="text-gray-600" />
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12 tracking-wide text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <div key={i} className={cardStyle}>
              <h3 className="text-xl font-semibold text-indigo-600">{proj.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{proj.duration}</p>
              <p className="mt-3 text-gray-700">{proj.desc}</p>
              <p className="mt-4 text-sm text-indigo-600 font-medium">{proj.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12 text-center tracking-wide">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((exp, i) => (
            <div key={i} className={cardStyle}>
              <h3 className="text-lg font-semibold text-indigo-600">{exp.title}</h3>
              <p className="text-sm text-gray-500">{exp.duration} | {exp.issuer}</p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12 tracking-wide">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, i) => (
            <div key={i} className={cardStyle + " w-64"}>
              <h3 className="text-lg font-semibold text-indigo-600">{cert.title}</h3>
              <p className="text-gray-600 mt-2">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Positions Section */}
      <section id="positions" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12 text-center tracking-wide">Positions of Responsibility</h2>
        <ul className="space-y-6">
          {positions.map((pos, i) => (
            <li key={i} className={cardStyle}>
              <h3 className="text-lg font-semibold text-indigo-600">{pos.title}</h3>
              <p className="text-gray-700 mt-2">{pos.details}</p>
            </li>
          ))}
        </ul>
      </section>

     
      <Footer />
    </div>
  );
}
