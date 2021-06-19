import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import ProjectCardNew from '../Cards/ProjectCardNew';
import projectsArr from '../../content/ProjectsInput';
import { Link } from 'react-router-dom';

export default function ProjectList() {
  return projectsArr.map((project, index) => (
    <Grow in timeout={1000} key={index}>
      <Grid item md={12} lg={6} container>
        <Link
          to={`/projects/${project.card.title.replace(" ", "_") + "_" + index}`}
          style={{ textDecoration: "none" }}
        >
          <ProjectCardNew projectDetails={project} projectIndex={index + 1} />
        </Link>
      </Grid>
    </Grow>
  ));
};