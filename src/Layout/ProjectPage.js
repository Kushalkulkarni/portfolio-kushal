import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router';
import projectsArr from '../content/ProjectsInput';
import Divider from '@material-ui/core/Divider';
import { CardMedia } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Carousel from '../components/Cards/Carousel';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import CVAndSocialLinks from '../components/Contact/CVAndSocialLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  subtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  topImage: {
    aspectRatio: 16 / 9,
    width: "100%",
  },
  body: {
    marginTop: 50,
    marginBottom: 100,
  },
  typography: {
    color: theme.palette.text,
  },
}));

export default function ProjectPage(props) {
    const classes = useStyles();

    const params = useParams();
    const projectInfo = projectsArr[params.projectid.split("_").pop()];

    return (
      <Slide in direction="up" timeout={500}>
        <div className={classes.root}>
      <CVAndSocialLinks checked={true}/>
          <Grid container spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid
              item
              xs={10}
              container
              direction="column"
              spacing={0}
              alignItems="center"
              justify="center"
            >
              {/* Title Part */}
              <Typography variant="h2">{projectInfo.page.title}</Typography>
              <br />
              <Typography variant="h4" className={classes.subtitle}>
                {projectInfo.page.subtitle}
              </Typography>
              <br />
              <br />
              {/* Image & Overview */}
              <Grid item xs={12} container spacing={4}>
                <Grid item xs={12} md={7}>
                  <CardMedia
                    className={classes.topImage}
                    image={projectInfo.page.image}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="flex-start"
                >
                  <Typography variant="h6" component="h6">
                    Overview
                  </Typography>
                  <Typography
                    variant="overline"
                    component="p"
                    style={{ color: "#b3dd18" }}
                  >
                    Role
                  </Typography>
                  <Typography variant="body2" component="p">
                    {projectInfo.card.tooltip.role}
                  </Typography>
                  <br />
                  <Typography
                    variant="overline"
                    component="p"
                    style={{ color: "#b3dd18" }}
                  >
                    Industry
                  </Typography>
                  <Typography variant="body2" component="p">
                    {projectInfo.card.tooltip.industry}
                  </Typography>
                  <br />
                  <Typography
                    variant="overline"
                    component="p"
                    style={{ color: "#b3dd18" }}
                  >
                    Field
                  </Typography>
                  <Typography variant="body2" component="p">
                    {projectInfo.card.tooltip.field}
                  </Typography>
                  <br />
                  <Typography
                    variant="overline"
                    component="p"
                    style={{ color: "#b3dd18" }}
                  >
                    ToolSet
                  </Typography>
                  <Typography variant="body2" component="p">
                    {projectInfo.card.tooltip.tools}
                  </Typography>
                  <ButtonGroup
                    style={{ marginTop: 15 }}
                    size="large"
                    color="primary"
                    aria-label="large outlined primary button group"
                  >
                    {projectInfo.page.links.map((link, index) => (
                      <Button
                        href={link.url}
                        target="_blank"
                        endIcon={<OpenInNewIcon />}
                        key={index}
                      >
                        {link.siteName}
                      </Button>
                    ))}
                  </ButtonGroup>
                </Grid>
              </Grid>
              {/* Body */}
              <Grid item xs={12} md={8}>
                <div className={classes.body}>
                  <Divider light />
                  <br />
                  <br />
                  {projectInfo.page.body.map((part, index) => (
                    <div key={index}>
                      <Typography
                        variant={part.variant}
                        children={part.children}
                        align={part.align}
                        color={part.color}
                        gutterBottom={part.gutterBottom}
                        paragraph={part.paragraph}
                      />
                      {part.carousel.length > 0 ? (
                        <Carousel carouselArr={part.carousel} />
                      ) : null}
                    </div>
                  ))}
                  <br />
                  <br />
                  <Divider light />
                  <br />
                  <Typography align="right">
                    {`- Kushal Kulkarni | ` + projectInfo.page.date}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <br />
              <br />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </Slide>
    );
}