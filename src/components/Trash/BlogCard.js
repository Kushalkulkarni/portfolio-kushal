// import React from 'react';
// import cx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
// import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
// import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
// import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
// //import TextInfoContent from '@mui-treasury/components/content/textInfo';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';


// import TextInfoContent from '../ProjectsStuff/Card/CardContent/TextInfoContent';

// const useStyles = makeStyles(() => ({
//   root: {
//     width: 450,
//     height: 500,
//     margin: "15px 10px 15px 10px",
//     backgroundColor: "#000000",
//   },
//   content: {
//     padding: 24,
//     color: "#f8f9fa",
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     border: "2px solid #fff",
//     margin: "-48px 32px 0 auto",
//     "& > img": {
//       margin: 0,
//     },
//   },
// }));

// const textInforContentStyles = makeStyles(() => ({
//   overline: {
//     textTransform: "uppercase",
//     color: "white",
//     letterSpacing: "1px",
//     fontSize: 12,
//     marginBottom: "0.875em",
//     display: "inline-block",
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: "0.4em",
//   },
//   body: {
//     fontSize: 16,
//     color: "white",
//   },
// }));

// export const BlogCard = React.memo(function PostCard(props) {
//   const cardStyles = useStyles();
//   const mediaStyles = useSlopeCardMediaStyles();
//   const shadowStyles = useBouncyShadowStyles();
//   //const textCardContentStyles = useN01TextInfoContentStyles();
//   const textContentStyles = textInforContentStyles();

//   return (
//     <Card className={cx(cardStyles.root, shadowStyles.root)}>
//       <CardMedia
//         classes={mediaStyles}
//         image={props.blogDetails.card.cardMedia.image}
//       />
//       {/* <Avatar className={cardStyles.avatar} src={'https://i.pravatar.cc/300'} /> */}
//       <CardContent className={cardStyles.content}>
//         <TextInfoContent
//           classes={textContentStyles}
//           overline={props.blogDetails.modal.date}
//           heading={props.blogDetails.card.title}
//           body={props.blogDetails.card.desription}
//           //userStyle={//textContentStyles}
//         />
//       </CardContent>
//       <Box px={2} pb={2} mt={-1}>
//           <Button size="large" href="#text-buttons" color="secondary">
//             Read More
//           </Button>
//         {/* <IconButton>
//           <Share />
//         </IconButton>
//         <IconButton>
//           <FavoriteBorderRounded />
//         </IconButton> */}
//       </Box>
//     </Card>
//   );
// });

// export default BlogCard;