"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  const projectData = [
    {
      title: "🍽️ DineMate: AI-Powered Conversational Agent for Smart Food Ordering 🎙️",
      description:
        "An AI-driven food ordering assistant with chatbot and voice-based ordering. Uses Whisper ASR for Speech-to-Text, Torch TTS for AI responses, and integrates Qwen-2.5-32B, LangChain, LangGraph, and MySQL for seamless order management and analytics.",
      imageUrl:
        "https://raw.githubusercontent.com/MuhammadUmerKhan/DineMate-Food-Ordering-Chatbot/main/img/app_logo.jpeg",
      liveLink:
        "https://dinemate-ai-powered-conversational-ai-agent-for-food-ordering.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/DineMate-Food-Ordering-Chatbot",
    },
    {
      title: "⚖️ LexiAgent: AI-Powered Autonomous Legal Document Agent",
      description:
        "An enterprise-ready autonomous AI agent designed to analyze legal documents with precision. Built using LLMs (Qwen & LLaMA 4 Scout), and custom tools for clause extraction, classification, risk detection, summarization, and natural language querying. Perfect for legal teams, law firms, and compliance.",
      imageUrl: "https://1719204.fs1.hubspotusercontent-na1.net/hubfs/1719204/RJY%20Socials_Legal%20Doc_FB.jpg",
      liveLink:
        "https://lexiagent-ai-powered-autonomous-legal-document-analyst.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/LexiAgent-AI-Powered-Autonomous-Legal-Document-Analyst",
    },
    {
      title: "📉 MLOps-Driven Customer Churn Prediction with LLM Insights",
      description:
        "A predictive AI system that analyzes customer interactions using NLP and sentiment analysis (ChatQrok) to forecast churn risks. Integrated with MLflow for MLOps, FastAPI for real-time predictions, and a web app for actionable insights.",
      imageUrl: "https://www.leadsquared.com/wp-content/uploads/2022/09/Customer-churn.webp",
      liveLink: "https://customer-churn-prediction-with-nlp-insights-rlazeungatswsd5e4c.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Customer-Churn-Prediction-with-NLP-Insights",
    },
    {
      title: "🤖 AI-Powered Semantic Search Engine with LLMs & Vector Databases",
      description:
        "A smart AI search engine using FAISS, Google Search API, and Llama 3.3-70B (via Groq API) for powerful semantic search. Retrieves, processes, and summarizes real-time data to deliver precise and insightful search results.",
      imageUrl:
        "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-06/AI%20search%20engine.jpg",
      liveLink:
        "https://ai-powered-search-engine-with-llms.streamlit.app/?embed_options=show_toolbar,dark_theme,show_colored_line,show_footer",
      githubLink: "https://github.com/MuhammadUmerKhan/AI-Powered-Search-Engine",
    },
    {
      title: "📝 LLM-Driven Intelligent Virtual Assistants",
      description:
        "A suite of AI chatbots built with LangChain, including a general-purpose chatbot, a context-aware assistant, and a document-based Q&A system. Supports intelligent, conversational AI interactions with memory-based responses and document understanding.",
      imageUrl:
        "https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/2024-07/robot-1280x720_0.jpg?itok=AF6MakCq",
      liveLink: "https://langchain-chatbots.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/LangChain-Chatbots",
    },
    {
      title: "🤖 SupportGenie: AI-Powered Customer Assistance & Insights",
      description:
        "An AI-driven customer support system that leverages LLMs, FAISS vector search, and sentiment analysis to provide instant, multilingual customer assistance. Includes a chatbot, analytics dashboard, and feedback-based learning for continuous improvement.",
      imageUrl:
        "https://www.addevice.io/storage/ckeditor/uploads/images/64d0d72b8dcde_the.role.of.chatbots.and.humans.in.customer.support.1.png",
      liveLink: "https://ai-powered-customer-support-and-analytics-system.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/SupportGenie-AI-Powered-Customer-Assistance-Insights",
    },
    {
      title: "💼 AI-Powered Resume Parsing & Job Matching System",
      description:
        "A smart NLP-powered resume parser and job matching system using SBERT embeddings & Cosine Similarity. Extracts key resume details, evaluates job fit, and provides AI-driven feedback via an interactive chatbot.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*itALTnsKMBIE8mq5rzXzFg.jpeg",
      liveLink: "https://ai-powered-resume-parser.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/-AI-Powered-Resume-Parser---Job-Matcher",
    },
    {
      title: "📚 Scalable AI-Powered Recommendation Engines",
      description:
        "An AI-driven recommendation system combining content-based, collaborative, and hybrid filtering techniques to personalize course and movie suggestions. Uses NLP, KNN, and SVD for optimized recommendations.",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C5612AQGsqeQVa4DlbQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520179223676?e=2147483647&v=beta&t=Tb3oIsMnHXMUAP3vYRMSnpTZhLMXPORBbVv-V2ZK7j0",
      liveLink: "https://nlp-powered-recommendation-system.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/NLP-Powered-Recommendation-System",
    },
    {
      title: "📄 DocuMind AI: Intelligent PDF Question-Answering System",
      description:
        "A smart AI assistant that extracts, understands, and answers queries from PDF documents using state-of-the-art language models. Ideal for researchers, professionals, and students looking for AI-driven document insights.",
      imageUrl:
        "https://blog.apify.com/content/images/size/w1200/2023/11/Extract-PDF-documents-for-question-answering-from-a-PDF-1.png",
      liveLink: "https://langchain-chatbots.streamlit.app/chat_with_your_documents",
      githubLink: "https://github.com/MuhammadUmerKhan/LangChain-Chatbots",
    },
    {
      title: "🦠 Deep Learning-Based Pneumonia Detection from Chest X-Rays",
      description:
        "A CNN-based medical AI model that classifies pneumonia from chest X-ray images using transfer learning (InceptionV3). Helps automate early detection and improve patient outcomes.",
      imageUrl:
        "https://hospitalhealthcare.com/wp-content/uploads/2022/03/AI-assistance-improved-X-ray-fracture-detection-with-no-increase-in-reading-time.jpg",
      liveLink: "https://pneumonia-vs-normal-detection.streamlit.app/?embed_options=dark_theme",
      githubLink: "https://github.com/MuhammadUmerKhan/Medial-Pneumonia-Classification",
    },
    {
      title: "🌱 AI-Powered Plant Disease Diagnosis & Classification System",
      description:
        "A deep learning-powered image classification model for detecting plant diseases from leaf images. Provides real-time disease identification to help optimize agricultural health monitoring.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:700/1*CUjbLtX-FeWfT6D06ebziA.jpeg",
      liveLink: "https://plant-leaf-desease-classification.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Plant-Desease-Classification-Project",
    },
    {
      title: "📈 Time Series Forecasting with ARIMA for Trend Analysis",
      description:
        "An interactive AI system for time series forecasting using ARIMA models. Users can upload datasets, visualize trends, and generate accurate future predictions.",
      imageUrl: "https://dataaspirant.com/wp-content/uploads/2023/09/1-14.png",
      liveLink: "https://yahoo-stock-arima-time-series-forecasting.streamlit.app/",
      githubLink: "https://github.com/MuhammadUmerKhan/Yahoo-Stock",
    },
    {
      title: "🌍 NLP-Powered Multilingual Text Translation & Summarization",
      description:
        "An AI-driven NLP system that enables seamless multilingual translation and text summarization. Built using advanced language models, it allows users to translate text across multiple languages and generate concise summaries efficiently. Ideal for researchers, businesses, and global communication.",
      imageUrl: "https://618media.com/wp-content/uploads/2024/02/claude-ai-s-language-translation-capabilities.webp",
      liveLink: "",
      githubLink: "https://github.com/MuhammadUmerKhan/Multilingual-Text-Translation---Summarization-System/tree/main",
    },
    {
      title: "💳 AI-Driven Loan Approval Prediction System",
      description:
        "An end-to-end machine learning system that predicts loan approval status based on applicant data. This project features advanced data preprocessing, exploratory data analysis (EDA), feature engineering, and an Artificial Neural Network (ANN) for accurate predictions. Deployed as an interactive Streamlit application for real-time decision-making.",
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
      className="min-h-screen p-4 sm:p-6 md:p-8 pt-6 sm:pt-8 md:pt-10 flex flex-col items-center"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 sm:mb-8 md:mb-10 flex items-center justify-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
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
              className="bg-gray-800 bg-opacity-30 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 z-10"
            >
              <div className="relative h-40 sm:h-48 md:h-56">
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-40 sm:h-48 md:h-56 object-cover transition-opacity duration-300 ${imagesLoaded[index] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => {
                    setImagesLoaded((prev) => ({
                      ...prev,
                      [index]: true,
                    }))
                  }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-md font-semibold drop-shadow-lg animate-gradient text-center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live Demo 🚀
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-md font-semibold flex items-center justify-center drop-shadow-lg animate-gradient text-center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2 text-white" />
                    View Efforts
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {projectData.length > 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-5 z-10">
          <motion.button
            onClick={toggleShowMore}
            className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white text-base sm:text-lg font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)" }}
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
