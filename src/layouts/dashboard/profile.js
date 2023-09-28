import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuth0 } from '@auth0/auth0-react';
import colors from '../../style/colors';
import useStyles from '../../style/styles';
import { Avatar, Stack } from '@mui/material';

import ProfileInfo from './profile/profileinfo';

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


const Item1 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 800,
  lineHeight: '60px',
}));


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 100,
  lineHeight: '60px',
}));

export default function Profile() {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
//   <Item elevation={2}>
//   {`elevation=${2}`}
// </Item>
  return (
    
  <Grid container spacing={2} padding="30px" paddingTop="80px" sx={{backgroundColor:"#B3B6E3", height: '100vh'}}>
    <Grid item xs={6} md={8}>
      <Item1>
        <ProfileInfo/>
        </Item1>
    </Grid>
    <Grid item xs={6} md={4}>
      <Item1>
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Voices
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
      </Item1>
    </Grid>
  </Grid>
  );
}



// {/* <Box
// component="main"
// sx={{
//   backgroundColor: (theme) =>
//     theme.palette.mode === 'light'
//       ? theme.palette.grey[100]
//       : theme.palette.grey[900],
//   flexGrow: 1,
//   height: '100vh',
//   overflow: 'auto',
// }}
// >
// <Toolbar />
// <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//   <Grid container spacing={3}>
//     {/* Chart */}
//     <Grid item xs={12} md={8} lg={9}>
//       <Paper
//         sx={{
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           height: 240,
//         }}
//       >
//         TEST
//       </Paper>
//     </Grid>
//     {/* Recent Deposits */}
//     <Grid item xs={12} md={4} lg={3}>
//       <Paper
//         sx={{
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           height: 240,
//         }}
//       >
        
//       </Paper>
//     </Grid>
//     {/* Recent Orders */}
//     <Grid item xs={12}>
//       <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

//       </Paper>
//     </Grid>
//   </Grid>
//   <Copyright sx={{ pt: 4 }} />
// </Container>
// </Box> */}
