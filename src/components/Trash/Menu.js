import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CloseIconRounded from '@material-ui/icons/CloseRounded';
import ArrowBack from '@material-ui/icons/ArrowBack';

import ProjectList from '../ProjectsStuff/ProjectsList';
import BlogList from '../BlogsStuff/BlogsList';

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
  tabBlog: {
    flexGrow: 1,
    backgroundColor: "#0a9396",
  },
  tabAbout: {
    flexGrow: 1,
    backgroundColor: "#e9d8a6",
  },
  tabContact: {
    flexGrow: 1,
    backgroundColor: "#c5d86d",
  },
  customOne: {
    padding: "3rem 16rem",
    flexGrow: 1,
    color: "#f8f9fa",
    backgroundColor: "#577590",
    fontSize: "2rem",
  },
  customTwo: {
    padding: "1rem 5rem",
    flexGrow: 1,
    color: "#f8f9fa",
    backgroundColor: "#90be6d",
    fontSize: "2rem",
  },
  customThree: {
    padding: "1rem 16rem",
    flexGrow: 1,
    color: "#f8f9fa",
    backgroundColor: "#f8961e",
    fontSize: "2rem",
  },
  customFour: {
    padding: "0rem",
    flexGrow: 1,
    color: "#f8f9fa",
    backgroundColor: "#f94144",
    fontSize: "2rem",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade direction="down" ref={ref} {...props}  timeout={1000}/>;
});

export default function Menu() {
  const classes = useStyles();

  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  // Dialog ----------------------------------------------------------------
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {setOpen1(true);};
  const handleClose1 = () => {setOpen1(false);};

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {setOpen2(true);};
  const handleClose2 = () => {setOpen2(false);};

  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {setOpen3(true);};
  const handleClose3 = () => {setOpen3(false);};

  const [open4, setOpen4] = React.useState(false);
  const handleClickOpen4 = () => {setOpen4(true);};
  const handleClose4 = () => {setOpen4(false);};

  return (
    <>
      <AppBar position="fixed" color="#1b998b" className={classes.appBar}>
        <Paper square elevation={0} className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor=""
            textColor="#fffdf7"
            centered
          >
            <Tab label="Projects" onClick={handleClickOpen1} />
            <Tab label="Blogs" onClick={handleClickOpen2} />
            <Tab label="About" onClick={handleClickOpen3} />
            <Tab label="Contact" onClick={handleClickOpen4} />
          </Tabs>
        </Paper>
      </AppBar>
      <div>
        <Dialog fullScreen open={open1} TransitionComponent={Transition}>
          <div className={classes.tabProject}>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Grid
                item
                xs={10}
                container
                justify="flex-end"
                alignItems="flex-start"
              >
                <Typography variant="h2" component="h2">
                  PROJECTS
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  edge="false"
                  color="inherit"
                  onClick={handleClose1}
                  aria-label="close"
                >
                  <ArrowBack style={{ fontSize: 50 }} />
                </IconButton>
              </Grid>
            </Grid>
            <div style={{ margin: 0, width: "100%" }}>
              <Grid
                container
                item
                xs={12}
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                <ProjectList />
              </Grid>
            </div>
          </div>
        </Dialog>
      </div>
      <div>
        <Dialog fullScreen open={open2} TransitionComponent={Transition}>
          <div className={classes.tabBlog}>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Grid
                item
                xs={10}
                container
                justify="flex-end"
                alignItems="flex-start"
              >
                <Typography variant="h2" component="h2">
                  BLOGS
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  edge="false"
                  color="inherit"
                  onClick={handleClose2}
                  aria-label="close"
                >
                  <CloseIconRounded style={{ fontSize: 100 }} />
                </IconButton>
              </Grid>
              <Grid
                container
                item
                xs={12}
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                <BlogList />
              </Grid>
            </Grid>
          </div>
        </Dialog>
      </div>
      <div>
        <Dialog fullScreen open={open3} TransitionComponent={Transition}>
          <div className={classes.tabAbout}>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Grid
                item
                xs={10}
                container
                justify="flex-end"
                alignItems="flex-start"
              >
                <Typography variant="h2" component="h2">
                  ABOUT
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  edge="false"
                  color="inherit"
                  onClick={handleClose3}
                  aria-label="close"
                >
                  <CloseIconRounded style={{ fontSize: 100 }} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Dialog>
      </div>
      <div>
        <Dialog fullScreen open={open4} TransitionComponent={Transition}>
          <div className={classes.tabContact}>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Grid
                item
                xs={10}
                container
                justify="flex-end"
                alignItems="flex-start"
              >
                <Typography variant="h2" component="h2">
                  CONTACT
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  edge="false"
                  color="inherit"
                  onClick={handleClose4}
                  aria-label="close"
                >
                  <CloseIconRounded style={{ fontSize: 100 }} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Dialog>
      </div>
    </>
  );
}