import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Container } from '@mui/material';

import useStyles from '../../style/styles';
// import AnimationPage from 'layouts/animations/AnimationPage';
import { Padding } from '@mui/icons-material';


import TopVectorGreen from '../../assets/topvectorshort.svg';
import TopVectorPurple from '../../assets/topvectorpurple.svg';
import BotVectorPurple from '../../assets/botvectorshort.svg';
import BotVectorGreen from '../../assets/botvectorgreen.svg';
import { Stack } from '@mui/material';
import Speaking from '../animations/Speaking';
import Create from '../animations/Create';
import MicDrop from '../../assets/undraw_mic_drop_uuyg.svg'

const FirstHero = () => {
  const classes = useStyles();


  return (
    <Box className={classes.whiteHero}>
        <Stack
          alignItems="center"
  justify="center"
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        >
        <Box>
            <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
            Own your Voice with Aictor
            </Typography>
            <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                Create, Use and Profit from Voices
            </Typography>
            <div>
        <Grid container spacing={2} justifyContent="center" >
            <Grid item>
                <Button size="large" variant="contained" className={classes.landingButton} sx={{margin:'10px', textTransform: 'none'}} >
                <Typography variant="buttontext" color="textPrimary" gutterBottom>
                    Start for Free!
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    </div>
        </Box>
        <Speaking/>
        </Stack>


    
</Box>
  );
};

export default FirstHero;