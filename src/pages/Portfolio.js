import React from "react";
import Card from '@material-ui/core/Card';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../Portfolio.css'
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';




const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#CEE0CF',
    border: '2px solid black',
    maxWidth: 450,
    marginTop: '20%',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }
}));


export default function App() {
  const classes = useStyles();
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }),
  );
  
  let cardStyle = {
    height: '28vw',
    font: 'Raleway, sans-serif'
  }

  return (
    <div className='portfolioPage'>
    <Grid
      container
      spacing={0}
      direction='row'
      className={classes.gridContainer}
      justify="center"
      alignItems = "center"
    >
      <Grid item xs={12} sm={6} md={4} >
      <Card className={classes.root} style={matches ? cardStyle : cardStyle={height: 'auto'}}>
      <CardActionArea href="https://github.com/olliebs1">
        <CardMedia
          className={classes.media}
          image="https://poeticbusiness.co.uk/wp-content/uploads/2020/02/1580817669_maxresdefault.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            Full-stack self built portfolio page.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Self made portfolio page using React.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tech Stack: - React - Javascript - Bootstrap
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} style={cardStyle}>
      <CardActionArea href="https://github.com/olliebs1/FE-Nc-Knews">
        <CardMedia
          className={classes.media}
          image="https://www.techlicious.com/images/misc/reading-news-700px.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            NC-Knews
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            First full-stack project. A Reddit style news aggregation board.{" "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tech Stack: - React - Javascript - Node.js - Heroku - SQL - HTML -
            CSS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} style={cardStyle}>
      <CardActionArea href="https://github.com/olliebs1/AIrene">
        <CardMedia
          className={classes.media}
          image="https://github.com/projectgrotch/project-fe/blob/dev/assets/icon/icon.png?raw=true"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            AIrene
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Final project from Northcoders, a 12 week coding bootcamp in
            Manchester teaching a practical, industry-led curriculum.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tech Stack: - Flutter - Javascript - Dart - Firebase - Node.js -
            Dialogflow
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <br></br>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} style={cardStyle}>
      <CardActionArea href="https://github.com/olliebs1/FacialRecognition">
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGlZBK_8uYZukpelHYgZd3jK4nIcD8JR0KsQ&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Facial Recognition
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Deep learning facial recognition software.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tech Stack: - Python - NumPy - OpenCV
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} style={cardStyle}>
      <CardActionArea href="https://github.com/olliebs1/flappyBird">
        <CardMedia
          className={classes.media}
          image="https://hackaday.com/wp-content/uploads/2014/07/game.gif?w=300"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Flappy Bird
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Deep learning pygame based on a well known flying bird game.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tech Stack: - Python - pygame
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} style={cardStyle}>
      <CardActionArea href="https://github.com/olliebs1/ProductivityApp">
        <CardMedia
          className={classes.media}
          image="https://content.thriveglobal.com/wp-content/uploads/2019/12/Efficiency-Productivity.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Productivity App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Mobile Producitivity app built with Flutter
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tech Stack: - Dart - Flutter - Python - Flask{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
    </Grid>
    </div>
  );
}
