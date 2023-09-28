import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Container, Avatar } from '@mui/material';

import useStyles from '../../style/styles';
// import AnimationPage from 'layouts/animations/AnimationPage';
import { Padding } from '@mui/icons-material';


import Create from '../animations/Create';
import AIBot from '../animations/AIBot';
import Working from '../animations/Working';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Hero = () => {
  const classes = useStyles();

//   <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
//   Use Voices
//   </Typography>
  return (
    <Box className={classes.purpleHero} >

<Stack
          alignItems="center"
  justify="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        >
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Use Voices
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs="auto">
        <Item>
                <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Select a Voice
                </Typography>
                <TextField id="outlined-basic" label="Write Here" variant="outlined" />
            </Item>
        </Grid>
        <Grid item xs="auto">
            <Item>
                <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Insert Message
                </Typography>
                <TextField id="outlined-basic" label="Write Here" variant="outlined" />
            </Item>
            
        </Grid>
        <Grid item xs="auto">
        <Item>
                <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Get your Audio
                </Typography>
                <TextField id="outlined-basic" label="Write Here" variant="outlined" />
            </Item>
        </Grid>
        </Grid>
        
        </Stack>



    
    </Box>


  );
};

export default Hero;