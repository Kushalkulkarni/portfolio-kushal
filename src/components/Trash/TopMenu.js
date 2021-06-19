import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 100,
    alignItems: "flex-end",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    //backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  appBar: {
    //background: "transparent",
    backgroundColor: 'rgba(0,0,0,0.75)',
    boxShadow: "none",
    borderBottom: '1mm solid',
  },
}));

export default function TopMenu(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              Scroll to Elevate App Bar
            </Typography>
            <Tabs
              value={props.value}
              onChange={props.onOpenTab}
              indicatorColor="primary"
              //textColor={'secondary'}
            >
              <Tab label="Projects" disableRipple />
              <Tab label="Blogs" disableRipple />
              <Tab label="About" disableRipple />
              <Tab label="Contact" disableRipple />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Toolbar />
    </React.Fragment>
  );
}