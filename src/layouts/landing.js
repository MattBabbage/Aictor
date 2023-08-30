
import React, { useState, useEffect } from 'react'
import useStyles from '../style/styles';
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import FirstHero from '../components/hero/firsthero';
import SecondHero from '../components/hero/secondhero';
import ThirdHero from '../components/hero/thirdhero';
import FourthHero from '../components/hero/fourthhero';
// TODO remove, this demo shouldn't need to reset the theme.
import TopVectorGreen from '../assets/topvectorshort.svg';
import TopVectorPurple from '../assets/topvectorpurple.svg';
import BotVectorPurple from '../assets/botvectorshort.svg';
import BotVectorGreen from '../assets/botvectorgreen.svg';

import ResponsiveAppBar from "../components/navbar/navbar";

export default function Landing() {
  const classes = useStyles();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
      return {
          width: window.innerWidth,
          height: window.innerHeight
      }
  }

  useEffect(() => {
    const updateDimension = () => {
        setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
}, [screenSize])
  return (
        <div>
            <CssBaseline>
                <ResponsiveAppBar/>
            </CssBaseline>
            
            <img style={{ width: screenSize.width, marginBottom: "-10px"  }} src={TopVectorGreen} alt="React Logo" />
            <FirstHero/>
            <img style={{ width: screenSize.width, marginBottom: "-10px" }} src={BotVectorPurple} alt="React Logo" />
            <SecondHero/>
            <img style={{ width: screenSize.width, marginBottom: "-10px"  }} src={TopVectorPurple} alt="React Logo" />
            <ThirdHero/>
            <img style={{ width: screenSize.width, marginBottom: "-10px"  }} src={BotVectorGreen} alt="React Logo" />
            <FourthHero/>
            <img style={{ width: screenSize.width, marginBottom: "-10px"  }} src={TopVectorGreen} alt="React Logo" />
        </div>
  );
}