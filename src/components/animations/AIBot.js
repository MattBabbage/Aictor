// src/components/AnimationPage.jsx

import React, { Component } from 'react';
import Lottie from 'react-lottie-player'
import lottieJson from '../animations/jsons/ai.json'

export default function AIBot() {
    return (
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 250, height: 250 }}
      />
    )
  }