/**
=========================================================
* Aictor React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Aictor React base styles
import colors from "./colors";

// @mui material components
import { createTheme } from "@mui/material/styles";


export default createTheme({
        palette: {
          primary: {
            main: colors.pastel.dgreen,
          },
          secondary: {
            main: colors.pastel.dpurple,
          },
          typography: {
            button: {
              textTransform: 'none'
            }
          }
        }
});

