import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Footer() {
  const iconStyle = "p-3 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-105";

  return (
    <footer id ="contact"className="bg-indigo-50 text-gray-800 py-10 font-sans">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <p className="text-lg font-semibold">Connect with me</p>
        <div className="flex justify-center gap-6 text-2xl flex-wrap">
          <a href={`mailto:${profile.contact[0].url}`} className={iconStyle}><FaEnvelope /></a>
          <a href={`tel:${profile.contact[1].url}`} className={iconStyle}><FaPhone /></a>
          <a href={profile.contact[2].url} target="_blank" rel="noopener noreferrer" className={iconStyle}><FaGithub /></a>
          <a href={profile.contact[3].url} target="_blank" rel="noopener noreferrer" className={iconStyle}><FaLinkedin /></a>
          <a href={profile.contact[4].url} target="_blank" rel="noopener noreferrer" className={iconStyle}><FaCode /></a>
        </div>
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Murala Leela Kartheek. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
