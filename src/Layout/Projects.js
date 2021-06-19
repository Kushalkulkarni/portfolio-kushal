import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import ProjectList from '../components/Cards/ProjectsList';
import SelectedProjects from './SelectedProjects.svg';
import ProjectPage from './ProjectPage';
import CVAndSocialLinks from '../components/Contact/CVAndSocialLinks';


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

export default function ProjectLayout(props) {
  const classes = useStyles();

  return (
    <>
      <CVAndSocialLinks checked={true}/>

      <Slide in timeout={1000}>
        <div style={{ margin: "50px 50px 0px 50px" }}>
          <img src={SelectedProjects} alt="SelectedProjects" />
        </div>
      </Slide>

      <Fade in timeout={1500}>
        <Grid container spacing={0} direction="row">
          <Grid item xs={1}>
            {/* <Paper className={classes.paper}>Space</Paper> */}
          </Grid>
          <Grid item xs={10} container spacing={0} justify="center">
            <ProjectList />
          </Grid>
          <Grid item xs={1}>
            {/* <Paper className={classes.paper}>Space</Paper> */}
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}