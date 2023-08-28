// src/components/AnimationPage.jsx

import React, { Component } from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../animations/jsons/handshake.json'

export default function Handshake() {
    return (
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 400, height: 400 }}
      />
    )
  }