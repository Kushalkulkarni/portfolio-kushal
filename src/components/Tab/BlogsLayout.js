import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import BlogsList from '../BlogsStuff/BlogsList';

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
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade direction="down" ref={ref} {...props}  timeout={750}/>;
});

export default function BlogsLayout(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Quotes</Paper>
      </Grid>
      <Grid item container spacing={0} xs={12}>
        <BlogsList />
      </Grid>
    </>
  );
}