import React from 'react';
import './App.css';
import NavBar from '../components/Navigation/NavBar';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

function App() {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
        <NavBar />
        <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
