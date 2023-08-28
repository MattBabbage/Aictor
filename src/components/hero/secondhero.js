import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Container, Avatar } from '@mui/material';

import useStyles from '../../styles';
// import AnimationPage from 'layouts/animations/AnimationPage';
import { Padding } from '@mui/icons-material';


import Create from '../animations/Create';
import AIBot from '../animations/AIBot';
import Working from '../animations/Working';

import MultipleStopIcon from '@mui/icons-material/MultipleStop';

const Hero = () => {
  const classes = useStyles();


  return (
    <Box className={classes.purpleHero} >
        
        <Box>
            <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
            Creator Centric
            </Typography>
            <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                We connect Creators to Tools and to Customers
            </Typography>
        </Box>
        
        <Avatar className={classes.circularCard} style={{height:'300px', width:'300px', backgroundColor:'#FFFFFF'}}>
            <AIBot/>
        </Avatar>
        <MultipleStopIcon sx={{color:'#FFFFFF'}}/>
        <Avatar className={classes.circularCard} style={{height:'300px', width:'300px', backgroundColor:'#FFFFFF'}}>
            <Create/>
        </Avatar>
        <MultipleStopIcon sx={{color:'#FFFFFF'}}/>
        <Avatar className={classes.circularCard} style={{height:'300px', width:'300px', backgroundColor:'#FFFFFF'}}>
            <Working/>  
        </Avatar>
        
        
    </Box>


  );
};

export default Hero;