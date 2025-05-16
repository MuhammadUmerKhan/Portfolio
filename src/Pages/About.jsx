"use client"
import { motion } from "framer-motion"
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
              About Me
            </span>
            <span className="ml-2">🎓</span>
          </motion.h1>

          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-30 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl mb-5"
          >
            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-8">
              <motion.img
                src="https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/profile1.png"
                alt="Muhammad Umer Khan"
                className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-4 md:mb-0 md:mr-6 lg:mr-8 ring-4 ring-cyan-500 ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <div className="md:ml-2">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-center md:text-left text-white">
                  🧑 Profile
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 text-center md:text-left">
                  Hi, I'm <span className="font-semibold text-gray-200">Muhammad Umer Khan</span>, an aspiring{" "}
                  <span className="font-semibold text-gray-200">AI Engineer</span> with a passion for developing
                  intelligent systems that transform data into meaningful insights. Currently pursuing a{" "}
                  <span className="font-semibold text-gray-200">B.Sc. in Computer Science</span>, I specialize in
                  building end-to-end AI solutions that bridge the gap between research and real-world applications.
                </p>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 text-center md:text-left">
                  My expertise includes <span className="font-semibold text-gray-200">Machine Learning</span>,{" "}
                  <span className="font-semibold text-gray-200">Deep Learning</span>, and{" "}
                  <span className="font-semibold text-gray-200">Natural Language Processing (NLP)</span>. With
                  proficiency in <span className="font-semibold text-gray-200">Python</span>,{" "}
                  <span className="font-semibold text-gray-200">SQL</span>, and advanced AI frameworks, I am dedicated
                  to designing scalable, efficient, and impactful AI-driven solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl mb-8 sm:mb-10 md:mb-12 relative"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 flex items-center justify-center relative z-10 shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
                Education
              </span>
              <span className="ml-2">🎓</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  degree: "Higher Secondary School Certificate (HSSC)",
                  year: "2021 - 2023",
                  institution: "Government College for Men",
                  grade: "First Class with Distinction",
                },
                {
                  degree: "B.Sc. in Computer Science",
                  year: "2023 - Present",
                  institution: "Sindh Madressatul Islam University",
                  grade: "First Class with Distinction",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-700 bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.year}</p>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-300">Grade: {edu.grade}</p>
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
              "He who has no vision of eternity has no hold on time." – Ibn al-Arabi
            </p>
          </motion.div>

          <div className="my-6 sm:my-8 md:my-10"></div>

          {/* Get In Touch section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center text-white">📬 Get In Touch</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1zLrUsToRYLRw6mCR-ljEejzWJPXaSI8a"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center mb-3 sm:mb-0"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaDownload className="mr-2 text-white" /> Resume
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-800 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center bg-opacity-80 backdrop-blur-sm mb-3 sm:mb-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaLinkedin className="mr-2 text-white" /> LinkedIn 🔗
              </motion.a>
              <motion.a
                href="https://github.com/MuhammadUmerKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-800 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center bg-opacity-80 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaGithub className="mr-2 text-white" /> GitHub 🖥️
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
