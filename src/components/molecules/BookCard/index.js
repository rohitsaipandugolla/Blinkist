import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ListItem,ListItemIcon} from '@material-ui/core';
import { AiOutlineFieldTime } from "react-icons/ai";
import theme from "../../../themes/index";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:theme.spacing(1.25),
  },
  divider: {
    borderBottom: "1px solid",
  },
});

const BookCard = ({title, author, time, buttonTitle,image,onClick}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <img src={image} style={{height: '100%', width:'100%'}} />
        <CardContent style={{height:'120px'}}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {author}
          </Typography>
          <ListItem >
            <ListItemIcon><AiOutlineFieldTime/></ListItemIcon>
            <Typography>{time}min</Typography>
          </ListItem>
        </CardContent>
      </CardActionArea>
      <div className={classes.divider}></div>
      <CardActions>
        <Button size="small" color="primary" onClick={onClick}>
          {buttonTitle}
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;