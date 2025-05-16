import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projectsData = [
  {
    title: "MUSO",
    description: "Created and deployed an innovative web application that allows users to seamlessly search and play any song from the internet, driving a user engagement rate of over 85% within the first six months.",
    technologies: ['React', 'Node.js', 'JavaScript', 'Express'],
    githubLink: "https://github.com/iamshibamnaskar/muso",
    liveLink: "https://muso-omega.vercel.app/"
  },
  {
    title: "Social-pi",
    description: "Designed and launched a comprehensive social media web application with 6+ core features, including user authentication, profile management, post creation and liking, user follow/unfollow functionality, profile viewing, and advanced search capabilities.",
    technologies: ['MERN Stack', 'MongoDB', 'HTML', 'CSS'],
    githubLink: "https://github.com/iamshibamnaskar/social-py",
    liveLink: "https://socialpy.shibamnaskar.in"
  },
  {
    title: "Nimo",
    description: "Engineered an AI chatbot with Deepseek LLM, Python, FastAPI and React frontend with Google authentication.",
    technologies: ['Python', 'Ollama', 'LLM', 'React', 'Vite'],
    githubLink: "https://github.com/iamshibamnaskar/Nimo-Deepseek-Ai-Chatbot-",
    liveLink: "https://nimo.shibamnaskar.in"
  }
]

function Projects() {
  return (
    <section className="w-full min-h-screen relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-600 text-center"
          >
            My Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-blue-500/5 p-6 rounded-xl hover:bg-blue-500/10 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold text-gray-600">{project.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      title="View on GitHub"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      title="Visit Live Site"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects