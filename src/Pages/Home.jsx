import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const TypingAnimation = () => {
  const texts = [
    "Generative AI ",
    "AI/ML Engineer ",
    "Computer Vision ",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [delay, setDelay] = useState(100);

  useEffect(() => {
    const currentText = texts[index];

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timer = setTimeout(() => {
      setText(currentText.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      setDelay(isDeleting ? 50 : 100);
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, delay]);

  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
      className="text-4xl sm:text-4xl font-semibold text-transparent 
      bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 
      mt-4 mb-6 text-center tracking-wide"
    >
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-gray-300"
      >
        |
      </motion.span>
    </motion.p>
  );
};


const Home = () => {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/pic2.png";
    img.onload = () => setProfileImageLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 sm:p-8 md:p-12 pt-20 relative overflow-hidden"
    >
      {/* Left Section - Profile Picture */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-600 ring-opacity-50 z-10"
      >
        {!profileImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 rounded-full">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src="https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/pic2.png"
          alt="Muhammad Umer Khan"
          className={`w-full h-full object-cover transition-all duration-500 transform hover:scale-105 ${
            profileImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setProfileImageLoaded(true)}
        />
      </motion.div>

      {/* Right Section - Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-12 mt-6 md:mt-0">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="text-5xl sm:text-6xl font-extrabold text-white"
        >
          Hi<span className="mx-2">👋</span>, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500">Muhammad Umer</span>
        </motion.h1>
        {/* Typing Animation */}
        <TypingAnimation />

        {/* Buttons */}
        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          className="flex flex-col sm:flex-row gap-4 z-10 mt-6"
        >
          <Link
            to="/projects"
            className="bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500 text-white py-3 px-8 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View My Projects 🖥️
          </Link>
          <Link
            to="/contact"
            className="bg-gray-700 text-white py-3 px-8 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get in Touch ✉️
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="flex justify-center md:justify-start space-x-4 sm:space-x-8 mt-8 sm:mt-8 z-10"
        >
          {[
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/muhammad-umer-khan-61729b260/",
              color: "text-blue-400",
            },
            {
              icon: FaGithub,
              href: "https://github.com/MuhammadUmerKhan",
              color: "text-gray-400",
            },
            {
              icon: FaInstagram,
              href: "https://www.instagram.com/umr.khan.0/",
              color: "text-pink-400",
            },
            {
              icon: FaFacebook,
              href: "https://www.facebook.com/umar.shahid.56211497",
              color: "text-blue-500",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} hover:text-white transition duration-300`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={35} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
