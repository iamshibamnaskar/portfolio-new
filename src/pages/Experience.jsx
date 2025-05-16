import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "TechStax",
    location: "Remote",
    startDate: "Jul 2024",
    endDate: "Nov 2024",
    description: "Designed and developed modular components using JavaScript frameworks from the MERN stack. Optimized front-end rendering and API integration, enhancing user experience and reducing load times by 40%. Achieved consistent performance improvements during simulation runs, enhancing application efficiency by 30%.",
    technologies: ['MERN Stack', 'JavaScript', 'React', 'Node.js', 'MongoDB']
  },
  {
    title: "SDE Intern",
    company: "Tikaj",
    location: "Bangalore, Canada",
    startDate: "Mar 2022",
    endDate: "Sep 2022",
    description: "Deployed and debugged a robust Python Flask backend framework for optimized operations. Enhanced system scalability and reliability, ensuring zero downtime while processing over 1 million requests monthly. Implemented security patches and performance optimizations, improving overall system throughput by 25%.",
    technologies: ['Python', 'Flask', 'Backend Development', 'System Architecture']
  },
  {
    title: "Full Stack Developer Intern",
    company: "Turmitech",
    location: "Remote",
    startDate: "Oct 2021",
    endDate: "Jan 2022",
    description: "Developed a scalable application architecture using Flutter and the MERN stack. Implemented optimized database queries and state management techniques, reducing API response time by 35%. Streamlined development processes, cutting project delivery time by 20% compared to previous iterations.",
    technologies: ['Flutter', 'MERN Stack', 'Database Optimization', 'State Management']
  },
  {
    title: "Google Cloud Facilitator",
    company: "Google",
    location: "Jalpaiguri",
    startDate: "Jun 2020",
    endDate: "Aug 2021",
    description: "Led a cohort of 500 students in learning Google Cloud, providing mentorship and resolving technical queries. Achieved an 80% success rate, with over 400 students completing all milestones and gaining hands-on cloud experience. Organized 20+ workshops and hands-on labs to enhance practical understanding of cloud computing concepts.",
    technologies: ['Google Cloud', 'Cloud Computing', 'Teaching', 'Workshop Organization']
  }
]

function Experience() {
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
            Work Experience
          </motion.h1>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>

                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="bg-blue-500/5 p-6 rounded-xl hover:bg-blue-500/10 transition-colors">
                      <div className="flex items-center gap-2 text-blue-500 mb-2">
                        <FaBriefcase />
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                      </div>
                      <h4 className="text-lg font-medium text-gray-600 mb-2">{exp.company}</h4>
                      
                      <div className="flex items-center gap-4 text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 