import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto text-gray-300 relative p-8 pt-10 pl-20">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-extrabold text-center mb-5 flex items-center justify-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500">
              About Me
            </span>
            <span className="ml-2">🎓</span>
          </motion.h1>

          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-5" // backdrop-blur-md
          >
            <div className="flex flex-col md:flex-row items-center mb-8">
              <motion.img
                src="https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/pic2.png"
                alt="Muhammad Umer Khan"
                className="w-48 h-48 rounded-full object-cover shadow-lg mb-4 md:mb-0 md:mr-8 ring-4 ring-cyan-500 ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <div>
              <h2 className="text-3xl font-semibold mb-4 text-left text-white">🧑 Profile</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
                    Hi, I'm <span className="font-semibold text-gray-200">Muhammad Umer Khan</span>, an aspiring <span className="font-semibold text-gray-200">AI Engineer</span> with a passion for developing intelligent systems that transform data into meaningful insights. Currently pursuing a <span className="font-semibold text-gray-200">B.Sc. in Computer Science</span>, I specialize in building end-to-end AI solutions that bridge the gap between research and real-world applications.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
                    My expertise includes <span className="font-semibold text-gray-200">Machine Learning</span>, <span className="font-semibold text-gray-200">Deep Learning</span>, and <span className="font-semibold text-gray-200">Natural Language Processing (NLP)</span>. With proficiency in <span className="font-semibold text-gray-200">Python</span>, <span className="font-semibold text-gray-200">SQL</span>, and advanced AI frameworks, I am dedicated to designing scalable, efficient, and impactful AI-driven solutions.
                </p>
                                
              </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  title: "🗣️ Languages", 
                  content: "English (Professional), Urdu (Native)" 
                },
                // { 
                //   title: "📊 Visualization Tools", 
                //   content: "Microsoft Power BI, Matplotlib, Seaborn" 
                // },
                // {
                //   title: "🛠️ Technical Skills",
                //   content: "Python, SQL, Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, SpaCy, NLTK ..."
                // },                
                { 
                  title: "🌱 Interests", 
                  content: "Fitness Enthusiast 🏋️‍♂️, Exploring New Technologies 💡" 
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-purple-400">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Education section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-12 relative"
          >
            {/* Updated Heading */}
            <h2 className="text-4xl font-extrabold mb-8 flex items-center justify-center relative z-10 shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500">
                Education
              </span>
              <span className="ml-2">🎓</span>
            </h2>

            {/* Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  degree: "Higher Secondary School Certificate (HSSC)",
                  year: "2021 - 2023",
                  institution: "Government College for Men",
                  grade: "First Class with Distinction",
                },
                {
                  degree: "B.Sc. in Computer Science",
                  year: "2023 - Present",
                  institution: "Sindh Madressatul Islam University",
                  grade: "First Class with Distinction",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-cyan-600">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.year}</p>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-300">Grade: {edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

                    {/* Inspirational Quote */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
                className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-md border-l-4 border-cyan-600"
              >
              <p className="text-lg italic text-gray-400 text-center">
                    "He who has no vision of eternity has no hold on time." – Ibn al-Arabi
              </p>
            </motion.div>
          <br /><br />
          {/* Get In Touch section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400"><center>📬 Get In Touch</center></h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1NxWK95r736T-1XgqRCMxxmCBLc8cmxz8"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaDownload className="mr-2" /> Resume 
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-umer-khan-61729b260/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaLinkedin className="mr-2" /> LinkedIn 🔗
              </motion.a>
              <motion.a
                href="https://github.com/MuhammadUmerKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-700 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaGithub className="mr-2" /> GitHub 🖥️
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
