import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import colors from '../../../style/colors';
import useStyles from '../../../style/styles';

import { Avatar } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Aictor
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.pastel.dgreen,
    },
    secondary: {
      main: colors.pastel.dgreen,
    },
  },
});

export default function ProfileInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  return (
    <Box padding={"30px"}>
      
      <Stack spacing={2} >
      <Paper elevation={0}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
              <Grid xs={6}>
              <Paper  elevation={0}>
              <img src={user.picture}>
                </img>
              </Paper>
              </Grid>
              <Grid xs={6}>
              <Paper  elevation={0}>
              {user.name} 
              {user.given_name}
              {user.email}
              </Paper>
              </Grid>
        </Stack>

        </Paper>

        <Divider/>
          <Paper elevation={0}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
            <Grid xs={6}>
              <Paper  elevation={0}>
                  <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    5
                </Typography>
                <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Voices
                </Typography>
              </Paper>
              </Grid>
              <Grid xs={6}>
              <Paper  elevation={0}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                      1337
                  </Typography>
                  <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                      Lines Spoken
                  </Typography>
              </Paper>
              </Grid>
        </Stack>
          </Paper>
        <Divider/>
        <Paper elevation={0}>
          <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                      Bio:
          </Typography>
          <Typography variant="body2" align="left"  gutterBottom>
            Greetings, noble traveler! I am the Dwarven Voice Maestro, a master of the vocal arts, specializing in crafting enchanting dwarf voices that will transport you to the heart of the mountains. Whether you seek to bring a stout-hearted warrior, a wily miner, or a jovial tavern-keeper to life, my vocal prowess shall not disappoint.
      </Typography>

        </Paper>
      </Stack>
  </Box>

  );
}