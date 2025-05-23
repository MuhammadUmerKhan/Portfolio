"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Skills = () => {
  const skills = [
    { name: "Machine and Deep Learning 🤖", percentage: 90 },
    { name: "Generative/Agentic AI & Large Language Models (LLMs) 🧠", percentage: 92 },
    { name: "Natural Language Processing (NLP) 🗣️", percentage: 90 },
    { name: "Prompt Engineering & Fine-Tuning 🎭", percentage: 80 },
    { name: "MLOps & Model Deployment (MLflow, FastAPI, Docker) 🚀", percentage: 85 },
    { name: "Computer Vision & Image Processing 📸", percentage: 80 },
    { name: "Cloud Computing & API Development ☁️", percentage: 75 },
  ]

  const certificates = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      image:
        "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Deep%20Learning%20Specialization.png",
    },
    {
      title: "Natural Language Specialization",
      issuer: "Coursera",
      image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/NLP%20specialization.png",
    },
    {
      title: "IBM Machine Learning",
      issuer: "Coursera",
      image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/ML%20Certificate.png",
    },
    {
      title: "Data Science Internship Certificate",
      issuer: "Digital Empowerment Network",
      image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Internship%20Certificate.png",
    },
    {
      title: "Introduction to AWS Sagemaker",
      issuer: "simplilearn",
      image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/intro%20to%20samgemaker.png",
    },
    {
      title: "Prompt Engineering for LLMs",
      issuer: "DeepLearning.AI",
      image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Prompt%20Engineering.png",
    },
  ]

  const skillsControls = useAnimation()
  const certificatesControls = useAnimation()
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: false, initialInView: true })
  const [certificatesRef, certificatesInView] = useInView({ threshold: 0.2, triggerOnce: false })

  // Image loading state
  const [imagesLoaded, setImagesLoaded] = useState({})
  // Expanded certificate state
  const [expandedIndex, setExpandedIndex] = useState(null)

  useEffect(() => {
    // Preload certificate images
    certificates.forEach((certificate, index) => {
      const img = new Image()
      img.src = certificate.image
      img.onload = () => {
        setImagesLoaded((prev) => ({
          ...prev,
          [index]: true,
        }))
      }
    })
  }, [])

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible")
    } else {
      skillsControls.start("hidden")
    }
  }, [skillsControls, skillsInView])

  useEffect(() => {
    if (certificatesInView) {
      certificatesControls.start("visible")
    } else {
      certificatesControls.start("hidden")
    }
  }, [certificatesControls, certificatesInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20, transition: { duration: 0.3 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  const certificateVariants = {
    normal: { scale: 1, zIndex: 1 },
    expanded: { scale: 1.5, zIndex: 50, transition: { duration: 0.3, type: "spring", stiffness: 200, damping: 20 } },
  }

  const handleCertificateClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index) // Toggle expansion
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto text-gray-300 relative p-4 sm:p-6 md:p-8 pt-6 sm:pt-8 md:pt-10 px-4 sm:px-8 md:px-12 lg:px-20">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-5 flex items-center justify-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
              Skills
            </span>
            <span className="ml-2">💻</span>
          </motion.h1>

          {/* Skills section */}
          <motion.div
            ref={skillsRef}
            initial="visible"
            animate={skillsControls}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl mb-5"
          >
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                    <span className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-0">{skill.name}</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-300">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 h-2 sm:h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl mb-5"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
                Technical Skills
              </span>
              <span className="ml-2">⚒</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { name: "Python", emoji: "🐍" },
                { name: "SQL", emoji: "🗄️" },
                { name: "TensorFlow", emoji: "🧠" },
                { name: "PyTorch", emoji: "🔥" },
                { name: "Hugging Face", emoji: "🤗" },
                { name: "LangChain", emoji: "🔗" },
                { name: "FastAPI", emoji: "⚡" },
                { name: "Docker", emoji: "🐳" },
                { name: "AWS", emoji: "☁️" },
                { name: "Power BI", emoji: "📊" },
                { name: "Feature Engineering", emoji: "🏗️" },
                { name: "Streamlit", emoji: "🌐" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-700 bg-opacity-50 p-3 sm:p-4 rounded-lg shadow-md flex items-center space-x-2"
                >
                  <span className="text-xl sm:text-2xl">{skill.emoji}</span>
                  <span className="text-sm sm:text-base text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates section */}
          <motion.div
            ref={certificatesRef}
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl mb-6 sm:mb-8 md:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
                Certificates
              </span>
              <span className="ml-2">🏅</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  className="relative border-2 border-cyan-500 border-opacity-50 rounded-lg overflow-hidden bg-gray-900 bg-opacity-50 cursor-pointer shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  variants={certificateVariants}
                  initial="normal"
                  animate={expandedIndex === index ? "expanded" : "normal"}
                  onClick={() => handleCertificateClick(index)}
                >
                  {!imagesLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className={`w-full h-auto object-cover transition-opacity duration-300 ${imagesLoaded[index] ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => {
                      setImagesLoaded((prev) => ({
                        ...prev,
                        [index]: true,
                      }))
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-900 bg-opacity-40 p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-cyan-400 mx-auto max-w-9xl"
          >
            <p className="text-base sm:text-lg italic text-gray-400 text-center">
              "The best of people are those that bring the most benefit to the rest of mankind." - Prophet Muhammad (ﷺ)
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
