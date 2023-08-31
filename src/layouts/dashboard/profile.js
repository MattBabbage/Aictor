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

export default function Profile() {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return       <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              Not Authenticated
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>;
  }
  return (
    isAuthenticated && (
      <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Avatar alt="Remy Sharp" src={user.picture} />
              Authenticated!
              {user.email}
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
    )

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
