import React from 'react'
import "./Working.css"
import WorkingImg from "../../assests/Working.png";

const Working = () => {
  return (
    <div className='signlang_working section__padding'>
        <div className="signlang_working-img">
          <img src={WorkingImg} alt="working" />
        </div>

        <div className="signlang_working-content">
          <h1 className="gradient__text">Get to know, How it Works !</h1>
          <p>
          The process of hand gesture recognition begins with data acquisition, where cameras and sensors capture the hand’s position, shape, and movement in real-time. This captured data undergoes preprocessing to enhance image quality and remove noise, ensuring accuracy. Key features of the hand and gestures are then identified and extracted for analysis in the feature extraction phase. Machine learning algorithms classify these gestures based on the extracted features during the gesture recognition stage. Finally, the recognized gestures are mapped to specific commands that the device executes, enabling seamless and intuitive interaction.          </p>
        </div>
    </div>
  )
}

export default Working