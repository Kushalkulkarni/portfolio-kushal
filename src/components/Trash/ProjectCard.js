// import React from 'react';
// import cx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
// //import TextInfoContent from '@mui-treasury/components/content/textInfo';
// //import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
// //import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
// import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

// import TextInfoContent from './CardContent/TextInfoContent';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 350,
//     height: 500,
//     //maxWidth: 304,
//     margin: 'auto',
//     marginTop: 24,
//     marginBottom: 24,
//     boxShadow: "none",
//     borderRadius: 0,
//     //height: '500px',
//     backgroundColor: theme.palette.background.paper,
//   },
//   content: {
//     padding: 24,
//     backgroundColor: theme.palette.background.paper,
//   },
//   cta: {
//     //marginTop: 24,
//     //bottom: 2,
//     textTransform: "initial",
//   },
//   wideCardMedia: {
//     width: "100%",
//     height: 0,
//     paddingBottom: "56.25%",
//     backgroundColor: "rgba(0, 0, 0, 0.08)",
//   },
// }));

// const textInforContentStyles = makeStyles((theme) => ({
//   overline: {
//     textTransform: "uppercase",
//     color: theme.palette.background.default,
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
//     color: theme.palette.background.default,
//   },
// }));

// export const NewsCardDemo = React.memo(function NewsCard(props) {
//   const styles = useStyles();
//   //const mediaStyles = useWideCardMediaStyles();
//   const textContentStyles = textInforContentStyles();
//   const shadowStyles = useBouncyShadowStyles();

//   return (
//     <>
//       <Card className={cx(styles.root, shadowStyles.root)}>
//         <CardMedia
//           className={styles.wideCardMedia}
//           image={props.projectDetails.card.media.image}
//         />
//         <CardContent className={styles.content}>
//           <TextInfoContent
//             className={textContentStyles}
//             overline={props.projectDetails.modal.date}
//             heading={props.projectDetails.card.title}
//             body={props.projectDetails.card.desription}
//             //userStyle={textContentStyles}
//           />
//         </CardContent>
//         <Button color={"primary"} fullWidth className={styles.cta}>
//           Read More <ChevronRightRounded />
//         </Button>
//       </Card>
//     </>
//   );
// });

// export default NewsCardDemo