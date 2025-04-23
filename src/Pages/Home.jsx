"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa"

const TypingAnimation = () => {
  const texts = ["Generative/Agentic AI ", "AI/ML Engineer ", "Computer Vision "]
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [delay, setDelay] = useState(100)

  useEffect(() => {
    const currentText = texts[index]

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1000)
      return
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % texts.length)
    }

    const timer = setTimeout(() => {
      setText(currentText.substring(0, charIndex))
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
      setDelay(isDeleting ? 50 : 100)
    }, delay)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, index, delay])

  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 mt-2 sm:mt-4 mb-4 sm:mb-6 text-center md:text-left tracking-wide"
    >
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="text-cyan-300"
      >
        |
      </motion.span>
    </motion.p>
  )
}

const Home = () => {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = "https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/pic2.png"
    img.onload = () => setProfileImageLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-8 md:py-2 relative overflow-hidden"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        className="relative z-20 mb-8 md:mb-0"
      >
        {/* Animated Gradient Ring */}
        <motion.div
          className="absolute -inset-4 rounded-full z-0"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(13,148,136,0.15) 0%, rgba(34,211,238,0.15) 100%)",
              "linear-gradient(180deg, rgba(13,148,136,0.15) 0%, rgba(34,211,238,0.15) 100%)",
              "linear-gradient(270deg, rgba(13,148,136,0.15) 0%, rgba(34,211,238,0.15) 100%)",
              "linear-gradient(0deg, rgba(13,148,136,0.15) 0%, rgba(34,211,238,0.15) 100%)",
            ],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "linear",
          }}
        />

        {/* Profile Image with Glow */}
      <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-md opacity-70"></div>

        {!profileImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full z-10">
            <div className="w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src="https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/profile1.png"
          alt="Muhammad Umer Khan"
          className={`relative z-10 w-full h-full object-cover transition-all duration-500 transform hover:scale-105 ${
            profileImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setProfileImageLoaded(true)}
        />
      </div>
      </motion.div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-6 lg:ml-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Hi<span className="mx-2">👋</span>, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
            Muhammad Umer
          </span>
        </motion.h1>
        <TypingAnimation />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          className="flex flex-col sm:flex-row gap-4 z-10 mt-6 w-full sm:w-auto"
        >
          <Link
            to="/projects"
            className="w-full sm:w-auto bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-lg sm:text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            View My Projects 🖥️
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-gray-800 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-lg sm:text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center bg-opacity-80 backdrop-blur-sm"
          >
            Get in Touch ✉️
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10 z-20"
        >
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            whileHover={{ scale: 1.3, rotate: 5, color: "rgba(34, 211, 238, 1)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative flex items-center justify-center">
              <FaLinkedin size={28} className="drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-md opacity-0"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/MuhammadUmerKhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            whileHover={{ scale: 1.3, rotate: 5, color: "rgba(34, 211, 238, 1)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative flex items-center justify-center">
              <FaGithub size={28} className="drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-md opacity-0"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/umr.khan.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            whileHover={{ scale: 1.3, rotate: 5, color: "rgba(34, 211, 238, 1)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative flex items-center justify-center">
              <FaInstagram size={28} className="drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-md opacity-0"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/umar.shahid.56211497/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            whileHover={{ scale: 1.3, rotate: 5, color: "rgba(34, 211, 238, 1)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative flex items-center justify-center">
              <FaFacebook size={28} className="drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-md opacity-0"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
