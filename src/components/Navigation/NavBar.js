import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GroupWorkOutlined from '@material-ui/icons/GroupWorkOutlined';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// Pages
import Projects from '../../Layout/Projects';
import Blogs from '../../Layout/Blogs';
import About from '../../Layout/About';
import Contact from '../../Layout/Contact';
import Home from '../../Layout/Home';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import ProjectPage from '../../Layout/ProjectPage';
import ScrollToTop from "./ScrollToTop";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    color: "#b3dd18",
    padding: 0,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "rgba(0,0,0,0.75)",
    boxShadow: "none",
    borderBottom: "2px solid",
  },
  toolbar: {
    width: "auto",
    margin: "15px 20px 15px 20px",
    color: theme.palette.background.paper,
    fontSize: 15,
    [theme.breakpoints.down("xs")]: {
      margin: "15px 10px 15px 10px",
      fontSize: 12,
    },
    "&:hover": {
      color: "#b3dd18",
    },
  },
  navLink: {
    color: theme.palette.secondary.main,
  },
  logo: {
    fontFamily: "Shadows Into Light",
    fontSize: 40,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  }
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
      <ScrollToTop />
        <Route path="/">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                component={Link}
                to={"/"}
              >
                <Typography
                  color="secondary"
                  className={classes.logo}
                >
                  KmK
                </Typography>
                {/* <Typography style={{marginLeft: 20}}>
                {`(⌐■‿■)ノ`}
                </Typography> */}
                {/* <GroupWorkOutlined style={{ fontSize: 35 }} /> */}
              </IconButton>
              <Typography variant="h6" className={classes.title}></Typography>
              <Tabs
                // value={"/"}
                // onChange={props.onOpenTab}
                indicatorColor="primary"
                textColor="secondary"
              >
                <NavLink
                  activeClassName={classes.navLink}
                  className={classes.toolbar}
                  style={{ textDecoration: "none" }}
                  to="/projects"
                >
                  PROJECTS
                </NavLink>
                <NavLink
                  activeClassName={classes.navLink}
                  className={classes.toolbar}
                  style={{ textDecoration: "none" }}
                  to="/blogs"
                >
                  BLOGS
                </NavLink>
                <NavLink
                  activeClassName={classes.navLink}
                  className={classes.toolbar}
                  style={{ textDecoration: "none" }}
                  to="/about"
                >
                  ABOUT
                </NavLink>
                <NavLink
                  activeClassName={classes.navLink}
                  className={classes.toolbar}
                  style={{ textDecoration: "none" }}
                  to="/contact"
                >
                  CONTACT
                </NavLink>
                {/* <Tab
                  label="Projects"
                  value={"/projects"}
                  className={classes.toolbar}
                  component={Link}
                  to={"/projects"}
                  disableRipple
                />
                <Tab
                  label="Blogs"
                  value={"/blogs"}
                  className={classes.toolbar}
                  component={Link}
                  to={"/blogs"}
                  disableRipple
                />
                <Tab
                  label="About"
                  value={"/about"}
                  className={classes.toolbar}
                  component={Link}
                  to={"/about"}
                  disableRipple
                />
                <Tab
                  label="Contact"
                  value={"/contact"}
                  className={classes.toolbar}
                  component={Link}
                  to={"/contact"}
                  disableRipple
                /> */}
              </Tabs>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </Route>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/projects/:projectid" exact>
            <ProjectPage />
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}