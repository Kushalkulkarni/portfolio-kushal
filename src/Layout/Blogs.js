import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import BlogList from '../components/Cards/BlogsList';
import { Typography } from '@material-ui/core';
import SelectedBlogs from './SelectedBlogs.svg';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#151111",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    heading: {
      fontWeight: 900,
      fontSize: '9rem',
      stroke: '2px',
      strokeWidth: 8,
      color: 'transparent'
    }
  }));


//   const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Fade direction="down" ref={ref} {...props}  timeout={750}/>;
// });

export default function BlogsLayout(props) {
  const classes = useStyles();

  return (
    <>
        <Slide in timeout={1000}>
          <div style={{ margin: "50px 150px 0px 150px" }}>
            <img src={SelectedBlogs} alt="SelectedBlogs" />
          </div>
        </Slide>

      <Fade in timeout={1500}>
        <Grid container spacing={0} direction="row">
          <Grid item xs={1}>
            {/* <Paper className={classes.paper}>Space</Paper> */}
          </Grid>
          <Grid item xs={10} container spacing={0} justify="center">
            <BlogList />
          </Grid>
          <Grid item xs={1}>
            {/* <Paper className={classes.paper}>Space</Paper> */}
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}