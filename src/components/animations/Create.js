// src/components/AnimationPage.jsx

import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/jsons/recording.json'

class Create extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg',
            paddingTop: '81.25%',
            borderRadius: '50%',
            margin: '28px'
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
export default Create;