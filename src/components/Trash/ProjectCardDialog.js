// Project Card Imports
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
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import Slide from '@material-ui/core/Slide';

//Dialog Grid Imports
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Combine
const useCardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '345',
    height: 400,
    backgroundColor: '#ee9b00',
  },
  media: {
    width: 370,
    height: 200,
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const useDialogStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f8b500'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: '394px',
    width: '700px',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

export default function ProjectCardDialog(props) {
  const classesCard = useCardStyles();
  const classesDialog = useDialogStyles();

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
      <Card className={classesCard.root}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            className={classesCard.media}
            image={props.projectDetails.card.media.image}
            title={props.projectDetails.card.media.title}
          />
          <CardContent className={classesCard.root}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.projectDetails.card.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.projectDetails.card.desription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className={classesDialog.root}>
          <Grid container spacing={4} alignItems="center" justify="center">
            <Grid
              item
              xs={9}
              container
              justify="flex-start"
              alignItems="flex-start"
            >
              <Typography variant="h1" component="h1">
                PROJECTS
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              // container
              // justify="center"
              // alignItems="center"
            >
              <IconButton
                edge="false"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <ExpandMoreRoundedIcon style={{ fontSize: 150 }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              container
              spacing={4}
              alignItems="flex-start"
              justify="center"
            >
              <Grid
                item
                xs={6}
                container
                spacing={4}
                alignItems="stretch"
                justify="flex-start"
              >
                <Grid item xs={12}>
                  <CardMedia
                    //style={{ height: 400}}
                    className={classesDialog.media}
                    image={props.projectDetails.card.media.image}
                    title={props.projectDetails.card.media.title}
                  />
                  {/* <Paper style={{ height: 400 }}>
                    
                  </Paper> */}
                </Grid>
                <Grid item xs={12}>
                  <Paper style={{ height: 50 }}>Links</Paper>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                container
                spacing={4}
                alignItems="stretch"
                justify="flex-start"
              >
                <Grid item xs={12}>
                  <Typography variant="h2" component="h2">
                    {props.projectDetails.modal.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h4">
                    {props.projectDetails.modal.subtitle}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" component="body1">
                    {props.projectDetails.modal.body}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}