import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import About from './pages/About'
import Experience from './pages/Experience'
import Achievements from './pages/Achievements'

function App() {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/experience' element={<Experience/>}/>
                    <Route path='/achievements' element={<Achievements/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contact' element={<Contacts/>}/>
                </Routes>
            </Router>
        </main>
    )
}

export default App