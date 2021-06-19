import { createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';

let theme = createMuiTheme({
  //Toolbar styling
  palette: {
    primary: {
      light: "#05668d",
      main: "#05668d",
      dark: "#3891a6",
    },
    secondary: {
      light: "#b3dd18",
      main: "#b3dd18",
      dark: "#598b2c",
    },
    background: {
      paper: "#f8f9fa",
      default: "#000000",
    },
    text: {
      primary: "#ffffff", //white
      secondary: "#000000", //black
      green: "#b3dd18",
      blue: "#3891a6",
    },
    divider: "#ffffff",
  },
  typography: {
    fontFamily: `"Raleway", "Roboto","Helvetica", "Arial", sans-serif, "Shadows Into Light"`,
    h1: {
      fontWeight: 400,
      color: "#f8f9fa",
    },
    h2: {
      fontWeight: 400,
      color: "#f8f9fa",
    },
    h3: {
      color: "#f8f9fa",
      fontWeight: 300,
    },
    h4: {
      color: "#f8f9fa",
    },
    h5: {
      color: "#f8f9fa",
    },
    h6: {
      color: "#f8f9fa",
    },
    body1: {
      color: "#f8f9fa",
    },
    body2: {
      color: "#f8f9fa",
    },
    overline: {
      color: "#f8f9fa",
    },
    caption: {
      color: "#f8f9fa",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;