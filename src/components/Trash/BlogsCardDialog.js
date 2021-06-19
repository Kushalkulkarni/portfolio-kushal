// Blog Card Imports
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { findByLabelText } from '@testing-library/dom';

//Dialog Imports
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import Slide from '@material-ui/core/Slide';

//Dialog Grid Imports
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 360,
    backgroundColor: '#f8b500',
  },
  media: {
    height: 140,
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const useGridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

export default function BlogCardDialog(props) {
  const classes = useStyles();
  const classesGrid = useGridStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // ---------- //

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            className={classes.media}
            image={props.projectDetails.card.cardMedia.image}
            title={props.projectDetails.card.cardMedia.title}
          />
          <CardContent className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.projectDetails.card.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              {props.projectDetails.modal.date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.projectDetails.card.desription}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions><Button size="small" color="primary" onClick={handleClickOpen}>Learn More</Button></CardActions> */}
      </Card>

      {/* Dialog */}
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>Open full-screen dialog</Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowDownwardRoundedIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Kushal's Blogs
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>save</Button> */}
          </Toolbar>
        </AppBar>

        <div className={classesGrid.root}>
          <Grid container spacing={3} alignItems="stretch" justify="center">
            <Grid item xs={12}>
              <Paper className={classesGrid.paper}>Space</Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper className={classesGrid.paper}>Image</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classesGrid.paper}>
                Title | Subtitle | Short description | Links
              </Paper>
            </Grid>
            <Grid item xs={11}>
              <Paper className={classesGrid.paper}>Image</Paper>
            </Grid>
          </Grid>
        </div>
        {/* <List><ListItem button><ListItemText primary="Phone ringtone" secondary="Titania" /></ListItem><Divider /><ListItem button><ListItemTextprimary="Default notification ringtone"secondary="Tethys"/></ListItem></List> */}
      </Dialog>
    </div>
  );
}