"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { RiHome4Line, RiUser3Line, RiProjectorLine, RiMailSendLine, RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { FaTools } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/", icon: RiHome4Line },
    { name: "About", path: "/about", icon: RiUser3Line },
    { name: "Skills", path: "/skills", icon: FaTools },
    { name: "Projects", path: "/projects", icon: RiProjectorLine },
    { name: "Contact", path: "/contact", icon: RiMailSendLine },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Left Sidebar - Icons in Center */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed left-0 top-1/4 transform -translate-y-1/3 z-50 hidden md:flex flex-col items-center py-4 px-3 transition-all duration-300 ${
          scrolled ? "bg-black bg-opacity-30 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-300 transition-all duration-300 ${
                  isActive ? "opacity-100 text-white" : "opacity-60 hover:opacity-100 hover:text-white"
                }`}
                title={item.name}
              >
                <motion.div
                  initial={isActive ? { scale: 1.2, color: "#ffffff" } : { scale: 1 }}
                  animate={isActive ? { scale: 1.2, color: "#ffffff" } : { scale: 1 }}
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center"
                >
                  <item.icon className="text-3xl" />
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed w-full z-50 md:hidden transition-all duration-300 ${
          scrolled ? "bg-black bg-opacity-70 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Mobile Hamburger Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="mt-2 bg-black bg-opacity-90 rounded-lg shadow-lg"
              >
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`block py-3 px-4 text-base transition-all duration-300 rounded ${
                          isActive ? "text-white bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-800"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="text-xl" />
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}

export default Header

