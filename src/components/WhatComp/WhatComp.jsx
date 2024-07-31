import React from "react";
import "./WhatComp.css"
import { Feature } from "../../components";
import { WhatfeatureData } from "../../data/FeaturesData";

const WhatComp = () => {
  return (
    <div className="signlang__whatsignlang section__margin" id="whatsignlang">
      <div className="signlang__whatsignlang-feature">
        <Feature
          title="What is Hand Gesture Recognition"
          text="Hand gesture recognition is a technology that allows computers and other devices to interpret human hand gestures as input. By using cameras, these systems capture the movements of the hand and fingers, translating them into commands that the device can execute."
        />
      </div>

      <div className="signlang__whatsignlang-container">
        {
          WhatfeatureData.map((data,i)=>(
            <Feature title={data.title} text={data.text} key={i*201}/>
          ))
        }
        
      </div>
    </div>
  );
};

export default WhatComp;
