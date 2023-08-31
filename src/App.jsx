import React from "react";
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

import useStyles from "./style/styles";
import { ThemeProvider } from "@mui/material/styles";


import Landing from "./layouts/landing";
import colors from "./style/colors";
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

import { Route, Routes, Link } from "react-router-dom"
import Dashboard from "./layouts/dashboard";
import Profile from './layouts/dashboard/profile';
import CreateVoice from './layouts/dashboard/createvoice';
import Loading from './layouts/dashboard/Loading';

const envVariables = process.env;
const {
  CLIENTID,
  DOMAIN
} = envVariables;


const App = () => {
    const classes = useStyles();
    const theme = createTheme({
        palette: {
          primary: {
            main: colors.pastel.dgreen,
          },
          secondary: {
            main: colors.pastel.dgreen,
          },
        },
      });
    return (
      <>
      <ThemeProvider theme={theme}>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/dashboard" element={ <Dashboard /> }>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="createvoice" element={<CreateVoice />} />
            <Route path="*" element={<Profile />} />
          </Route>
      </Routes>
      </ThemeProvider>

      </>

    )

}
export default App;