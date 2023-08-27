import React from "react";
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

import useStyles from "./styles";
import { ThemeProvider } from "@mui/material/styles";

import ResponsiveAppBar from "./components/navbar/navbar";
import Landing from "./layouts/landing";
import colors from "./colors";
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

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
        <CssBaseline>
                <ResponsiveAppBar/>
            </CssBaseline>


           
            <main>
                <div className={classes.container}>
                    <Landing/>
                </div>
            </main>
        </ThemeProvider>
        </>
    )

}
export default App;