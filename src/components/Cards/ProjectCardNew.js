import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import Hidden from '@material-ui/core/Hidden';
import ReactTooltip from 'react-tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "auto", //16:9 media
    margin: "75px 50px 0px 50px",
    backgroundColor: "#000000",
    [theme.breakpoints.down("md")]: {
      margin: "75px 0px 0px 0px",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  media: {
    opacity: 0.9,
    marginTop: 30,
    aspectRatio: 16 / 9,
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
    "&:hover": {
      opacity: 1,
      // backgroundColor: 'red',
    },
  },
  content: {
    padding: 0,
    marginTop: 10,
    height: 180,
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
}));

export const MyProjectCard = React.memo(function MyProjectCard(props) {
  const classes = useStyles();
  
  return (
    <>
      <Hidden xsDown>
        <ReactTooltip
          id={props.projectDetails.card.title}
          place="bottom"
          effect="float"
          delayShow={250}
          backgroundColor={"#05668d"}
        >
          <Box width="250px">
            <Typography variant="h6" component="h6">
              Summary: {props.projectDetails.card.title}
            </Typography>
            <Typography
              variant="overline"
              component="p"
              style={{ color: "#b3dd18" }}
            >
              Role
            </Typography>
            <Typography variant="caption" component="p">
              {props.projectDetails.card.tooltip.role}
            </Typography>
            <br />
            <Typography
              variant="overline"
              component="p"
              style={{ color: "#b3dd18" }}
            >
              Industry
            </Typography>
            <Typography variant="caption" component="p">
              {props.projectDetails.card.tooltip.industry}
            </Typography>
            <br />
            <Typography
              variant="overline"
              component="p"
              style={{ color: "#b3dd18" }}
            >
              Field
            </Typography>
            <Typography variant="caption" component="p">
              {props.projectDetails.card.tooltip.field}
            </Typography>
            <br />
            <Typography
              variant="overline"
              component="p"
              style={{ color: "#b3dd18" }}
            >
              ToolSet
            </Typography>
            <Typography variant="caption" component="p">
              {props.projectDetails.card.tooltip.tools}
            </Typography>
          </Box>
        </ReactTooltip>
      </Hidden>
      <Card
        className={classes.root}
        square
        data-tip
        data-for={props.projectDetails.card.title}
      >
        <CardContent className={classes.content}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="column"
              alignItems="baseline"
            >
              <Typography variant="h5" component="h5">
                #{props.projectIndex}
              </Typography>
              <Typography variant="overline" component="p">
                {props.projectDetails.page.date}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} container alignItems="flex-end">
              <Typography variant="h3" component="h3">
                {props.projectDetails.card.title}
              </Typography>
            </Grid>
            <Hidden xsDown>
              <Grid
                item
                xs={2}
                container
                alignItems={"flex-end"}
                justify="flex-end"
              >
                <CallReceivedIcon style={{ fontSize: 50 }} />
              </Grid>
            </Hidden>
          </Grid>
          <Divider light style={{ marginTop: "20px" }} />
          <Box mt={4} mb={4}>
            <Typography variant="body1" component="p">
              {props.projectDetails.card.desription}
            </Typography>
          </Box>
        </CardContent>
        <Box mt={4} mb={4}>
          <CardMedia
            className={classes.media}
            image={props.projectDetails.card.image}
          />
        </Box>
      </Card>
    </>
  );
});

export default MyProjectCard;
