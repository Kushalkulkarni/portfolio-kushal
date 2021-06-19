import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import myWordsArr from '../../../content/MyWordsInput';
import HoverCard from './HoverCard';
import ReactTooltip from 'react-tooltip';

const useStyles = makeStyles((theme) => ({
  wordDiv: {
    width: "100%",
  },
  word: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 60,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
  },
  
}));

const color = ['#3891a6', '#598b2c', '#840032', '#e59500'];

export default function WordCard(props) {
  const classes = useStyles();

  return myWordsArr.map((myword, index) => (
    <div className={classes.wordDiv} data-tip data-for={myword.word} key={index}>
      <Typography
        variant="h1"
        align="center"
        className={classes.word}
        style={{  
          color: color[index],
          fontWeight: 700,
        }}
      >
        {myword.word}
        {/* <Typography variant="h4">{myword.emoji} </Typography> */}
        {/* "." only for styling */}
      </Typography>

      <ReactTooltip
        id={myword.word}
        place="bottom"
        effect="float"
        backgroundColor={"transparent"}
      >
        <HoverCard myword={myword} color={color[index]} />
      </ReactTooltip>
    </div>
  ));

}



// return myWordsArr.map((item) => (
//   <Typography variant="h3" component="h3" align="center">
//     {item.word}
//   </Typography>
// ));