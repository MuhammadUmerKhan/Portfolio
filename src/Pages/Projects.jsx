import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiToolsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "📝 DocuMind AI: Smart PDF Question Answering System",
      description: "In today's data-driven world, extracting meaningful insights from documents is crucial for businesses, researchers, and individuals. This project focuses on building an intelligent PDF question-answering system that leverages state-of-the-art language models to provide accurate, context-aware answers from uploaded PDF documents. 📚✨",
      imageUrl: "https://blog.apify.com/content/images/size/w1200/2023/11/Extract-PDF-documents-for-question-answering-from-a-PDF-1.png",
      liveLink: "https://github.com/MuhammadUmerKhan/PDF-Question-and-Answering-System/blob/main/README.md",
      githubLink: "https://github.com/MuhammadUmerKhan/PDF-Question-and-Answering-System/blob/main/README.md"
    },
    {
      title: "🦠 Pneumonia Classification System 🫁",
      description: "The Pneumonia Classification System is a deep learning-based application designed to detect pneumonia from chest X-ray images. Leveraging transfer learning with InceptionV3, this project ensures accurate and reliable classification of NORMAL and PNEUMONIA cases. By augmenting data and addressing class imbalance. This tool aims to support healthcare professionals in early disease detection, improving patient outcomes and streamlining diagnostic processes.",
      imageUrl: "https://hospitalhealthcare.com/wp-content/uploads/2022/03/AI-assistance-improved-X-ray-fracture-detection-with-no-increase-in-reading-time.jpg",
      liveLink: "https://pneumonia-vs-normal-detection.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Medial-Pneumonia-Classification/blob/main/README.md"
    },
    {
      title: "💼 AI Powered Resume Parser 💼",
      description: "This project is an AI-driven Resume Parsing and Job Matching System that leverages Natural Language Processing (NLP) and Machine Learning to evaluate candidate suitability for job roles. It extracts, cleans, and processes resume text using advanced text preprocessing techniques and computes semantic similarity between resumes and job descriptions using SBERT embeddings & Cosine Similarity.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*itALTnsKMBIE8mq5rzXzFg.jpeg",
      liveLink: "https://ai-powered-resume-parser.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/-AI-Powered-Resume-Parser---Job-Matcher"
    },
    {
      title: "NLP-Powered Recommendation System 📚",
      description: "Developed a recommendation system that helps users discover relevant learning resources in Earth Systems, Climate Science, and Environmental Engineering. Using advanced natural language processing and collaborative filtering techniques, it analyzes course metadata and user preferences to deliver personalized suggestions. This comprehensive solution integrates multiple recommendation methods for an enhanced learning experience.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*rTZvrFD258ZZwvGy7nyqDw.jpeg",
      liveLink: "https://nlp-powered-recommendation-system.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/NLP-Powered-Recommendation-System"
    },
    {
      title: "🌱 Plant Disease Detection System 🌿",
      description: "The Plant Disease Detection System is a deep learning-based application designed to identify plant diseases from leaf images. This project aims to empower farmers and gardeners with an accessible, user-friendly tool to diagnose crop health issues quickly and effectively, potentially improving agricultural productivity and reducing losses.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:700/1*CUjbLtX-FeWfT6D06ebziA.jpeg",
      liveLink: "https://plant-leaf-desease-classification.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Plant-Desease-Classification-Project/blob/main/README.md"
    },
    {
      title: "Customer Churn Prediction with NLP Insights 📉",
      description: "A predictive model to identify customers at risk of churning by leveraging insights from customer feedback and interactions. Using NLP techniques, this project analyzes sentiment and extracts key themes to enhance predictive accuracy and provide actionable insights for reducing churn rates. Deployed with Streamlit for easy access to predictions and insights.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*WZdoYPpmiIk1AcPQ1YHWug.png",
      liveLink: "https://customer-churn-prediction-with-nlp-insights-rlazeungatswsd5e4c.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Customer-Churn-Prediction-with-NLP-Insights"
    },
    {
      title: "ARIMA Time Series Forecasting 📈",
      description: "This project leverages the power of Streamlit to create an interactive web application for time series analysis. Users can easily upload their data, visualize trends, test for stationarity, and fit ARIMA models. The app offers valuable insights into time series data and facilitates accurate forecasting, making it a powerful tool.",
      imageUrl: "https://dataaspirant.com/wp-content/uploads/2023/09/1-14.png",
      liveLink: "https://yahoo-stock-arima-time-series-forecasting.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Yahoo-Stock"
    },
    {
      title: "Loan Approval Prediction System 💳",
      description: "The Loan Approval Prediction System is an end-to-end machine learning project that predicts the approval status of loan applications. This project highlights expertise in data preprocessing, exploratory data analysis (EDA), feature engineering, and model building with an Artificial Neural Network (ANN). It includes an interactive Streamlit application that enables users to input loan details and receive real-time predictions.",
      imageUrl: "https://lendingplate.com/blog/wp-content/uploads/2023/08/Instant-Loan-Approval.png",
      liveLink: "https://customer-loan-approval.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Customer-Loan-Approval-KAGGLE-COMPETITION"
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
      className="min-h-screen p-8 pt-16 flex flex-col items-center"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-extrabold text-center mb-4 flex items-center justify-center"
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
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl w-full"
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
                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-full shadow-md font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live Demo 🚀
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-full shadow-md font-semibold flex items-center justify-center"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    View Efforts
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
          className="mt-5"
        >
          <motion.button
            onClick={toggleShowMore}
            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-2 px-5 rounded-full shadow-md font-semibold"
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

