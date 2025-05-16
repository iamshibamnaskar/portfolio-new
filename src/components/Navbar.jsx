import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6">
            <NavLink 
                to="/" 
                className="w-10 h-10 rounded-lg bg-white text-black items-center justify-center flex font-bold shadow-md hover:bg-blue-50 transition-colors"
            >
                <p>SN</p>
            </NavLink>

            <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
            >
                <div className="flex gap-1 p-1">
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                isActive 
                                    ? 'bg-white/20 text-white' 
                                    : 'text-white hover:bg-white/10'
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/experience" 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                isActive 
                                    ? 'bg-white/20 text-white' 
                                    : 'text-white hover:bg-white/10'
                            }`
                        }
                    >
                        Experience
                    </NavLink>
                    <NavLink 
                        to="/achievements" 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                isActive 
                                    ? 'bg-white/20 text-white' 
                                    : 'text-white hover:bg-white/10'
                            }`
                        }
                    >
                        Achievements
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                isActive 
                                    ? 'bg-white/20 text-white' 
                                    : 'text-white hover:bg-white/10'
                            }`
                        }
                    >
                        Projects
                    </NavLink>
                </div>
            </motion.nav>
        </header>
    )
}

export default Navbar
