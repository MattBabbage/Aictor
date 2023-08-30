import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Container } from '@mui/material';

import useStyles from '../../style/styles';
// import AnimationPage from 'layouts/animations/AnimationPage';
import { Padding } from '@mui/icons-material';
import Working from '../animations/Working';

const FourthHero = () => {
  const classes = useStyles();


  return (
    <Box className={classes.greenHero} >
        <Box>
            <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                Save business money
            </Typography>
            <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                Using Automation allows for lower prices for businesses
            </Typography>
        </Box>
    <Working/>
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

export default FourthHero;