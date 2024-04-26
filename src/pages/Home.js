import React from 'react'
import  './Home.css'
function Home() {
  return (
    <div className='writup-wrapper'>

      <div className='write-up' >
        <h3><span>He</span>llo.</h3>
        
        <h1>Frontend Engineer</h1>
        <h1><span>I'  </span>m<span> Chi</span>som Aningwu.</h1>
        <p>Welcome to my portfolio! I'm passionate frontend developer with a knack for crafting beautiful, user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, along with proficiency in modern frameworks like React and Vue.js, I specialize in turning designs into interactive, responsive, and pixel-perfect websites.</p>

            <div className='buttons'>
               <button className='download-btn'>Download CV</button>
            <button className='download-btn'>Hire Me</button></div>
       
      </div>



      <div className='my-photo'>

        <img src = {require ('../images/mypicture.png')} alt='pic' className='image'/>
     
 
      </div>
    </div>
  )
}

export default Home
