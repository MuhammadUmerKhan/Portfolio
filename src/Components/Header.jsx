"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { RiHome4Line, RiUser3Line, RiProjectorLine, RiMailSendLine, RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { FaTools } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null) // Track hovered/tapped item
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
        className={`fixed left-0 top-1/4 transform -translate-y-1/3 z-50 hidden md:flex flex-col items-center py-6 px-4 transition-all duration-300 rounded-r-xl ${
          scrolled
            ? "bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            : "bg-gray-900 bg-opacity-30 backdrop-blur-md"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            const isHovered = hoveredItem === item.name
            return (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300"
                title={item.name}
              >
                <motion.div
                  initial={isActive ? { scale: 1.3 } : { scale: 1 }}
                  animate={isActive ? { scale: 1.3 } : { scale: 1 }}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  onTap={() => setHoveredItem(item.name)} // Handle tap on mobile
                  onTapCancel={() => setHoveredItem(null)} // Reset on tap end
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex items-center justify-center"
                >
                  <item.icon className="text-3xl drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" style={{ color: isHovered || isActive ? "rgba(34, 211, 238, 1)" : "inherit" }} />
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-md opacity-50"
                      layoutId="activeGlow"
                    />
                  )}
                  {(isHovered || isActive) && (
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-md opacity-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
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
          scrolled
            ? "bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            : "bg-gray-900 bg-opacity-30 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Hamburger Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              {isOpen ? (
                <RiCloseLine size={28} className="text-gradient-to-r from-teal-400 via-cyan-500 to-blue-500" />
              ) : (
                <RiMenu3Line size={28} className="text-gradient-to-r from-teal-400 via-cyan-500 to-blue-500" />
              )}
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
                className="mt-3 bg-gray-900 bg-opacity-90 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-lg border border-cyan-500 border-opacity-20"
              >
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path
                  const isHovered = hoveredItem === item.name
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`block py-4 px-6 text-base rounded ${
                          isActive ? "text-cyan-400 bg-gray-800 bg-opacity-50" : "text-gray-300"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          onHoverStart={() => setHoveredItem(item.name)}
                          onHoverEnd={() => setHoveredItem(null)}
                          onTap={() => setHoveredItem(item.name)} // Handle tap on mobile
                          onTapCancel={() => setHoveredItem(null)} // Reset on tap end
                          className="flex items-center space-x-3 relative"
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon
                            className="text-xl drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
                            style={{ color: isHovered || isActive ? "rgba(34, 211, 238, 1)" : "inherit" }}
                          />
                          <span>{item.name}</span>
                          {(isHovered || isActive) && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded opacity-0 blur-md"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.3 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </motion.div>
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