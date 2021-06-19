import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Slide from '@material-ui/core/Slide';
import { Popper } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: theme.spacing(4),
    right: theme.spacing(6),
    position: "fixed",
    zIndex: 1,
    width: 80,
  },
  div:{
    width: 20,
  },
  fab: {
    margin: 8,
  },
  iconSize: {
    fontSize: 40,
  },
  followButton: {
    marginRight: 15,
  }
}));

export default function CVAndSocialLinks() {
 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const classes = useStyles();
  const [size, color] = ['large', 'secondary']
  const links = ['https://www.linkedin.com/in/kushkul97/', 'https://github.com/Kushalkulkarni', 'https://www.instagram.com/kush_kul7/', '/contact']


  const icons = [
    <LinkedInIcon className={classes.iconSize} />,
    <GitHubIcon className={classes.iconSize} />,
    <InstagramIcon className={classes.iconSize} />,
    <Typography
      variant="h6"
      style={{ color: "black", fontWeight: 700, fontSize: 28 }}
    >
      CV
    </Typography>,
  ];

  const component = icons.map((icon, index) => (
    <Fab
      href={links[index]}
      target={links[index] === "/contact" ? null : "_blank"}
      size={size}
      color={color}
      className={classes.fab}
      children={icon}
      key={index}
    />
  ))

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="flex-end"
      spacing={0}
    >
      <Hidden xsDown>{component}</Hidden>
      <Hidden smUp>
        <Fab
          variant="extended"
          color="secondary"
          className={classes.followButton}
          href={links[0]}
          target={"_blank"}
        >
          <Typography
            variant="h6"
            style={{
              color: "black",
              fontWeight: 700,
              fontSize: 12,
              marginRight: 5,
            }}
          >
            Follow
          </Typography>
          <LinkedInIcon />
        </Fab>
      </Hidden>
    </Grid>
  );
}