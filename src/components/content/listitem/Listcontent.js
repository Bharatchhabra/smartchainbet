import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import {
  Button,
  Grid,
  Typography,
  CssBaseline,
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
} from "@material-ui/core";
import { BiArrowBack } from "react-icons/bi";
import EModal from '../../header/EModal'
import Listitem from "./Listitem";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 0",
  },
  button: {
    margin: theme.spacing(1),
    color: "#A975FF",
    fontFamily: "poppins",
    fontSize: "18px",
    textTransform: "capitalize",
  },
  heading: {
    margin: "auto",
    fontFamily: "poppins",
    fontSize: "24px",
    padding: "20px 0 20px 0",
  },
  headingcon: {
    margin: "auto",
  },
  headingcontainer: {
    padding: "0px 40px",
  },
}));



export const Listcontent = () => {
  let history = useHistory();
  const classes = useStyles();
  
  const handleBack = ()=> {
    history.push("/secondtable");
  }
  return (
    <div className={classes.root}>
      <Grid container direction="row" className={classes.headingcontainer}>
        <Grid item>
          
          <Button className={classes.button} startIcon={<BiArrowBack />} onClick={handleBack}>
           
            Back
          </Button>
          
        </Grid>
        <Grid item className={classes.headingcon}>
        <Typography className={classes.heading} variant="h4" component="h2">
          Major League Baseball – Aug 22
        </Typography>
          <Listitem
            time="7:10 pm"
            bodytext="Arizona"
            texth="Diamondbacks"
            textbdy="Colorado"
            texthh="Diamondbacks"
          />
          <Listitem
            time="8:05 pm"
            bodytext="Philadelphia"
            texth="Phillies"
            textbdy="San Diego"
            texthh="Padres"
          />
          <Listitem
            time="8:55 pm"
            bodytext="Atlanta"
            texth="Braves"
            textbdy="Baltimore"
            texthh="Orioles"
          />
          <Listitem
            time="7:10 pm"
            bodytext="Arizona"
            texth="Diamondbacks"
            textbdy="Colorado"
            texthh="Diamondbacks"
          />
          <Listitem
            time="8:05 pm"
            bodytext="Philadelphia"
            texth="Phillies"
            textbdy="San Diego"
            texthh="Padres"
          />
          <Listitem
            time="8:55 pm"
            bodytext="Atlanta"
            texth="Braves"
            textbdy="Baltimore"
            texthh="Orioles"
          />
        </Grid>
      </Grid>
      
    </div>
  );
};
