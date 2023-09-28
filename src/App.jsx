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
import Voices from "./layouts/dashboard/voices";
import Actors from "./layouts/dashboard/actors";

import theme from "./style/theme";

const envVariables = process.env;
const {
  CLIENTID,
  DOMAIN
} = envVariables;


const App = () => {
    const classes = useStyles();
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
            <Route path="voices" element={<Voices />} />
            <Route path="actors" element={<Actors />} />
            <Route path="*" element={<Loading />} />
          </Route>
      </Routes>
      </ThemeProvider>

      </>

    )

}
export default App;