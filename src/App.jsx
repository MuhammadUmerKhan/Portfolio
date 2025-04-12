"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import StarryBackground from "./Components/StarryBackground"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    )
  }

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-transparent text-white">
        <StarryBackground />
        <Header />
        <main className="flex-grow z-10 pt-16 sm:pt-18 md:pt-20 lg:pt-3 relative">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
