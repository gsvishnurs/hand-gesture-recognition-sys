import React from 'react'
import "./Header.css"
import SignHand from "../../assests/SignHand.png";

const Header = () => {
  return (
    <div className="signlang__header section__padding gradient__bg" id="home">

    <div className="signlang__header-content">
      <h1 className="gradient__text">Hand Gesture Recognition System</h1>
      <p>
      In today's technologically advanced world, hand gesture recognition systems have emerged as an innovative way to interact with Humans and applications. These systems utilize advanced algorithms and machine learning techniques to interpret human hand movements, enabling intuitive and touch-free control.      </p>

    </div>
    <div className="signlang__header-image">
      <img src={SignHand} alt='SIGN-HAND'/>
    </div>
  </div>
  )
}

export default Header