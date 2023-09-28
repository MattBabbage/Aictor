// src/components/AnimationPage.jsx

import React, { Component } from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from './jsons/speaker.json'

export default function Speaking() {
    return (
      <Lottie
        loop
        animationData={lottieJson}
        play
        
        style={{ width: 500, height: 500 }}
      />
    )
  }