import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import QuickIntro from '../QuickIntro/QuickIntro';
import { MoonSocialLinkStyle } from '../Contact/SocialLinks';


const useStyles = makeStyles({
  paperContainer: {
    minWidth: '100%',
    width: 1000,
    height: 600,
    position: "relative",
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    top: 0,
    // backgroundImage: `url('${process.env.PUBLIC_URL}/assets/wallpapersden.com_firewatch-digital-art_1920x1080.jpg')`,
  },
});

export default function MainArea() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={0}
      className={classes.paperContainer}
    >
      <Grid item xs={4} item xs={2} container alignItems="center" justify="space-between">
        <MoonSocialLinkStyle />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h2" component="h2">
          Hello, I'm Kushal
        </Typography>
        <Typography variant="h2" component="h2">
          An aspiring Product Manager!
        </Typography>
        <QuickIntro />
      </Grid>
    </Grid>
  );
}