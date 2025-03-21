"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  const projectData = [
    {
      title: "🍽️ DineMate - AI-Powered Food Ordering & Management System 🤖",
      description:
        "DineMate is an AI-powered food ordering and management system designed for restaurants, cafes, and food delivery businesses. It features a conversational chatbot for customers, a real-time kitchen management system for staff, and an admin panel for menu and order control. The system ensures a seamless ordering experience, efficient kitchen operations, and automated order tracking.",
      imageUrl:
        "https://raw.githubusercontent.com/MuhammadUmerKhan/DineMate-Food-Ordering-Chatbot/main/img/app_logo.jpeg",
      liveLink: "https://dine-mate-food-delivery-chatbot.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/DineMate-Food-Ordering-Chatbot",
    },
    {
      title: "🤖 AI-Powered Search Engine with LLMs",
      description:
        "The AI-Powered Search Engine is a web-based application that combines Google Search API, web scraping, FAISS vector database, and LLMs to fetch, extract, and summarize real-time search results. This tool is designed to enhance information retrieval by providing structured, AI-generated responses.",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5612AQEmQPzwyDhgbw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1716132344917?e=2147483647&v=beta&t=vUIJxi_t4HCoQxV8HqEDWm3U7Uzz40Kp4YFCB-C5RuU",
      liveLink:
        "https://ai-powered-search-engine-using-llm.streamlit.app/?embed_options=show_toolbar,dark_theme,show_colored_line,show_footer",
      githubLink: "https://github.com/MuhammadUmerKhan/AI-Powered-Search-Engine/?embed_options=dark_theme",
    },
    {
      title: "📝 Large Language Model Chatbots",
      description:
        "AI-powered chatbots using LangChain: Basic Chatbot, Context-Aware Chatbot, and Chat with Your Document Chatbot. The Basic Chatbot enables general conversations with an LLM, the Context-Aware Chatbot enhances interactions by retaining and utilizing conversation history for more relevant responses, and the Chat with Your Document Chatbot allows users to upload documents and ask questions, providing precise answers based on document content. 🚀",
      imageUrl:
        "https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/2024-07/robot-1280x720_0.jpg?itok=AF6MakCq",
      liveLink: "https://langchain-chatbots.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/LangChain-Chatbots",
    },
    {
      title: "Customer Churn Prediction with NLP Insights 📉",
      description:
        "A predictive model to identify customers at risk of churning by leveraging insights from customer feedback and interactions. Using NLP techniques, this project analyzes sentiment and extracts key themes to enhance predictive accuracy and provide actionable insights for reducing churn rates. Deployed with Streamlit for easy access to predictions and insights.",
      imageUrl: "https://www.leadsquared.com/wp-content/uploads/2022/09/Customer-churn.webp",
      liveLink: "https://customer-churn-prediction-with-nlp-insights-rlazeungatswsd5e4c.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Customer-Churn-Prediction-with-NLP-Insights",
    },
    {
      title: "💼 AI Powered Resume Parser 💼",
      description:
        "This project is an AI-driven Resume Parsing and Job Matching System that leverages Natural Language Processing (NLP), Machine Learning, and LLMs to evaluate candidate suitability for job roles. It extracts, cleans, and processes resume text using advanced text preprocessing techniques, computes semantic similarity between resumes and job descriptions using SBERT embeddings & Cosine Similarity, and now provides AI-powered resume feedback and job fit analysis through an interactive chatbot. 🚀",
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*itALTnsKMBIE8mq5rzXzFg.jpeg",
      liveLink: "https://ai-powered-resume-parser.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/-AI-Powered-Resume-Parser---Job-Matcher",
    },
    {
      title: "NLP-Powered Recommendation System 📚",
      description:
        "Developed a recommendation system that helps users discover relevant learning resources in Earth Systems, Climate Science, and Environmental Engineering. Using advanced natural language processing and collaborative filtering techniques, it analyzes course metadata and user preferences to deliver personalized suggestions. This comprehensive solution integrates multiple recommendation methods for an enhanced learning experience.",
      imageUrl: "https://media.licdn.com/dms/image/v2/C5612AQGsqeQVa4DlbQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520179223676?e=2147483647&v=beta&t=Tb3oIsMnHXMUAP3vYRMSnpTZhLMXPORBbVv-V2ZK7j0",
      liveLink: "https://nlp-powered-recommendation-system.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/NLP-Powered-Recommendation-System",
    },
    {
      title: "📝 DocuMind AI: Smart PDF Question Answering System",
      description:
        "In today's data-driven world, extracting meaningful insights from documents is crucial for businesses, researchers, and individuals. This project focuses on building an intelligent PDF question-answering system that leverages state-of-the-art language models to provide accurate, context-aware answers from uploaded PDF documents. 📚✨",
      imageUrl:
        "https://blog.apify.com/content/images/size/w1200/2023/11/Extract-PDF-documents-for-question-answering-from-a-PDF-1.png",
      liveLink: "https://langchain-chatbots.streamlit.app/chat_with_your_documents",
      githubLink: "https://github.com/MuhammadUmerKhan/LangChain-Chatbots",
    },
    {
      title: "🦠 Pneumonia Classification System 🫁",
      description:
        "The Pneumonia Classification System is a deep learning-based application designed to detect pneumonia from chest X-ray images. Leveraging transfer learning with InceptionV3, this project ensures accurate and reliable classification of NORMAL and PNEUMONIA cases. By augmenting data and addressing class imbalance. This tool aims to support healthcare professionals in early disease detection, improving patient outcomes and streamlining diagnostic processes.",
      imageUrl:
        "https://hospitalhealthcare.com/wp-content/uploads/2022/03/AI-assistance-improved-X-ray-fracture-detection-with-no-increase-in-reading-time.jpg",
      liveLink: "https://pneumonia-vs-normal-detection.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/Medial-Pneumonia-Classification/blob/main/README.md",
    },
    {
      title: "📝 Multilingual Text Translation & Summarization System",
      description:
        "In today's interconnected world, seamless communication across languages is crucial. This project provides a Multilingual Text Translation & Summarization System that allows users to translate text between multiple languages and summarize content efficiently.",
      imageUrl: "https://618media.com/wp-content/uploads/2024/02/claude-ai-s-language-translation-capabilities.webp",
      liveLink: "",
      githubLink: "https://github.com/MuhammadUmerKhan/Multilingual-Text-Translation---Summarization-System/tree/main",
    },
    {
      title: "🌱 Plant Disease Detection System 🌿",
      description:
        "The Plant Disease Detection System is a deep learning-based application designed to identify plant diseases from leaf images. This project aims to empower farmers and gardeners with an accessible, user-friendly tool to diagnose crop health issues quickly and effectively, potentially improving agricultural productivity and reducing losses.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:700/1*CUjbLtX-FeWfT6D06ebziA.jpeg",
      liveLink: "https://plant-leaf-desease-classification.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Plant-Desease-Classification-Project/blob/main/README.md",
    },
    {
      title: "ARIMA Time Series Forecasting 📈",
      description:
        "This project leverages the power of Streamlit to create an interactive web application for time series analysis. Users can easily upload their data, visualize trends, test for stationarity, and fit ARIMA models. The app offers valuable insights into time series data and facilitates accurate forecasting, making it a powerful tool.",
      imageUrl: "https://dataaspirant.com/wp-content/uploads/2023/09/1-14.png",
      liveLink: "https://yahoo-stock-arima-time-series-forecasting.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Yahoo-Stock",
    },
    {
      title: "Loan Approval Prediction System 💳",
      description:
        "The Loan Approval Prediction System is an end-to-end machine learning project that predicts the approval status of loan applications. This project highlights expertise in data preprocessing, exploratory data analysis (EDA), feature engineering, and model building with an Artificial Neural Network (ANN). It includes an interactive Streamlit application that enables users to input loan details and receive real-time predictions.",
      imageUrl: "https://lendingplate.com/blog/wp-content/uploads/2023/08/Instant-Loan-Approval.png",
      liveLink: "https://customer-loan-approval.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Customer-Loan-Approval-KAGGLE-COMPETITION",
    },
  ]

  const [showMore, setShowMore] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState({})

  // Preload project images
  useEffect(() => {
    projectData.forEach((project, index) => {
      const img = new Image()
      img.src = project.imageUrl
      img.onload = () => {
        setImagesLoaded((prev) => ({
          ...prev,
          [index]: true,
        }))
      }
    })
  }, [])

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const visibleProjects = showMore ? projectData : projectData.slice(0, 2)

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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">My Projects</span>
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
              className="bg-gray-800 bg-opacity-30 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-56">
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-56 object-cover transition-opacity duration-300 ${imagesLoaded[index] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => {
                    setImagesLoaded((prev) => ({
                      ...prev,
                      [index]: true,
                    }))
                  }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-5">
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
  )
}

export default Projects

