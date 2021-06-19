import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import QuickIntro from '../QuickIntro/QuickIntro';
import { MoonSocialLinkStyle } from '../Contact/SocialLinks';
import { Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    // backgroundImage: `url('${process.env.PUBLIC_URL}/assets/wallpapersden.com_firewatch-digital-art_1920x1080.jpg')`,
  },
  socialLinks: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    //zIndex: 1,
  },
}));

export default function MainArea() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={0}
      className={classes.paperContainer}
    >
      <Grid
        item
        xs={1}
        container
        alignItems="center"
        justify="flex-start"
      ></Grid>
      <Grid item xs={2} container alignItems="center" justify="space-around">
        <MoonSocialLinkStyle />
      </Grid>
      <Grid item xs={8} container alignItems="center" justify="flex-start">
        <Typography variant="h2" component="h2">
          Hello, I'm Kushal
        </Typography>
        <Typography variant="h2" component="h2">
          An aspiring Product Manager!
        </Typography>
      </Grid>
      <Grid item xs={2} container alignItems="center" justify="flex-start">
        <QuickIntro />
      </Grid>
      <Grid
        item
        xs={8}
        container
        alignItems="center"
        justify="flex-start"
      ></Grid>
    </Grid>
  );
}