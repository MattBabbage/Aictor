import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Container } from '@mui/material';

import useStyles from '../../style/styles';
// import AnimationPage from 'layouts/animations/AnimationPage';
import { Padding } from '@mui/icons-material';

import Handshake from '../animations/Handshake';

const ThirdHero = () => {
  const classes = useStyles();


  return (
    <Box className={classes.whiteHero}>
        <Box>
            <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                Fair Trade Shit
            </Typography>
            <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                Allowing creators to leverage technology, 50/50 split
            </Typography>
        </Box>
    <Handshake/>
    <div>
        <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <Button variant="contained" className={classes.landingButton}>
                    Create a Voice
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" className={classes.landingButton}>
                    Buy a voice
                </Button>
            </Grid>
        </Grid>
    </div>
</Box>
  );
};

export default ThirdHero;