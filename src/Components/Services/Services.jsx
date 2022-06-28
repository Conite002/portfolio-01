import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Glasses from '../../img/glasses.png';
import Card from '../Card/Card';
// import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion';


const Services = () => {
    const transition = {duration : 1, type : 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color :  darkMode ? 'white' : ''}}>Mes Superbes</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo <br /> animi laborum a, enim quam consequatur.</span>
            <a href={{}}  download>
                <button className="button s-button">Télécharger CV</button>
            </a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div
                whileInView={{left: '14rem'}}
                initial={{left: '25rem'}}
                transition={transition}
                style={{left:'14rem'}}>
                <Card 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"Figma, Sketch, Photoshop, Adobe Xd, Adobe lorem lorem"}
                />
            </motion.div>

            <div  style={{top:'12rem',left : "-4rem"}}>
                <Card 
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"Javascript, CSS, React JS, C, Python, C++ loremeee lorem"}
                />
            </div>

            <motion.div  
                initial={{left:'17rem'}}
                whileInView={{left:'12rem'}}
                transition={transition}
            style={{top:'19rem', left:'12rem'}}>
                <Card 
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                />
                
            </motion.div>
        </div>
    </div>
  )
}

export default Services