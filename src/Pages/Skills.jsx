import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skills = [
    { name: "Statistical Analysis 📐", percentage: 75 },
    { name: "Python 🐍", percentage: 85 },
    { name: "Data Visualization 📉", percentage: 80 },
    { name: "Machine Learning 🤖", percentage: 70 },
    { name: "Deep Learning 🖧", percentage: 65 },
    { name: "Natural Language Processing (NLP) 🗣️", percentage: 75 },
    { name: "SQL 🗄️", percentage: 80 },
  ];

  const certificates = [
    { title: "Excel Certificate", issuer: "Coursera", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Excel.png" },
    { title: "Foundation of Python Challenge", issuer: "Microsoft", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Foundation%20of%20Python%20Challenge.png" },
    { title: "IBM Machine Learning", issuer: "Coursera", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/ML%20Certificate.png" },
    { title: "Database and SQL", issuer: "Coursera", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Database%20and%20SQL.png" },
    { title: "Python for AI and Data Science", issuer: "Coursera", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Python%20for%20AI%20and%20DS.png" },
    { title: "Data Science Internship Certificate", issuer: "Digital Empowerment Pakistan", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Internship%20Certificate.png" },
  ];

  const skillsControls = useAnimation();
  const certificatesControls = useAnimation();
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: false, initialInView: true });
  const [certificatesRef, certificatesInView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible");
    } else {
      skillsControls.start("hidden");
    }
  }, [skillsControls, skillsInView]);

  useEffect(() => {
    if (certificatesInView) {
      certificatesControls.start("visible");
    } else {
      certificatesControls.start("hidden");
    }
  }, [certificatesControls, certificatesInView]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
      },
    },
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
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto text-gray-300 relative p-8 pt-20">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold text-center mb-12 flex items-center justify-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
              Skills
            </span>
            <span className="ml-2">💻</span>
          </motion.h1>

          {/* Skills section */}
          <motion.div
            ref={skillsRef}
            initial="visible"
            animate={skillsControls}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-12 " // backdrop-blur-md
          >
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-gray-300">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills section */}
          <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      variants={containerVariants}
                      className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-sm"
                    >
                      <h2 className="text-3xl font-semibold mb-6 text-purple-400">💻 Technical Skills</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                          { name: "Python", emoji: "🐍" },
                          { name: "SQL", emoji: "🗄️" },
                          { name: "Scikit-learn", emoji: "🤖" },
                          { name: "TensorFlow", emoji: "🧠" },
                          { name: "PyTorch", emoji: "🔥" },
                          { name: "Pandas", emoji: "🐼" },
                          { name: "NumPy", emoji: "🔢" },
                          { name: "SpaCy", emoji: "📚" },
                          { name: "NLTK", emoji: "🗣️" },
                          { name: "Power BI", emoji: "📊" },
                          { name: "Matplotlib", emoji: "📈" },
                          { name: "Seaborn", emoji: "🌊" },
                        ].map((skill, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-700 bg-opacity-50 p-4 rounded-lg shadow-md flex items-center space-x-2"
                          >
                            <span className="text-2xl">{skill.emoji}</span>
                            <span className="text-gray-300">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

          {/* Certificates section */}
          <motion.div
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl mb-12 " // backdrop-blur-md
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">🏆 Certificates</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-700 p-4 rounded-lg shadow-lg w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {certificates.map((certificate, index) => (
                    <img
                      key={index}
                      src={certificate.image}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      variants={containerVariants}
                    //   className="bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-2xl backdrop-blur-md"
                    >
            <div className="text-center my-8">
              <p className="text-xl italic text-gray-400">
                "The best of people are those that bring the most benefit to the rest of mankind." - Prophet Muhammad (ﷺ)
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;

