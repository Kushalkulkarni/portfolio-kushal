import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 325,
        backgroundColor: theme.palette.background.default,
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      example: {
        color: 'lightblue',
        fontSize: 13,
      }
  }));

export default function HoverCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid>
          <Grid item xs={12}>
            <Typography className={classes.title} gutterBottom>
              {props.myword.description}
            </Typography>
            <Typography
              className={classes.title}
              gutterBottom
              style={{ color: props.color, fontWeight: 900 }}
            >
              {props.myword.description2}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" component="h2">
          {props.myword.word}
        </Typography>
        <Typography className={classes.pos}>{props.myword.type}</Typography>
        <Typography variant="body2" component="p">
          {props.myword.meaning}
          <br />
        </Typography>
        <Typography variant="body2" component="p" className={classes.example}>
          "{props.myword.example}"
        </Typography>
      </CardContent>
    </Card>
  );
}