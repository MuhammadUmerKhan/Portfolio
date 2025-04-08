import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center p-8 pt-24 text-center" // Added pt-24 for top padding
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 20 }}
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 mb-6 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10"
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 20 }}
        className="text-xl text-gray-300 mb-8 z-10"
      >
        Oops! The page you are looking for does not exist.
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120, damping: 20 }}
        className="z-10"
      >
        <Link
          to="/"
          className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] hover:scale-105 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;

