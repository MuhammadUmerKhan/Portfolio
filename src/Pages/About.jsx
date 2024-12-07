import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "SQL 🗄️", percentage: 75 },
    { name: "Python 🐍", percentage: 90 },
    { name: "Data Visualization 📊", percentage: 95 },
    { name: "Statistical Analysis 📐", percentage: 85 },
    { name: "Machine Learning 🤖", percentage: 85 },
    { name: "Natural Language Processing (NLP) 🗣️", percentage: 80 },
  ];

  const educationControls = useAnimation();
  const skillsControls = useAnimation();
  const educationRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const getInTouchRef = React.useRef(null);
  const educationInView = useInView(educationRef, { once: false, threshold: 0.2 });
  const skillsInView = useInView(skillsRef, { once: false, threshold: 0.2 });
  const getInTouchInView = useInView(getInTouchRef, { once: false, threshold: 0.2 });

  useEffect(() => {
    if (educationInView) {
      educationControls.start("visible");
    } else {
      educationControls.start("hidden");
    }
  }, [educationControls, educationInView]);

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible");
    } else {
      skillsControls.start("hidden");
    }
  }, [skillsControls, skillsInView]);

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
    <div className="min-h-screen p-8 pt-24 bg-gray-900">
      <div className="max-w-6xl mx-auto text-gray-300">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-12"
        >
          About Me 🙋‍♂️
        </motion.h1>

        {/* Profile section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center mb-8">
            <motion.img
              src="https://raw.githubusercontent.com/MuhammadUmerKhan/MuhammadUmerKhan/main/assests/pic/porfolio.jpg"
              alt="Muhammad Umer Khan"
              className="w-48 h-48 rounded-full object-cover shadow-lg mb-4 md:mb-0 md:mr-8 ring-4 ring-purple-500 ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-left">👤 Profile</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
                Hello! I am Muhammad Umer Khan, an aspiring Data Scientist passionate about harnessing data for insights. I'm currently pursuing a B.Sc. in Computer Science, while building real-world skills through hands-on projects and internships.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
                My expertise covers <strong>Data Analysis</strong>, <strong>Machine Learning</strong>, and <strong>Natural Language Processing (NLP)</strong>. I enjoy exploring technologies and crafting solutions for complex challenges, with a strong foundation in <strong>SQL</strong>, <strong>Python</strong>, and data visualization.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "📂 Domains", content: "Retail, E-commerce, HR Analytics, Customer Segmentation, Natural Language Processing (NLP)" },
              { title: "🗣️ Languages", content: "English, Urdu" },
              { title: "📊 BI Tools", content: "Microsoft Power BI" },
              { title: "🛠️ Technical Skills", content: "Python, SQL, Spacy, NLTK, FastAPI, MySQL, Scikit-learn, Pandas, Numpy, Matplotlib, Seaborn" },
              { title: "🌱 Interests", content: "Gym 🏋️‍♂️, Learning New Technologies 💡, Web Development 🌐, Exploring Machine Learning Algorithms 🤖" },
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
          </div>
        </motion.div>

        {/* Education section */}
        <motion.div
          ref={educationRef}
          initial="hidden"
          animate={educationControls}
          variants={containerVariants}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">🎓 Education</h2>
          <div className="space-y-4">
            {[
              {
                degree: "B.Sc. in Computer Science",
                year: "2023 - Present",
                institution: "Sindh Madressatul Islam University",
                grade: "First Class Distinction",
              },
              {
                degree: "Higher Secondary School",
                year: "2021 - 2022",
                institution: "Government College for Men",
                grade: "First Class Distinction",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                <p className="text-gray-300">{edu.year}</p>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-gray-300">Grade: {edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">💻 Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-300">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-300">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-blue-400 to-purple-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    variants={{
                      hidden: { width: 0 },
                      visible: { width: `${skill.percentage}%` },
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Get In Touch section */}
        <motion.div
          ref={getInTouchRef}
          initial="hidden"
          animate={getInTouchInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">📬 Get In Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1xlcoTGBqWtqoGk-GF2jERWe_pF-yprhI"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <FaDownload className="mr-2" /> Download CV 📄
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
  );
};

export default About;