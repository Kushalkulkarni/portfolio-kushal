import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.text.primary,
    },
  }));

export default function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Contact</h1>
        </div>
    )
}