import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  {title: 'Major', description: 'Computer Engineer', imgUrl: ''},
  {title: 'Major', description: 'Computer Engineer', imgUrl: ''},
  {title: 'Major', description: 'Computer Engineer', imgUrl: ''}
  
];

const About = () => {
  return (
    <>
      <h2 className='head-text'> 
        I know that 
        <span>Great Code</span>
        <br/>
        means
        <span>Great Business</span>
      </h2>

      <div className='app__profiles'>

      </div>
    </>
  )
}

export default About