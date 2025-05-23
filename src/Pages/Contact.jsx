"use client"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 pt-0"
    >
      <div className="max-w-5xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 flex items-center justify-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
            Contact Me
          </span>
          <span className="ml-2">📬</span>
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 bg-opacity-30 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl mb-6 sm:mb-8"
        >
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaMapMarkerAlt className="text-cyan-400 text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0" />
              <p className="text-base sm:text-lg text-gray-300">Karachi, Pakistan</p>
            </motion.div>
            <motion.div
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaPhoneAlt className="text-cyan-400 text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0" />
              <p className="text-base sm:text-lg text-gray-300">+92 3432187868</p>
            </motion.div>
            <motion.div
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaEnvelope className="text-cyan-400 text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0" />
              <p className="text-base sm:text-lg text-gray-300 break-all">muhammadumerk546@gmail.com</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="mr-2 text-white" />
            Connect on LinkedIn 🔗
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact