import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function About() {
  return (
    <section className="w-full h-screen relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Photo and Contact */}
          <div className="space-y-8">
            {/* Photo Section */}
            <div className="relative flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400/20">
                <img
                  src="https://avatars.githubusercontent.com/u/83879123?v=4"
                  alt="Profile"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-gray-600 text-center">Contact Me</h2>
              <div className="flex flex-col space-y-4">
                <a href="mailto:shibamnaskar69@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors">
                  <FaEnvelope className="text-blue-500 text-xl" />
                  <span>shibamnaskar69@gmail.com</span>
                </a>
                <a href="https://github.com/iamshibamnaskar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors">
                  <FaGithub className="text-blue-500 text-xl" />
                  <span>github.com/iamshibamnaskar</span>
                </a>
                <a href="https://linkedin.com/in/shibam-naskar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors">
                  <FaLinkedin className="text-blue-500 text-xl" />
                  <span>linkedin.com/in/shibam-naskar</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <FaMapMarkerAlt className="text-blue-500 text-xl" />
                  <span>Kakdwip, West Bengal</span>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-gray-600 text-center">Technical Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-blue-500 font-medium mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'C', 'C++', 'Dart', 'JavaScript', 'SQL', 'TypeScript'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-blue-500 font-medium mb-2">Technologies/Frameworks</h3>
                  <div className="flex flex-wrap gap-3">
                    {['ReactJS', 'Redux', 'NodeJS', 'ExpressJS', 'Flask', 'MongoDB', 'Flutter', 'Linux', 'Git'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - About and Education */}
          <div className="space-y-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-600">About Me</h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in creating innovative web applications and AI solutions. 
                My journey in technology has led me to work on diverse projects ranging from social media platforms to AI chatbots, 
                always focusing on delivering optimal user experiences and scalable solutions.
              </p>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-gray-600">Education</h2>
              <div className="space-y-6">
                <div className="bg-blue-500/5 p-6 rounded-xl hover:bg-blue-500/10 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-600">Bachelor of Technology in Computer Science and Engineering</h3>
                  <p className="text-blue-500">Jalpaiguri Government Engineering College</p>
                  <p className="text-gray-400">2020 - 2024</p>
                  <p className="text-gray-400 mt-2">Jalpaiguri, India</p>
                </div>
                <div className="bg-blue-500/5 p-6 rounded-xl hover:bg-blue-500/10 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-600">Science</h3>
                  <p className="text-blue-500">Kakdwip Birendra Vidya Niketan</p>
                  <p className="text-gray-400">2017 - 2019</p>
                  <p className="text-gray-400 mt-2">Kakdwip, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About