import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ProjectLayout from '../Tab/ProjectsLayout';
import BlogsLayout from '../Tab/BlogsLayout';
import AboutLayout from './AboutLayout';
import ContactLayout from './ContactLayout';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import BackButton from '../Navigation/BackButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  tabTitle: {
    color: theme.palette.text.green
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade direction="down" ref={ref} {...props}  timeout={1000}/>;
});

export default function TabDialog(props) {
    const classes = useStyles();
  
    return (
      <Dialog fullScreen open={true} TransitionComponent={Transition}>
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={0}
          >
            <Grid
              item
              container
              xs={12}
              sm={12}
              direction="row"
              //justify="center"
              alignItems="center"
            >
              <IconButton
                  edge="false"
                  color="inherit"
                  onClick={props.onCloseTab}
                  aria-label="close"
                >
                  <ArrowBack style={{ fontSize: 75 }} />
                </IconButton>
              <Box>
                <Typography variant="h1" component="h1" align='center' className={classes.tabTitle}>
                  {props.tabNumber === 0
                    ? "Projects"
                    : props.tabNumber === 1
                    ? "Blogs"
                    : props.tabNumber === 2
                    ? "About"
                    : "Contact"}
                </Typography>
              </Box>
              {/* <Paper elevation={0}>Quotes</Paper> */}
            </Grid>
            <Grid item spacing={0} xs={12} sm={12}>
              {props.tabNumber === 0 ? (
                <ProjectLayout />
              ) : props.tabNumber === 1 ? (
                // 'Blogs'
                <BlogsLayout />
              ) : props.tabNumber === 2 ? (
                "About"
              ) : (
                // <AboutLayout />
                "Contact"
                // <ContactLayout />
              )}
            </Grid>
          </Grid>
        </div>
      </Dialog>
    );
  }