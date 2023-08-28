import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Container } from '@mui/material';

import useStyles from '../../styles';
// import AnimationPage from 'layouts/animations/AnimationPage';
import { Padding } from '@mui/icons-material';


import TopVectorGreen from '../../assets/topvectorshort.svg';
import TopVectorPurple from '../../assets/topvectorpurple.svg';
import BotVectorPurple from '../../assets/botvectorshort.svg';
import BotVectorGreen from '../../assets/botvectorgreen.svg';

import Speaking from '../animations/Speaking';

const FirstHero = () => {
  const classes = useStyles();


  return (
    <Box className={classes.whiteHero}>
        <Box>
            <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
            Welcome to Aictor
            </Typography>
            <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                The worlds first AI enabled voice acting platform
            </Typography>
            <div>
        <Grid container spacing={2} justifyContent="center" >
            <Grid item>
                <Button variant="contained" className={classes.landingButton} sx={{margin:'10px'}} >
                    Create a Voice
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" className={classes.landingButton} sx={{margin:'10px'}}>
                    Buy a voice
                </Button>
            </Grid>
        </Grid>
    </div>
        </Box>

    <Speaking/>
</Box>
  );
};

export default FirstHero;