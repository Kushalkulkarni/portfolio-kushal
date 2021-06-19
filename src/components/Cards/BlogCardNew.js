import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
//import BlogPage from '../../Layout/BlogPage';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "auto", //16:9 media
    margin: "50px 0px 25px 0px",
    backgroundColor: "#000000",
    [theme.breakpoints.down("md")]: {
      margin: "50px 0px 0px 0px",
    },
  },
  media: {
    aspectRatio: 16 / 9,
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  content: {
      margin: '0px 5px 0px 5px'
  }
}));

export const BlogCardNew = React.memo(function MyBlogCard(props) {
  const classes = useStyles();
  
  return (
    <>
      <Card className={classes.root} square>
        <CardContent>
          <Grid container spacing={4} direction={props.layoutdirection}>
            <Grid item xs={12} md={8} >
              {/* <Box ml={props.layoutdirection === "row" ? 0 : 5}> */}
                <Box mr={10} >
                  <Typography variant="h3" component="h3" >
                    {props.blogDetails.card.title}
                  </Typography>
                  <Grid item container style={{ marginTop: 20 }}>
                    <Grid item xs={12} md={2}>
                      <Typography variant="body1" component="p">
                        {props.blogDetails.modal.date}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <Divider light style={{ marginTop: "15px" }} />
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={2}>
                  <Typography variant="body1" component="p">
                    {props.blogDetails.card.desription}
                  </Typography>
                </Box>
              {/* </Box> */}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <CardMedia
                  className={classes.media}
                  image={props.blogDetails.card.media.image}
                  title="Contemplative Reptile"
                />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
});

export default BlogCardNew;
