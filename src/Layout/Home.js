import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MoonSocialLinkStyle } from '../components/Trash/SocialLinksOld';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import WordCard from '../components/Cards/WordCard/WordCard';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import CVAndSocialLinks from '../components/Contact/CVAndSocialLinks'; 
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  contentStart: {
    marginTop: 100,
  },
  text: {
    color: theme.palette.text.green,
    '&:hover': {
      color: "#f00",
    }
  },
  myWordsTitle:{
    fontStyle: "italic",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  myWords: {
    height: 750,
    [theme.breakpoints.down("sm")]: {
      height: 750,
    },
    [theme.breakpoints.down("xs")]: {
      height: 500,
    },
  },
  shortIntro: {
    height: 500,
  },
  letsgetintouch: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 70,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 45,
    },
  },
  footer: {
    padding: '100px 0px 50px 0px',
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 150,
    },
  }
}));

export default function Home() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <CVAndSocialLinks checked={true} />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={1}>
            {/* <Paper className={classes.paper}>Space</Paper> */}
          </Grid>
          <Fade in timeout={2500}>
            <Grid item xs={10} container spacing={0}>
              <Grid item xs={12} md={7} className={classes.contentStart}>
                <Typography variant="h1" component="h1">
                  Hello,
                </Typography>
                <Typography variant="h1" component="h1">
                  I’m Kushal,
                </Typography>
                <br />
                <br />
                <Typography variant="h4" component="h4">
                  a creative misfit, who has fallen in love with the world of
                  Products.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                {/* <Paper className={classes.paper}>xs=12 sm=4</Paper> */}
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction="column"
                className={classes.myWords}
                alignItems="center"
                justify="center"
              >
                <Typography
                  variant="h6"
                  component="h5"
                  className={classes.myWordsTitle}
                >
                  few words that describe my personality...
                </Typography>
                <WordCard />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                container
                className={classes.shortIntro}
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12} sm={8} md={6}>
                  <Divider light />
                  <br />
                  <Typography variant="h4" component="h4">
                    After a stint at starting my own
                    <Link
                      href="https://www.alphaponics.co/"
                      underline={"always"}
                    >
                      {" "}
                      company{" "}
                    </Link>
                    and developing a
                    <Link
                      href="https://www.alphaponics.co/"
                      underline={"always"}
                    >
                      {" "}
                      product{" "}
                    </Link>
                    in the Agri-Tech space, I believe that I have acquired, what
                    I call,
                    <Link underline={"always"}>
                      {" "}
                      a product manager’s toolset{" "}
                    </Link>
                    .
                  </Typography>
                  <br />
                  <Link href="/projects" underline={"hover"}>
                    <Typography variant="h4" component="h4" color="secondary">
                      {" "}
                      Check out my Projects! :D
                    </Typography>
                  </Link>
                  <br />
                  <Typography variant="h4" component="h4">
                    Currently, I am based in Berlin 🇩🇪 and pursuing my Masters
                    in ESCP Business School.
                  </Typography>
                  <br />
                  <Typography variant="h4" component="h4">
                    I am proactively looking for opportunities to work with new
                    people on cool projects. Got some Ideas?
                  </Typography>

                  <br />
                  <Divider light />
                </Grid>
                <Box mt={10} width="100%">
                  <Link href="/contact">
                    <Typography
                      variant="h1"
                      component="h1"
                      align="center"
                      color="secondary"
                      style={{ fontWeight: 900 }}
                      className={classes.letsgetintouch}
                    >
                      LET'S GET IN TOUCH!
                    </Typography>
                  </Link>
                </Box>
                <Box className={classes.footer}>
                  <Typography variant="body1" component="p">
                    2021 | Copyright | Berlin
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Fade>
          <Grid item xs={1}>
            {/* <Paper className={classes.paper}>Space</Paper> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}