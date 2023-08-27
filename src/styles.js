import { makeStyles } from "@mui/styles";
import colors from "./colors";

const styles = (theme) => {
  return {
    landingNavbar:{
      color: colors.pastel.dgreen,
  },
    landingButton:{
      my: 2, 
      color: colors.pastel.dpurple, 
      display: 'block',
    },
    whiteHero:{
        backgroundColor: colors.background.default,
        width: '100%',
        display: 'flex',
        minHeight: '600px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greenHero:{
      backgroundColor: colors.pastel.dgreen,
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    purpleHero:{
      backgroundColor: colors.pastel.dpurple,
        width: '100%',
        display: 'flex',
        minHeight: '600px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroBox: {
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  };
};

const useStyles = makeStyles(styles);
export default useStyles;