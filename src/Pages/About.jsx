import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import StarryBackground from '../Components/StarryBackground';

const About = () => {
  const skills = [
    { name: "Statistical Analysis 📐", percentage: 75 },
    { name: "Python 🐍", percentage: 85 },
    { name: "Data Visualization 📉", percentage: 80 },
    { name: "Machine Learning 🤖", percentage: 70 },
    { name: "Deep Learning 🖧", percentage: 65 },
    { name: "Natural Language Processing (NLP) 🗣️", percentage: 75 },
    { name: "SQL 🗄️", percentage: 80 },
  ];

  const [certificates, setCertificates] = useState([
    { title: "Excel Certificate", issuer: "Coursera", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Excel.png" },
    { title: "Foundation of Python import StarryBackground from '../Components/StarryBackground';Challenge", issuer: "Microsoft", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Foundation%20of%20Python%20Challenge.png" },
    { title: "IBM Machine Learning", issuer: "Coursera", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/ML%20Certificate.png" },
    { title: "Database and SQL", issuer: "Coursera", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Database%20and%20SQL.png" },
    { title: "Python for AI and Data Science", issuer: "Coursera", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Python%20for%20AI%20and%20DS.png" },
    { title: "Data Science Internship Certificate", issuer: "Digital Empowerment Pakistan", image: "https://raw.githubusercontent.com/MuhammadUmerKhan/Portfolio/main/imgs/Internship%20Certificate.png" },
    
  ]);

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
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <StarryBackground />
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto text-gray-300 relative z-10 p-8 pt-1">
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
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
                  Hello! I am Muhammad Umer Khan, an aspiring Data Scientist driven by a passion for transforming data into actionable insights. Currently, I am pursuing a B.Sc. in Computer Science while gaining practical experience through hands-on projects and internships.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left">
                  My expertise lies in <strong>Data Analysis</strong>, <strong>Machine Learning</strong>, and <strong>Natural Language Processing (NLP)</strong>. With a solid foundation in <strong>Python</strong>, <strong>SQL</strong>, and data visualization, I thrive on exploring innovative technologies and solving complex problems with creative solutions.
                </p>
              </div> 
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  title: "📂 Domains", 
                  content: "Retail Analytics, E-commerce Personalization, HR Analytics, Customer Segmentation, NLP Applications" 
                },
                { 
                  title: "🗣️ Languages", 
                  content: "English (Professional), Urdu (Native)" 
                },
                { 
                  title: "📊 Visualization Tools", 
                  content: "Microsoft Power BI, Matplotlib, Seaborn" 
                },
                // { 
                //   title: "🛠️ Technical Skills", 
                //   content: "Python, SQL, Scikit-learn, Tensorflow, Pandas, NumPy, SpaCy, NLTK" 
                // },
                { 
                  title: "🌱 Interests", 
                  content: "Fitness Enthusiast 🏋️‍♂️, Exploring New Technologies 💡, Machine Learning 🤖, Web Development 🌐" 
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
            </div>
          </motion.div>

          {/* Education section */}
          <motion.div
            ref={educationRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">🎓 Education</h2>
            {/* Changed to a two-column grid */}
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
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
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

          {/* Certificates section */}
          <motion.div
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl mb-12 backdrop-blur-md"
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
          {/* Get In Touch section */}
          <motion.div
            ref={getInTouchRef}
            initial="hidden"
            animate={getInTouchInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl backdrop-blur-md"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400"><center>📬 Get In Touch</center> </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1xlcoTGBqWtqoGk-GF2jERWe_pF-yprhI"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <FaDownload className="mr-2" /> Resume 📄
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

