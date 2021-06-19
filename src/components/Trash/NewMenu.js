import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const coolers = {
  bg: 'rgba(0, 0, 0, 0.87)',
  menu: 'rgba(0, 0, 0, 0.87)',
  tab: '#212529',
  text: '#F8F9FA',
  d1: '#343A40',
  d2: '#495057',
  d3: '#6C757D',
  d4: '#ADB5BD',
  b1: '#000000',
  b2: '#0d0d0d',
  b3: '#191919',
  b4: '#262626',
  b5: '#333333',
  white1: '#f8f9fa',
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  root: {
    flexGrow: 1,
    backgroundColor: coolers.bg,
  },
  drawer: {
    top: 0,
    bottom: "auto",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  fabButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: "394px",
    width: "700px",
    backgroundColor: "#f7f7f7",
    textAlign: "center",
  },
  tabProject: {
    flexGrow: 1,
    backgroundColor: coolers.b3,
  },
  customOne: {
    padding: "3rem 16rem",
    flexGrow: 1,
    color: "#f8f9fa",
    backgroundColor: "#577590",
    fontSize: "2rem",
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="#1b998b" className={classes.appBar}>
        <Paper square elevation={0} className={classes.root}>
          <Tabs
            value={props.value}
            onChange={props.onOpenTab}
            indicatorColor=""
            textColor="#fffdf7"
            centered
          >
            <Tab label="Projects" />
            <Tab label="Blogs" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Paper>
      </AppBar>
    </>
  );
}