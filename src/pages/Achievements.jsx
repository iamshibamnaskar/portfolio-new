import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const achievements = [
  {
    title: "Agora Hackathon First Prize Winner",
    event: "AGORA",
    date: "July 2021",
    location: "Jalpaiguri",
    description: "Developed a fully functional video calling and messaging app, Crew Up, using Flutter and the Agora RTC and RTM SDKs, optimizing performance by up to 90%.",
    technologies: ['Flutter', 'Agora RTC', 'Agora RTM', 'Video Calling', 'Real-time Messaging']
  },
  {
    title: "Scaler Hackathon 3rd Position",
    event: "SCALER",
    date: "January 2021",
    location: "Jalpaiguri",
    description: "Designed and implemented an online meeting-turned-classroom system with a gamified points-based approach to incentivize learning, boosting student focus and engagement by 50%.",
    technologies: ['Web Development', 'Gamification', 'Education Technology', 'User Engagement']
  }
]

function Achievements() {
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
            Achievements
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-blue-500/5 p-6 rounded-xl hover:bg-blue-500/10 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <FaTrophy className="text-2xl" />
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                </div>
                <h4 className="text-lg font-medium text-gray-600 mb-2">{achievement.event}</h4>
                
                <div className="flex items-center gap-4 text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt />
                    <span>{achievement.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt />
                    <span>{achievement.location}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{achievement.description}</p>

                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements 