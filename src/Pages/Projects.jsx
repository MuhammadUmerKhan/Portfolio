import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiToolsFill } from "react-icons/ri";

const Projects = () => {
  const projectData = [
    {
      title: "Customer Churn Prediction with NLP Insights 📉",
      description: "A predictive model to identify customers at risk of churning by leveraging insights from customer feedback and interactions. Using NLP techniques, this project analyzes sentiment and extracts key themes to enhance predictive accuracy and provide actionable insights for reducing churn rates. Deployed with Streamlit for easy access to predictions and insights.",
      imageUrl: "https://www.voxco.com/wp-content/uploads/2021/09/Everything-you-need-to-know-about-Customer-Churn1.jpg",
      link: "https://customer-churn-prediction-with-nlp-insights-rlazeungatswsd5e4c.streamlit.app/"
    },
    {
      title: "NLP-Powered Recommendation System 📚",
      description: "Developed a recommendation system that helps users discover relevant learning resources in Earth Systems, Climate Science, and Environmental Engineering. Using advanced natural language processing and collaborative filtering techniques, it analyzes course metadata and user preferences to deliver personalized suggestions. This comprehensive solution integrates multiple recommendation methods for an enhanced learning experience.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*rTZvrFD258ZZwvGy7nyqDw.jpeg",
      link: "https://nlp-powered-recommendation-system.streamlit.app/"
    },
    {
      title: "ARIMA Time Series Forecasting 📈",
      description: "This project leverages the power of Streamlit to create an interactive web application for time series analysis. Users can easily upload their data, visualize trends, test for stationarity, and fit ARIMA models. The app offers valuable insights into time series data and facilitates accurate forecasting, making it a powerful tool.",
      imageUrl: "https://dataaspirant.com/wp-content/uploads/2023/09/1-14.png",
      link: "https://yahoo-stock-arima-time-series-forecasting.streamlit.app/"
    },
    {
      title: " Loan Approval Prediction System 💳",
      description: "The Loan Approval Prediction System is an end-to-end machine learning project that predicts the approval status of loan applications. This project highlights expertise in data preprocessing, exploratory data analysis (EDA), feature engineering, and model building with an Artificial Neural Network (ANN). It includes an interactive Streamlit application that enables users to input loan details and receive real-time predictions.",
      imageUrl: "https://lendingplate.com/blog/wp-content/uploads/2023/08/Instant-Loan-Approval.png",
      link: "https://customer-loan-approval.streamlit.app/"
    }
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleProjects = showMore ? projectData : projectData.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 pt-20 flex flex-col items-center"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-extrabold text-center mb-12 flex items-center justify-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          My Projects
        </span>
        <span className="ml-2">🛠️</span>
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-30 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 " // backdrop-blur-md
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-center">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-2 px-6 rounded-full shadow-md font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project 🔗
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {projectData.length > 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <motion.button
            onClick={toggleShowMore}
            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-2 px-8 rounded-full shadow-md font-semibold"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "Show Less" : "Show More"} 📜
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;

