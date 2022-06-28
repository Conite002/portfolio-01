import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='experience' id='Experience'>
        <div className="achievement">
            <div className="circle">4+</div>
            <span style={{color :  darkMode ? 'white' : ''}}>Année </span>
            <span>Experience</span>
        </div>

        <div className="achievement">
            <div className="circle">10+</div>
            <span style={{color :  darkMode ? 'white' : ''}}>Complete </span>
            <span>Projets</span>
        </div>

        <div className="achievement">
            <div className="circle">2+</div>
            <span style={{color :  darkMode ? 'white' : ''}}>Companies </span>
        </div>

    </div>
  )
}

export default Experience