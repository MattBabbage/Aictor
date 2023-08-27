import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Container } from '@mui/material';

import useStyles from '../../styles';
// import AnimationPage from 'layouts/animations/AnimationPage';
import { Padding } from '@mui/icons-material';
import Working from '../animations/Working';

const FourthHero = () => {
  const classes = useStyles();


  return (
    <Box className={classes.greenHero} >
    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Save Time & Money
    </Typography>
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