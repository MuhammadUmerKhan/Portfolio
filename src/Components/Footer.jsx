import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaFileAlt } from "react-icons/fa"

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-umer-khan-61729b260/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/MuhammadUmerKhan",
      label: "GitHub",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/umr.khan.0/",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/umar.shahid.56211497",
      label: "Facebook",
    },
    {
      icon: FaFileAlt,
      href: "https://drive.google.com/uc?export=download&id=1mZgsy1d_7kVW3LyvVW-m7GDXC1n3xe3v",
      label: "Resume",
      download: true,
    },
  ]

  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] border-t border-cyan-500 border-opacity-20 z-10 relative overflow-hidden"
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-400/10 via-cyan-500/10 to-blue-500/10 opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-8 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300"
                whileHover={{
                  scale: 1.3,
                  rotate: 5,
                  color: "rgba(34, 211, 238, 1)", // Cyan on hover
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                download={link.download}
              >
                <span className="sr-only">{link.label}</span>
                <div className="relative flex items-center justify-center">
                  <link.icon className="h-7 w-7 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-md opacity-0"
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
          <motion.div
            className="text-center text-gray-400 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>
              © {new Date().getFullYear()} Muhammad Umer Khan. All rights reserved{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ♥
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer