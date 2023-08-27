// src/components/AnimationPage.jsx

import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/jsons/using.json'

class Working extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
        }
        return (
            <div>
               <Lottie
                options={defaultOptions}
                height={250}
                width={250}
               />
            </div>
        )
    };  
}
export default Working;